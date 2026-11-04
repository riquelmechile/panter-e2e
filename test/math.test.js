import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add } from '../src/math.js';

test('add', () => assert.equal(add(2, 3), 5));

test('add rejects non-finite operands', () => {
  for (const args of [['2', 3], [2, null], [Infinity, 1], [1, -Infinity], [NaN, 1]]) {
    assert.throws(() => add(...args), TypeError);
  }
});
