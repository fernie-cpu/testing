const arrayObj = require('./arrayAnalysis');

it ('arrayAnalisis average test 1', () => {
  expect(arrayObj([1, 8, 3, 4, 2, 6])['average']).toBe(4);
});

it ('arrayAnalisis min test 1', () => {
  expect(arrayObj([1, 8, 3, 4, 2, 6])['min']).toBe(1);
});

it ('arrayAnalisis max test 1', () => {
  expect(arrayObj([1, 8, 3, 4, 2, 6])['max']).toBe(8);
});

it ('arrayAnalisis length test 1', () => {
  expect(arrayObj([1, 8, 3, 4, 2, 6])['length']).toBe(6);
});
