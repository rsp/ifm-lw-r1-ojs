'use strict';

function f(x) {
  return function (y) {
    return function (z) {
      var r = z;
      for (var i = 1; i++ < x(function (a) { return a + 1; })(0); r = y(r));
      return r;
    };
  };
}

module.exports = f;
