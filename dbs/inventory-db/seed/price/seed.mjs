import { client } from '../common/client.mjs';

function randomPrice() {
  const cost = Math.random() * 100;
  const price = +(cost + (cost * 20) / 100).toFixed(0) + 0.99;

  return {
    cost: cost.toFixed(2),
    price: price.toFixed(2),
  };
}

export async function seedPrices() {
  const variants = await client.variant.findMany();
  const priceLevels = await client.priceLevel.findMany();

  for (const pl of priceLevels) {
    for (const v of variants) {
      await client.price.create({
        data: { ...randomPrice(), priceLevelId: pl.id, variantId: v.id },
      });
    }
  }
}
