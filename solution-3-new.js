'use strict';

const f = a => b => c => a(d => e => e(d(b)))(f => c)(g => g);

module.exports = f;
