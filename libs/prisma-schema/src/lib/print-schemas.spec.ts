import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma } from '../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('printSchemas', () => {
  it('should print schemas', () => {
    const printableSchemas = printSchemas(Prisma.dmmf.datamodel);
    const formatedSchemas = require('prettier').format(printableSchemas);
    writeFileSync(
      join(__dirname, 'sample-schema.ts'),
      [formatedSchemas].join('\n\n')
    );
  });
});
