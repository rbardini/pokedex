import React from 'react';

import styles from './SearchField.module.css';

const SearchField = ({ onChange, value, ...props}) => (
  <input
    autoFocus
    className={styles.searchField}
    onChange={onChange} type="text" value={value}
    placeholder="Search for Pokémon"
    {...props}
  />
);

export default SearchField;
