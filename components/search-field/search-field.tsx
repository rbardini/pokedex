import { useCallback } from 'react'
import styles from './search-field.module.css'

type Props = {
  onChange: (value: string) => void
  value: string
}

const SearchField = ({ onChange, value }: Props) => {
  const handleChange = useCallback(e => onChange(e.target.value), [])

  return (
    <input
      autoFocus
      className={styles.searchField}
      onChange={handleChange}
      placeholder="Search for Pokémon"
      type="text"
      value={value}
    />
  )
}

export default SearchField
