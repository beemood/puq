import * as Zod from '@puq/inventory-db/zod';
import { assert } from 'console';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';

/**
 *
 * @param {Zod.ProductCreate} product
 */
async function create(product) {
  const data = Zod.CurrencyCreateSchema.parse(product);
  try {
    await client.product.create({ data });
  } catch (err) {
    return await client.product.findFirst({ where: { name: product.name } });
  }
}

export async function seedProducts() {
  for (const c of data) {
    await create(c);
  }

  const count = await client.product.count();

  assert(
    count == data.length,
    `Must seed all products. Expected ${data.length} but found ${count}`
  );
}
