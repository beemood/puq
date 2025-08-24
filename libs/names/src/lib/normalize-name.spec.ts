import { normalizeName } from './normalize-name.js';

describe('normalizeName', () => {
  describe('valid', () => {
    it.each`
      name                | expected
      ${'a'}              | ${'a'}
      ${'some'}           | ${'some'}
      ${'Some'}           | ${'some'}
      ${'  Some'}         | ${'some'}
      ${'  Some  '}       | ${'some'}
      ${'  SOME  '}       | ${'some'}
      ${'  some name  '}  | ${'some-name'}
      ${'  some.name  '}  | ${'some-name'}
      ${'  some_ name  '} | ${'some-name'}
      ${'  some. name  '} | ${'some-name'}
      ${'  some- name  '} | ${'some-name'}
    `('normalizeName($name) should return $expected', ({ name, expected }) => {
      expect(normalizeName(name)).toEqual(expected);
    });
  });
});
