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

test('sample input tests', function (t) {
  t.plan(5);
  t.equal(count(input1), 1);
  t.equal(count(input2), 2);
  t.equal(count(input3), 10);
  t.equal(count(input4), 100);
  t.equal(count(input5), 1000);
});

Object.keys(solutions).forEach(function (k) {
  test(`${k} tests`, function (t) {
    var f = solutions[k];
    t.plan(5);
    t.equal(count(f(input1)), 0);
    t.equal(count(f(input2)), 1);
    t.equal(count(f(input3)), 9);
    t.equal(count(f(input4)), 99);
    t.equal(count(f(input5)), 999);
  });
});
