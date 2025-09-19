import { InvalidNameError, normalizeName } from './normalize-name.js';

describe('normalizeName', () => {
  describe('valid cases', () => {
    it.each`
      name              | result
      ${'some name'}    | ${'some name'}
      ${'some Name'}    | ${'some name'}
      ${'Some Name'}    | ${'some name'}
      ${'Some    Name'} | ${'some name'}
      ${'SomeName'}     | ${'some name'}
      ${'some_Name'}    | ${'some name'}
      ${'some-Name'}    | ${'some name'}
      ${'Some-Name'}    | ${'some name'}
    `('normalizeName($name) should return $result', ({ name, result }) => {
      expect(normalizeName(name)).toEqual(result);
    });
  });

  describe('invalid cases', () => {
    it.each`
      name       | error
      ${''}      | ${InvalidNameError}
      ${'  '}    | ${InvalidNameError}
      ${'    '}  | ${InvalidNameError}
      ${'    s'} | ${InvalidNameError}
      ${'s'}     | ${InvalidNameError}
    `('normalizeName($name) should throw $error', ({ name, error }) => {
      expect(() => normalizeName(name)).toThrowError(error);
    });
  });
});
