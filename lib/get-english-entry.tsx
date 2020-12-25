type Entry = {
  language: {
    name: string
  }
}

const getEnglishEntry: <T extends Entry>(entries: T[]) => T = entries =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  entries.find(({ language }) => language.name === 'en')!

export default getEnglishEntry
