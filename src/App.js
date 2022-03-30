import './App.scss';
import Header from './components/UI/header/Header';
import 'macro-css';
import Card from './components/UI/card/Card';
import Drawer from './components/Drawer';
import Search from './components/UI/search/Search';
import { useEffect, useState } from 'react';
import SneakersService from './API/SneakersService';
import Loader from './components/UI/loader/Loader';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SneakersService.getSneakers().then((res) => setSneakers(res.data));
      fetch('https://624474943da3ac772b1001d0.mockapi.io/items')
        .then((res) => res.json())
        .then((json) => {
          setSneakers(json);
          setIsLoading(true);
        });
    }, 0);
  }, []);
  const openCart = () => {
    setIsOpenCart(true);
  };

  const closeCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = () => {};
  return (
    <div className="wrapper clear">
      {isOpenCart && (
        <Drawer
          closeCart={closeCart}
          items={cartItems}
          removeFromCart={removeFromCart}
        />
      )}
      <Header openCart={openCart} />
      <div className="container">
        <div className="content__top d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <Search />
        </div>

        {!isLoading ? (
          <Loader />
        ) : (
          <div className="card-row">
            {sneakers.map((sneaker) => (
              <Card
                key={sneaker.id}
                id={sneaker.id}
                title={sneaker.title}
                price={sneaker.price}
                imgSrc={sneaker.imgSrc}
                onPlus={(obj) => addToCart(obj)}
                onFavorite={() => console.log('test2')}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
