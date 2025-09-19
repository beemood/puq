import type { NameCases} from './names.js';
import { names } from './names.js';
import { InvalidNameError } from './normalize-name.js';

describe('names', () => {
  describe('valid cases', () => {
    it.each`
      name | result
      ${'some_   _Name'} | ${{
  camel: 'someName',
  kebab: 'some-name',
  pascal: 'SomeName',
  screamingSnake: 'SOME_NAME',
  sentence: 'Some name',
  snake: 'some_name',
  title: 'Some Name',
} as NameCases}
    `('names(name) should return result', ({ name, result }) => {
      expect(JSON.stringify(names(name))).toEqual(JSON.stringify(result));
    });
  });

  describe('invalid cases', () => {
    it.each`
      name      | error
      ${''}     | ${InvalidNameError}
      ${'.'}    | ${InvalidNameError}
      ${'?'}    | ${InvalidNameError}
      ${'  '}   | ${InvalidNameError}
      ${'s'}    | ${InvalidNameError}
      ${'s   '} | ${InvalidNameError}
    `('names(name) should throw error', ({ name, error }) => {
      expect(() => names(name)).toThrowError(error);
    });
  });
});
