'use strict';

function input1(x) {
  return function (y) {
    return x(y);
  };
}

function input2(x) {
  return function (y) {
    return x(x(y));
  };
}

function input3(x) {
  return function (y) {
    return x(x(x(x(x(x(x(x(x(x(y))))))))));
  };
}

function input4(x) {
  return input3(input3(x));
}

function input5(x) {
  return input3(input4(x));
}

function inc(x) {
  return x + 1;
}

function count(f) {
  return f(inc)(0);
}

module.exports = {
  input1: input1,
  input2: input2,
  input3: input3,
  input4: input4,
  input5: input5,
  count: count
};
