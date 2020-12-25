const formatName = (name: string) =>
  name
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.substring(1))
    .map(str => (str === 'M' ? '♂' : str))
    .map(str => (str === 'F' ? '♀' : str))
    .join(' ')

export default formatName
