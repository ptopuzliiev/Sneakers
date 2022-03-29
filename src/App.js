import './App.scss';
import Header from './components/header/header';
import 'macro-css';
import Card from './components/card/Card';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay d-none">
        <div className="drawer d-flex flex-column">
          <div className="d-flex justify-between align-center mb-30">
            <h2>Корзина</h2>
            <button className="closeCart" type="button">
              <img
                src="img/close-btn.svg"
                alt="close btn"
                width={32}
                height={32}
              />
            </button>
          </div>

          <div className="drawerItems mb-30">
            <div className="cart-item d-flex align-center mb-20">
              <img src="img/img2.png" alt="sneakers" width={70} height={70} />
              <div className="ml-15 mr-15">
                <p className="cart-item__text">
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b className="cart-item__price">12 999 руб.</b>
              </div>
              <button className="closeCart" type="button">
                <img
                  src="img/close-btn.svg"
                  alt="close btn"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
          <dl className="cart-list mb-5">
            <div className="d-flex justify-between align-end mb-20">
              <dt>Итого:</dt>
              <span className="cart-list__decor"></span>
              <dd>
                <b>21 498 руб.</b>
              </dd>
            </div>

            <div className="d-flex justify-between align-end mb-20">
              <dt>Налог 5%:</dt>
              <span className="cart-list__decor"></span>
              <dd>
                <b>1074 руб.</b>
              </dd>
            </div>
          </dl>
          <button className="greenButton" type="button">
            Оформить заказ
            <img
              className="greenButton__icon"
              src="img/arrow-right.svg"
              alt="arrow right"
              width={13}
              height={12}
            />
          </button>
        </div>
      </div>

      <Header />
      <div className="container">
        <div className="content__top d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img className="search__icon" src="img/search.svg" alt="search" />
            <input
              className="search__input"
              type="search"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="card-row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
