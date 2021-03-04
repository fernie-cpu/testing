const calculator = require('./calculator');

it('add', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

it('sub', () => {
  expect(calculator.sub(2, 1)).toBe(1);
});

it('divide', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

it('multiply', () => {
  expect(calculator.multiply(2, 8)).toBe(16);
});
