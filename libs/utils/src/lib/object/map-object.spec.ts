import { mapObject } from './map-object.js';

describe('mapObject', () => {
  it('should map object', async () => {
    expect(
      mapObject(
        { first: 'first', second: 'second' },
        (key, value) => value + '__'
      )
    ).toEqual({
      first: 'first__',
      second: 'second__',
    });
  });
});
