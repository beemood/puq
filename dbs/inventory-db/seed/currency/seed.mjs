import * as Zod from '@puq/inventory-db/zod';
import { assert } from 'console';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';

/**
 *
 * @param {Zod.CurrencyCreate} currency
 */
async function create(currency) {
  const data = Zod.CurrencyCreateSchema.parse(currency);
  try {
    await client.currency.create({ data });
  } catch (err) {
    return await client.currency.findFirst({ where: { name: currency.name } });
  }
}

export async function seedCurrencies() {
  for (const c of data) {
    await create(c);
  }

  const count = await client.currency.count();

  assert(
    count == data.length,
    `Must seed all currencies. Expected ${data.length} but found ${count}`
  );
}
