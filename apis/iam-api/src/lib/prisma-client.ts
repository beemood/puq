import { Prisma, PrismaClient } from '@puq/iam-db';
import {
  withHash,
  withReadonly,
  withSlugify,
  withSoftDelete,
} from '@puq/prisma-extentions';

/**
 * Plain prisma client instance
 */
export const client = new PrismaClient();

/**
 * Prisma client with extentions
 * - withHash
 * - withReadonly
 * - withSlugify
 * - withSoftDelete
 */
export const extendedClient = new PrismaClient()

  .$extends(withHash(Prisma.dmmf.datamodel))
  .$extends(withReadonly(Prisma.dmmf.datamodel))
  .$extends(withSlugify(Prisma.dmmf.datamodel))
  .$extends(withSoftDelete(Prisma.dmmf.datamodel));
