type Entry = {
  language: {
    name: string
  }
}

const getEnglishEntry: <T extends Entry>(entries: T[]) => T = entries =>
  entries.find(({ language }) => language.name === 'en')!

export default getEnglishEntry
