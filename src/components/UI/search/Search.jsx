import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <img className={styles.icon} src="img/search.svg" alt="search" />
      <input className={styles.input} type="search" placeholder="Поиск..." />
    </div>
  );
};

export default Search;
