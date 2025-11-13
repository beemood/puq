import type { Tag } from '../../generated';
import type { TagCreateType } from '../../src';
import { client, plainClient } from '../client.spec';

describe('Tag', () => {
  const plainRepo = plainClient.tag;
  const repo = client.tag;

  const testData: TagCreateType[] = [{ name: 'tag 1' }];

  beforeAll(async () => {
    await plainRepo.deleteMany();
  });

  describe('create', () => {
    let created: Tag;

    beforeAll(async () => {
      created = await repo.create({ data: testData[0] });
    });

    it('should create', () => {
      expect(created).toBeDefined();
    });
  });
});
