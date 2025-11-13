import { Prisma, PrismaClient } from '@puq/inventory-db';
import { withSlugify, withSoftDelete } from '@puq/prisma-extentions';

/**
 * Default inventory prisma client
 */
export const inventoryClient = new PrismaClient();

/**
 * Inventory prisma client with `slugify` and `soft-delete` extentions
 */
export const inventoryExtendedClient = new PrismaClient()
  .$extends(withSlugify(Prisma.dmmf.datamodel))
  .$extends(withSoftDelete(Prisma.dmmf.datamodel));
