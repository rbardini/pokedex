import React, { FC } from 'react';

import styles from './StatBar.module.css';

type Props = {
  value: number;
};

const StatBar: FC<Props> = ({ value }) => (
  <progress className={styles.statBar} max="255" value={value}></progress>
);

export default StatBar;
