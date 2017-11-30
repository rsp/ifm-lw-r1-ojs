'use strict';

var test = require('tape');
var solutions = require('../solutions');
var helpers = require('../helpers');
var input1 = helpers.input1;
var input2 = helpers.input2;
var input3 = helpers.input3;
var input4 = helpers.input4;
var input5 = helpers.input5;
var count = helpers.count;

function double(x) {
  return [x, x];
}

function parens(x) {
  return '(' + x + ')';
}

function concat(x) {
  return x + x;
}

test('sample input non-numerical tests', function (t) {
  t.plan(7);
  t.deepEqual(input1(parens)('xxx'), '(xxx)');
  t.deepEqual(input2(parens)('xxx'), '((xxx))');
  t.deepEqual(input3(parens)('xxx'), '((((((((((xxx))))))))))');
  t.deepEqual(input1(double)('xxx'), ['xxx', 'xxx']);
  t.deepEqual(input2(double)('xxx'), [['xxx', 'xxx'], ['xxx', 'xxx']]);
  t.deepEqual(input1(concat)('xxx'), 'xxxxxx');
  t.deepEqual(input2(concat)('xxx'), 'xxxxxxxxxxxx');
});

Object.keys(solutions).forEach(function (k) {
  test(`${k} non-numerical tests`, function (t) {
    var f = solutions[k];
    t.plan(7);
    t.deepEqual(f(input1)(parens)('xxx'), 'xxx');
    t.deepEqual(f(input2)(parens)('xxx'), '(xxx)');
    t.deepEqual(f(input3)(parens)('xxx'), '(((((((((xxx)))))))))');
    t.deepEqual(f(input1)(double)('xxx'), 'xxx');
    t.deepEqual(f(input2)(double)('xxx'), ['xxx', 'xxx']);
    t.deepEqual(f(input1)(concat)('xxx'), 'xxx');
    t.deepEqual(f(input2)(concat)('xxx'), 'xxxxxx');
  });
});
