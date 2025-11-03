import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma, PrismaClient } from '../../../generated/index.js';
import { printSchemas } from './print-schemas.js';

new PrismaClient().product.findMany({
  where: {
    type: {
      equals: 'CONVENIENCE',
      in: ['CONVENIENCE'],
      not: 'CONVENIENCE',
      notIn: ['CONVENIENCE'],
    },

    types: {
      equals: ['CONVENIENCE'],
      has: 'CONVENIENCE',
      hasEvery: ['CONVENIENCE'],
      hasSome: ['CONVENIENCE'],
      isEmpty: true,
    },
  },
});
describe('printSchemas', () => {
  it('should print schemas', () => {
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    writeFileSync(
      join(__dirname, 'sample-schemas.ts'),
      require('prettier').format(schemas)
    );
  });
});
