'use strict';

const test = require('tape');
const solutions = require('../solutions');
const { input1, input2, input3, input4, input5, count } = require('../helpers');

test('sample input tests', (t) => {
  t.plan(5);
  t.equal(count(input1), 1);
  t.equal(count(input2), 2);
  t.equal(count(input3), 10);
  t.equal(count(input4), 100);
  t.equal(count(input5), 1000);
});

Object.keys(solutions).forEach((k) => {
  test(`${k} tests`, (t) => {
    const f = solutions[k];
    t.plan(5);
    t.equal(count(f(input1)), 0);
    t.equal(count(f(input2)), 1);
    t.equal(count(f(input3)), 9);
    t.equal(count(f(input4)), 99);
    t.equal(count(f(input5)), 999);
  });
});
