import styles from './spinner.module.css'

type Props = {
  width: number
  height: number
}

const Spinner = ({ width = 72, height = 72 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={styles.spinner}
    width={width}
    height={height}
  >
    <path stroke="#000" d="M30 50a1 1 1 0 1 40 0H57.5a1 1 1 0 0-15 0z" />
    <circle cx="50" cy="50" r="5" stroke="#000" />
    <path
      fill="#fff"
      stroke="#000"
      d="M30 50a1 1 1 0 0 40 0H57.5a1 1 1 0 1-15 0z"
    />
  </svg>
)

export default Spinner
