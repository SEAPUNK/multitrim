'use strict'

module.exports = function (str, loose) {
  return (
    (loose) ? str : str.trim()
  ).split('\n').map(
    (line) => line.trim()
  ).join('\n')
}
