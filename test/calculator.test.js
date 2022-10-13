const Calculator = require('../src/calculator');

test('flex the calculator', () => {
  let calc = new Calculator();

  calc.add(2);
  expect(calc.equal()).toBe(2);
  calc.minus(1);
  expect(calc.equal()).toBe(1);
  calc.multiple(2);
  expect(calc.equal()).toBe(2);
  calc.divide(1);
  expect(calc.equal()).toBe(2);
  calc.multiple(100);
  expect(calc.equal()).toBe(200);
  calc.divide(100);
  expect(calc.equal()).toBe(2);
  calc.reset();
  expect(calc.equal()).toBe(0);
});
