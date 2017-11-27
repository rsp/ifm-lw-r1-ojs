'use strict';

for (const i of [1, 2, 3]) {
  for (const l of ['old', 'new']) {
    const n = `solution-${i}-${l}`;
    module.exports[n] = require(`./${n}`);
  }
}
