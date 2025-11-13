import type { Shelf, Store } from '../../generated';
import type { ShelfCreateType } from '../../src';
import { client, plainClient } from '../client.spec';

describe('Shelf', async () => {
  const plainRepo = plainClient.shelf;
  const repo = client.shelf;
  let createdStore: Store;

  const testData: ShelfCreateType[] = [
    {
      name: 'A-1-1',
      aisle: 'A',
      level: 1,
      rack: 1,
      storeId: -1,
      description: 'description',
    },
  ];

  beforeAll(async () => {
    await plainRepo.deleteMany();
    await plainClient.store.deleteMany();
    createdStore = await client.store.create({ data: { name: 'store' } });
  });

  afterAll(async () => {
    await plainRepo.deleteMany();
  });

  describe('create', () => {
    let created: Shelf;

    beforeAll(async () => {
      created = await repo.create({
        data: { ...testData[0], storeId: createdStore.id },
      });
    });

    it('should create', () => {
      expect(created).toBeDefined();
    });
  });
});
