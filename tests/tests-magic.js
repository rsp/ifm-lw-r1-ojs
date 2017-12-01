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
  return [x, x].join('');
}

function xplusx(x) {
  return x + x;
}

function object(x) {
  return { value: x };
}

function arrays(x) {
  return [[[x], []], []];
}

var gs = [double, parens, concat, xplusx, object, arrays];
var as = [input1, input2, input3, input2(input2(input2))];
var xs = ['xxx', 5, [null], { object: null }, { a: [1] }];

let magic = 0;

for (var fn in solutions) {
  var f = solutions[fn];
  for (var an in as) {
    var a = as[an];
    for (var gn in gs) {
      var g = gs[gn];
      for (var xn in xs) {
        var x = xs[xn];
        test('magic test ' + ++magic, function (t) {
          t.plan(1);
          t.deepEqual(g(f(a)(g)(x)), a(g)(x));
        });
      }
    }
  }
}
