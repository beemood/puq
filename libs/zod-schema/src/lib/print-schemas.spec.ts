import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma, PrismaClient } from '../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('print', () => {
  it('should print', () => {
    const client = new PrismaClient();

    client.product.findMany({});
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    const pretified = require('prettier').format(schemas);

    client.product.findMany({});

    writeFileSync(join(__dirname, 'samples.ts'), pretified);
  });
});
