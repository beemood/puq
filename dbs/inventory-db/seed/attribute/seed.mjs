import * as Zod from '@puq/inventory-db/zod';
import { slugify } from '@puq/names';
import assert from 'assert';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';

/**
 *
 * @param {Zod.AttributeCategoryCreate} item
 */
async function createCategory(item) {
  const parsedItem = Zod.AttributeCategoryCreateSchema.parse(item);
  try {
    return await client.attributeCategory.create({ data: parsedItem });
  } catch (err) {
    return await client.attributeCategory.findFirst({
      where: { name: { equals: item.name } },
    });
  }
}
/**
 *
 * @param {Zod.AttributeCreate} item
 */
async function createAttribute(item) {
  const parsedItem = Zod.AttributeCreateSchema.parse(item);
  try {
    return await client.attribute.create({ data: parsedItem });
  } catch (err) {
    return await client.attribute.findFirst({
      where: { name: { equals: item.name } },
    });
  }
}

export async function seedAttributes() {
  for (const item of data) {
    const savedCategory = await createCategory({
      name: item.category,
      slug: slugify(item.category),
    });

    for (const a of item.attributes) {
      await createAttribute({
        name: a.name,
        description: a.description,

        categoryId: savedCategory.id,
      });
    }
  }

  {
    const actualCount = await client.attribute.count();
    const expectedCount = data
      .map((e) => e.attributes.length)
      .reduce((p, c) => p + c, 0);

    assert(
      actualCount >= expectedCount,
      `Must seed all attributes! Expected count is ${expectedCount} but found ${actualCount}!`
    );
  }
  {
    const actualCount = await client.attributeCategory.count();
    const expectedCount = data.length;
    assert(
      actualCount == expectedCount,
      `Must seed all attributes' category! Expected count is ${expectedCount} but found ${actualCount}!`
    );
  }
}
