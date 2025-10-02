import * as Zod from '@puq/inventory-db/zod';
import { slugify } from '@puq/names';
import { assert } from 'console';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';

/**
 *
 * @param {Zod.PriceLevelCreate} priceLevel
 */
async function create(priceLevel) {
  const currency = await client.currency.findFirst({
    where: { code: { equals: 'USD' } },
  });
  const data = Zod.PriceLevelCreateSchema.parse({
    ...priceLevel,
    currencyId: currency.id,
    slug: slugify(priceLevel.name),
  });

  try {
    await client.priceLevel.create({ data });
  } catch (err) {
    return await client.priceLevel.findFirst({
      where: { name: priceLevel.name },
    });
  }
}

export async function seedPriceLevels() {
  for (const c of data) {
    await create(c);
  }

  const count = await client.priceLevel.count();

  assert(
    count == data.length,
    `Must seed all price-levels. Expected ${data.length} but found ${count}`
  );
}
