import type { PrismaClient } from '../../../generated/index.js';
import { Category } from './data/category.js';
import { Industry } from './data/industry.js';

export async function seeds(client: PrismaClient) {
  for (const item of Category) {
    try {
      await client.category.create(item);
    } catch (err) {
      console.log(err);
    }
  }
  for (const item of Industry) {
    try {
      await client.industry.create(item);
    } catch (err) {
      console.log(err);
    }
  }
}
