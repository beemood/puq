import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma } from '../../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('printSchemas', () => {
  it('should print schemas', () => {
    writeFileSync(
      join(__dirname, 'schemas.ts'),
      printSchemas(Prisma.dmmf.datamodel)
    );
  });
});
