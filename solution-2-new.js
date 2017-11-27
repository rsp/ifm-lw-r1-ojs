'use strict';

const e = a => b => c => c ? e(b(a))(b)(c - 1) : a;
const f = a => b => c => e(c)(b)(a(a => a + 1)(0) - 1);

module.exports = f;
