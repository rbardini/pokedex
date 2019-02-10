import React from 'react';

import styles from './Tag.module.css';

const Tag = props => (
  <span className={styles.tag} {...props} />
);

export default Tag;
