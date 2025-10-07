import { client } from '../common/client.mjs';

function serialNumber() {
  const num = () => (Math.ceil(Math.random() * 10) + 1) % 10;
  return ` `.repeat(10).split(' ').map(num).join('');
}
export async function seedSerialNumber() {
  const variants = await client.variant.findMany();
  const stores = await client.store.findMany();

  for (const s of stores) {
    for (const v of variants) {
      await client.serialNumber.create({
        data: {
          inStock: true,
          serialNumber: serialNumber(),
          storeId: s.id,
          variantId: v.id,
        },
      });
    }
  }
}
