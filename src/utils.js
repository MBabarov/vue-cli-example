export const compareString = function(firstString, secondString) {
  return (
    firstString.match(new RegExp(secondString, 'gi')) &&
    firstString.match(new RegExp(secondString, 'gi')).length
  )
}
