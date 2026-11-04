import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add, multiply } from '../src/math.js';

test('add', () => assert.equal(add(2, 3), 5));
test('multiply', () => assert.equal(multiply(2, 3), 6));
test('multiply with a negative number', () => assert.equal(multiply(-2, 3), -6));
test('multiply with decimals', () => assert.equal(multiply(0.5, 0.25), 0.125));
