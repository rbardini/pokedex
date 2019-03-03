import React, { useCallback } from 'react';

import styles from './SearchField.module.css';

const SearchField = ({ onChange, value }) => {
  const handleChange = useCallback(e => onChange(e.target.value), []);

  return (
    <input
      autoFocus
      className={styles.searchField}
      onChange={handleChange}
      placeholder="Search for Pokémon"
      type="text"
      value={value}
    />
  );
}

export default SearchField;
