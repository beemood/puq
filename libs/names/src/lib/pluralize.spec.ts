import { pluralize } from './pluralize.js';

describe('pluralize', () => {
  describe('basic', () => {
    it.each`
      name      | plural
      ${'name'} | ${'names'}
    `('pluralize($name) should return $plural', ({ name, plural }) => {
      expect(pluralize(name)).toEqual(plural);
    });
  });

  describe('irregular', () => {
    it.each`
      name            | plural
      ${'category'}   | ${'categories'}
      ${'sample'}     | ${'samples'}
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
    `('pluralize($name) should return $plural', ({ name, plural }) => {
      expect(pluralize(name)).toEqual(plural);
    });
  });
});
