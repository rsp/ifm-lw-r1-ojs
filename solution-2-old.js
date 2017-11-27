'use strict';

function e(a) {
  return function (b) {
    return function (c) {
      return c ? e(b(a))(b)(c - 1) : a;
    };
  };
}

function f(a) {
  return function (b) {
    return function (c) {
      return e(c)(b)(a(a => a + 1)(0) - 1);
    };
  };
}

module.exports = f;
