import type { PrismaClient } from '@puq/inventory-db';
import { categories } from './data/category.js';

export async function seeds(client: PrismaClient) {
  for (const item of categories) {
    try {
      await client.category.create(item);
    } catch (err) {
      console.error(err);
    }
  }
}
