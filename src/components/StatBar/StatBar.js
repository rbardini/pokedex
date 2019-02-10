import React from 'react';

import styles from './StatBar.module.css';

const StatBar = ({ value }) => (
  <progress className={styles.statBar} max="255" value={value}></progress>
);

export default StatBar;
