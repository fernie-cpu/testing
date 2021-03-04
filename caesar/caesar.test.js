const caesar = require('./caesar');

it('caesar cipher passed', () => {
  expect(caesar('the caesar cipher is cool', 8)).toBe(
    'bpm kimaiz kqxpmz qa kwwt'
  );
});
