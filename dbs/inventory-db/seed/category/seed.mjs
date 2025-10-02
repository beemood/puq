import * as Zod from '@puq/inventory-db/zod';
import { CategoryCreateSchema } from '@puq/inventory-db/zod';
import { slugify } from '@puq/names';
import assert from 'assert';
import { client } from '../common/client.mjs';
import { data } from './data.mjs';
/**
 *
 * @param {Zod.CategoryCreate} category
 */
async function create(category) {
  const data = CategoryCreateSchema.parse(category);
  try {
    return await client.category.create({ data });
  } catch (err) {
    return await client.category.findFirst({
      where: { name: { equals: category.name } },
    });
  }
}

export async function seedCategories() {
  for (const category of data) {
    const parent = await create({
      name: category.category,
      slug: slugify(category.category),
    });

    for (const subCategory of category.departments) {
      await create({
        name: subCategory,
        slug: slugify(subCategory),
        parentId: parent.id,
      });
    }
  }

  const count = await client.category.count();
  const expectedCount =
    data.length + data.map((c) => c.departments).flat().length;
  assert(
    count == expectedCount,
    `Must seed all categories expected ${expectedCount} but found ${count}`
  );
}
