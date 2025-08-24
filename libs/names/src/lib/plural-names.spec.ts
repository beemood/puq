import { pluralNames } from './plural-names.js';

describe('pluralNames', () => {
  describe('basic', () => {
    it.each`
      name      | plural
      ${'name'} | ${'names'}
    `('pluralNames($name) should return $plural', ({ name, plural }) => {
      expect(pluralNames(name).kebabCase).toEqual(plural);
    });
  });

  describe('irregular', () => {
    it.each`
      name            | plural
      ${'man'}        | ${'men'}
      ${'woman'}      | ${'women'}
      ${'child'}      | ${'children'}
      ${'tooth'}      | ${'teeth'}
      ${'foot'}       | ${'feet'}
      ${'mouse'}      | ${'mice'}
      ${'goose'}      | ${'geese'}
      ${'person'}     | ${'people'}
      ${'ox'}         | ${'oxen'}
      ${'sheep'}      | ${'sheep'}
      ${'deer'}       | ${'deer'}
      ${'fish'}       | ${'fish'}
      ${'series'}     | ${'series'}
      ${'species'}    | ${'species'}
      ${'datum'}      | ${'data'}
      ${'medium'}     | ${'media'}
      ${'criterion'}  | ${'criteria'}
      ${'phenomenon'} | ${'phenomena'}
      ${'hero'}       | ${'heroes'}
      ${'potato'}     | ${'potatoes'}
      ${'tomato'}     | ${'tomatoes'}
      ${'echo'}       | ${'echoes'}
      ${'leafe'}      | ${'leaves'}
    `('pluralNames($name) should return $plural', ({ name, plural }) => {
      expect(pluralNames(name).kebabCase).toEqual(plural);
    });
  });
});
