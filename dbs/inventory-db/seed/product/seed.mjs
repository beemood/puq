import { ean } from '@puq/barcode';
import * as Zod from '@puq/inventory-db/zod';
import { slugify } from '@puq/names';
import { assert } from 'console';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';
/**
 *
 * @param {Zod.ProductCreate} product
 */
async function create(product) {
  const data = Zod.ProductCreateSchema.parse(product);
  try {
    return await client.product.create({ data });
  } catch (err) {
    return await client.product.findFirst({ where: { name: product.name } });
  }
}

export async function seedProducts() {
  const category = await client.category.findFirst({
    where: { name: { equals: 'Common' } },
  });

  for (const c of data) {
    const saved = await create({
      name: c.name,
      description: c.description,
      slug: slugify(c.name),
    });
    try {
      await client.productCategory.create({
        data: { productId: saved.id, categoryId: category.id },
      });
    } catch {
      //
    }

    try {
      const upc = ean('12345');
      const savedVariant = await client.variant.create({
        data: { sku: 'MAIN', upc },
      });

      if (c.attributes) {
        for (const e of c.attributes) {
          let found = await client.attribute.findFirst({
            where: { name: { equals: e.name } },
          });

          if (found == undefined) {
            found = await client.attribute.create({ data: { name: e.name } });
          }

          await client.attributeValue.create({
            data: { attributeId: found.id, variantId: savedVariant.id },
          });
        }
      }
    } catch {
      //
    }
  }

  const count = await client.product.count();

  assert(
    count == data.length,
    `Must seed all products. Expected ${data.length} but found ${count}`
  );
}
