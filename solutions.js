'use strict';

for (const i of [1, 2, 3]) {
  const n = `solution-${i}`;
  module.exports[n] = require(`./${n}`);
}
