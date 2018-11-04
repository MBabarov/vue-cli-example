const compareString = function(firstString, secondString) {
  return firstString.toUpperCase().indexOf(secondString.toUpperCase()) > -1
}

export default {
  compareString: compareString
}
