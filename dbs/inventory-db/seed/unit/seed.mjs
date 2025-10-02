import * as Zod from '@puq/inventory-db/zod';
import assert from 'assert';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';

/**
 *
 * @param {Zod.UnitCreate} item
 */
async function create(item) {
  const parsedItem = Zod.UnitCreateSchema.parse(item);
  try {
    return await client.unit.create({ data: parsedItem });
  } catch (err) {
    return await client.unit.findFirst({
      where: { name: { equals: item.name } },
    });
  }
}

export async function seedUnits() {
  for (const item of data) {
    await create(item);
  }

  const actualCount = await client.unit.count();
  const expectedCount = data.length;
  assert(
    actualCount == expectedCount,
    `Must seed all unites! Expected count is ${expectedCount} but found ${actualCount}!`
  );
}
