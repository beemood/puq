import type { PrismaClient } from '../../../generated';
import { Category } from './data/category';

export async function seeds(client: PrismaClient) {
  for (const item of Category) {
    try {
      await client.category.create(item);
    } catch (err) {
      console.error(err);
    }
  }
}
