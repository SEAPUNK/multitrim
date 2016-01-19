'use strict'

module.exports = function (str) {
  var ar = str.split('\n')
  for (var i = 0; i < ar.length; i++) {
    ar[i] = ar[i].trim()
  }
  return ar.join('\n')
}

