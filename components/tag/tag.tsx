import { CSSProperties, ReactNode } from 'react'
import styles from './tag.module.css'

type Props = {
  children: ReactNode
  style?: CSSProperties
}

const Tag = (props: Props) => <span className={styles.tag} {...props} />

export default Tag
