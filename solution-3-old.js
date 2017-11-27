'use strict';

function f(a) {
  return function (b) {
    return function (c) {
      return a(function (d) {
        return function (e) {
          return e(d(b));
        };
      })(function (f) {
        return c;
      })(function (g) {
        return g;
      });
    };
  };
}

module.exports = f;
