import assert from 'node:assert/strict';
import { test } from 'node:test';
import { subtract } from '../src/subtract.js';

test('subtract', () => assert.equal(subtract(5, 3), 2));

test('subtract rejects non-finite operands', () => {
  for (const args of [['5', 3], [5, null], [Infinity, 1], [1, -Infinity], [NaN, 1]]) {
    assert.throws(() => subtract(...args), TypeError);
  }
});

test('subtract preserves operand order and finite-number results', () => {
  assert.equal(subtract(2, 5), -3);
  assert.equal(subtract(0.5, 0.25), 0.25);
  assert.equal(subtract(-1, -1), 0);
  assert.equal(Object.is(subtract(0, 0), 0), true);
});

test('subtract rejects every invalid operand in both positions', () => {
  const invalidOperands = [NaN, Infinity, -Infinity, '2', null, undefined, true, {}, [], 2n];

  for (const value of invalidOperands) {
    assert.throws(() => subtract(value, 1), TypeError);
    assert.throws(() => subtract(1, value), TypeError);
  }
});

test('subtract rejects missing arguments', () => {
  assert.throws(() => subtract(), TypeError);
  assert.throws(() => subtract(1), TypeError);
});
