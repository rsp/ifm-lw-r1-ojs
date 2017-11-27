'use strict';

const f = x => y => (z) => {
  let r = z;
  for (let i = 1; i++ < x(a => a + 1)(0); r = y(r));
  return r;
};

module.exports = f;
