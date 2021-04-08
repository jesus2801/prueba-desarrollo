import { isEmail, isEmpty } from './validate';

test('validate Functions', () => {
  expect(isEmail('jose@gmail')).toBe(false);
  expect(isEmail('jose@gmail.com')).toBe(true);
  expect(isEmail('josegmail.com')).toBe(false);
  expect(isEmail('joseAgmail.com')).toBe(false);
  expect(isEmail('jose@gmail.')).toBe(false);
  expect(isEmail('jose@hotmail.com')).toBe(true);

  expect(isEmpty('')).toBe(true);
  expect(isEmpty('       ')).toBe(true);
  expect(isEmpty('     a    ')).toBe(false);
  expect(isEmpty('not empty')).toBe(false);
});
