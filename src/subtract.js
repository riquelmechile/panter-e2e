export function subtract(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('subtract requires finite numbers');
  }
  return a - b;
}
