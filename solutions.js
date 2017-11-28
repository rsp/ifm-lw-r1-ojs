'use strict';

for (var i = 1; i <= 3; i++) {
  var n = 'solution-' + i;
  module.exports[n] = require('./' + n);
}
