const assert = require('node:assert/strict');

const tips = require('../library/bundle.js');
const { toObject } = require('../library/convert.js');

assert.equal(typeof tips.each, 'function');
assert.equal(typeof tips.randomString, 'function');
assert.equal(typeof tips.Floatify, 'function');
assert.equal(Object.getOwnPropertyNames(Array).includes('minValue'), false);

const payload = JSON.parse('{"__proto__":{"polluted":true}}');
const merged = toObject([payload, { safe: true }]);
assert.equal({}.polluted, undefined);
assert.equal(merged.safe, true);

console.log('security smoke checks passed');
