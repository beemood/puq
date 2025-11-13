import { Prisma, PrismaClient } from '@puq/inventory-db';
import {
  withEncription,
  withHash,
  withReadonly,
  withSlugify,
  withSoftDelete,
} from '@puq/prisma-extentions';
import { Encriptor } from './encriptor.js';

/**
 * Plain prisma client instance
 */
export const inventoryClient = new PrismaClient();

/**
 * Inventory prisma client with `slugify` and `soft-delete` extentions
 */
export const inventoryExtendedClient = new PrismaClient()

  .$extends(withEncription(Prisma.dmmf.datamodel, new Encriptor()))
  .$extends(withHash(Prisma.dmmf.datamodel))
  .$extends(withReadonly(Prisma.dmmf.datamodel))
  .$extends(withSlugify(Prisma.dmmf.datamodel))
  .$extends(withSoftDelete(Prisma.dmmf.datamodel));
