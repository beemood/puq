import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma, PrismaClient } from '../../generated/prisma/index.js';
import { printSchemas } from './print-schemas.js';
import type { ProductQuery } from './samples.js';
describe('print', () => {
  it('should print', () => {
    const client = new PrismaClient();

    client.product.findMany({});
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    const pretified = require('prettier').format(schemas);

    const queryMany: ProductQuery = {
      include: {
        productTags: { select: { tag: { select: { name: true } } } },
      },
    };
    client.product.findMany(queryMany);

    writeFileSync(join(__dirname, 'samples.ts'), pretified);
  });
});
