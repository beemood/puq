/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  withAudit,
  withEncription,
  withHash,
  withReadonly,
  withSlugify,
  withSoftDelete,
} from '@puq/prisma-extentions';
import type { Encoder } from '@puq/types';
import { Prisma, PrismaClient } from '../generated/index.js';

export const plainClient = new PrismaClient();

export class TestEncoder implements Encoder {
  encode(data: any): any {
    return `encoded: ${data}`;
  }
}

export const client = plainClient

  .$extends(withAudit(Prisma.dmmf.datamodel))
  .$extends(withEncription(Prisma.dmmf.datamodel, new TestEncoder()))
  .$extends(withHash(Prisma.dmmf.datamodel))
  .$extends(withReadonly(Prisma.dmmf.datamodel))
  .$extends(withSlugify(Prisma.dmmf.datamodel))
  .$extends(withSoftDelete(Prisma.dmmf.datamodel));

describe('Client', () => {
  it('should be initialized', () => {
    expect(plainClient).toBeDefined();
    expect(client).toBeDefined();
  });

  beforeAll(async () => {
    await plainClient.log.deleteMany();
    await plainClient.category.deleteMany();
  });

  it('should audit', async () => {
    const created = await client.category.create({ data: { name: 'Create' } });
    const updated = await client.category.update({
      where: { id: created.id },
      data: { name: 'updated' },
    });
    const logs = await client.log.findMany();
    console.table(logs);
  });
});
