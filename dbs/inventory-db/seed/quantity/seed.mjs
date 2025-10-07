import { client } from '../common/client.mjs';

function randomQuantity() {
  return Math.ceil(Math.random() * 100);
}

export async function seedQuantities() {
  const variants = await client.variant.findMany();
  const stores = await client.store.findMany();

  for (const s of stores) {
    for (const v of variants) {
      await client.quantity.create({
        data: {
          quantity: randomQuantity(),
          alertThreshold: 1,
          storeId: s.id,
          variantId: v.id,
        },
      });
    }
  }
}
