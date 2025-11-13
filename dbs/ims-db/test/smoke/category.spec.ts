import { slugify } from '@puq/names';
import type { Category } from '../../generated';
import type { CategoryCreateType } from '../../src';
import { client, plainClient } from '../client.spec';

describe('Category', () => {
  const plainRepo = plainClient.category;
  const repo = client.category;

  const testData: CategoryCreateType[] = [
    { name: 'Electronics' },
    { name: 'PC' },
  ];

  beforeAll(async () => {
    await plainRepo.deleteMany();
  });

  describe('create', () => {
    let parent: Category;
    let child: Category;

    beforeAll(async () => {
      parent = await repo.create({ data: testData[0] });
      child = await repo.create({
        data: { ...testData[1], parentId: parent.id },
      });
    });

    it('should create', () => {
      expect(parent).toBeDefined();
      expect(child).toBeDefined();
    });

    it('should establish parent/child relation', () => {
      expect(child.parentId).toEqual(parent.id);
    });

    it('should generate slug', () => {
      expect(parent.slug).toBeDefined();
      expect(parent.slug).toEqual(slugify(parent.name));
    });
  });
});
