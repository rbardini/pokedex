import React, { CSSProperties, FC } from 'react';

import styles from './Tag.module.css';

type Props = {
  style?: CSSProperties;
};

const Tag: FC<Props> = props => <span className={styles.tag} {...props} />;

export default Tag;
