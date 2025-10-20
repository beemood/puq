import { describe, expect, it } from 'vitest';
import { CategoryOrderBySchema } from './schema';
describe('inventory-db', () => {
  it('should work', () => {
    expect(() => CategoryOrderBySchema.parse({})).toThrowError();
    expect(() =>
      CategoryOrderBySchema.parse([{ id: 'asc', name: 'desc' }])
    ).toThrowError();
    expect(CategoryOrderBySchema.parse([])).toBeDefined();
    expect(
      CategoryOrderBySchema.parse([{ id: 'asc' }, { name: 'desc' }])
    ).toBeDefined();

    expect(() =>
      CategoryOrderBySchema.parse([{ id: 'some' }, { name: 'desc' }])
    ).toThrowError();
  });
});
