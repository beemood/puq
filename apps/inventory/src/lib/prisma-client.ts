import { Prisma, PrismaClient } from '@puq/inventory-db';
import {
  withReadonly,
  withSlugify,
  withSoftDelete,
} from '@puq/prisma-extentions';

/**
 * Plain prisma client instance
 */
export const inventoryClient = new PrismaClient();

/**
 * Inventory prisma client with `slugify` and `soft-delete` extentions
 */
export const inventoryExtendedClient = new PrismaClient()
  .$extends(withReadonly(Prisma.dmmf.datamodel))
  .$extends(withSlugify(Prisma.dmmf.datamodel))
  .$extends(withSoftDelete(Prisma.dmmf.datamodel));
