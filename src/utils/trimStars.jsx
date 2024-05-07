export const trimAsterisks = (str) => {
  while (
    str.charAt(str.length - 1) === "*" ||
    str.charAt(str.length - 1) === undefined
  ) {
    str = str.slice(0, -1) // Remove the last character
  }
  return str
}
