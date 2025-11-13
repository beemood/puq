/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  withEncription,
  withHash,
  withReadonly,
  withSlugify,
  withSoftDelete,
} from '@puq/prisma-extentions';
import type { Encoder } from '@puq/types';
import { Prisma, PrismaClient } from '../generated/index.js';
export const plainClient = new PrismaClient();

export const key = 'key';

export class TestEncoder implements Encoder {
  encode(data: any): any {
    return `encoded: ${data}`;
  }
}

export const client = plainClient
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
});
