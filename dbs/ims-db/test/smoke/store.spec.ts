import type { Store } from '../../generated';
import type { StoreCreateType } from '../../src';
import { client, plainClient } from '../client.spec';

describe('Store', () => {
  const plainRepo = plainClient.store;
  const repo = client.store;

  const testData: StoreCreateType[] = [{ name: 'store 1' }];

  beforeAll(async () => {
    await plainRepo.deleteMany();
  });

  describe('create', () => {
    let created: Store;

    beforeAll(async () => {
      created = await repo.create({ data: testData[0] });
    });

    it('should create', () => {
      expect(created).toBeDefined();
    });
  });
});
