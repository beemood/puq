import { slugify } from '@puq/names';
import { ZodError } from 'zod';
import { CategoryCreateSchema, type CategoryCreate } from '../schema';

describe('CategoryCreateSchema', () => {
  describe('Valid', () => {
    const data: CategoryCreate[] = [
      { name: 'Some Value' },
      { name: 'Some Value', slug: 'some-slug' },
      { name: 'Some Value', slug: 'some-slug', parentId: 1 },
    ];
    it.each(data)('should create $0', (value) => {
      const parsed = CategoryCreateSchema.parse(value);
      expect(parsed).toBeDefined();
      expect(parsed.name).toEqual(value.name);
      expect(parsed.slug).toEqual(value.slug ?? slugify(value.name));
    });
  });

  describe('Invalid', () => {
    const data: CategoryCreate[] = [
      {},
      { slug: 'some' },
      { name: '1234567890123456789012345678901' },
      { name: 's' },
      { parentId: 1 },
      { name: 's', slug: 's' },
      { slug: 10000 },
      { name: 'Some', parentId: -1 },
      { name: 'Some', parentId: 1.1 },
      { name: 'Some', parentId: 0 },
    ] as CategoryCreate[];
    it.each(data)('should NOT create $0', (value) => {
      expect(() => CategoryCreateSchema.parse(value)).toThrowError(ZodError);
    });
  });
});
