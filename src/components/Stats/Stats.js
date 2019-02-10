import React, { Fragment } from 'react';

import { capitalize } from '../../styles/functional.module.css';
import StatBar from '../StatBar';
import styles from './Stats.module.css';

const Stats = ({ pokemon }) => (
  <div className={styles.stats}>
    {pokemon.stats.map(({ base_stat, stat }) => (
      <Fragment key={stat.name}>
        <span className={capitalize}>{stat.name}</span>
        <StatBar value={base_stat} />
        <span>{base_stat}</span>
      </Fragment>
    ))}
  </div>
);

export default Stats;
