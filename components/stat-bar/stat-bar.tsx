import styles from './stat-bar.module.css'

type Props = {
  value: number
}

const StatBar = ({ value }: Props) => (
  <progress className={styles.statBar} max="255" value={value}></progress>
)

export default StatBar
