import assert from 'node:assert/strict';
import { test } from 'node:test';
import { subtract } from '../src/subtract.js';

test('subtract', () => assert.equal(subtract(5, 3), 2));

test('subtract rejects non-finite operands', () => {
  for (const args of [['5', 3], [5, null], [Infinity, 1], [1, -Infinity], [NaN, 1]]) {
    assert.throws(() => subtract(...args), TypeError);
  }
});
