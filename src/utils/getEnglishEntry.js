const getEnglishEntry = entries => entries.find(({ language }) => language.name === 'en');

export default getEnglishEntry;
