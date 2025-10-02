import * as Zod from '@puq/inventory-db/zod';
import { slugify } from '@puq/names';
import assert from 'assert';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';
/**
 *
 * @param {Zod.StoreCreate} item
 */
async function create(item) {
  const parsedItem = Zod.StoreCreateSchema.parse({
    ...item,
    slug: slugify(item.name),
  });
  try {
    return await client.store.create({ data: parsedItem });
  } catch (err) {
    return await client.store.findFirst({
      where: { name: { equals: item.name } },
    });
  }
}

export async function seedStores() {
  const priceLevel = await client.priceLevel.findFirst({});

  for (const item of data) {
    await create({ ...item, priceLevelId: priceLevel.id });
  }

  const actualCount = await client.store.count();
  const expectedCount = data.length;
  assert(
    actualCount == expectedCount,
    `Must seed all stores! Expected count is ${expectedCount} but found ${actualCount}!`
  );
}
