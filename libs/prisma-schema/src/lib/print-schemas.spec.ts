import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma } from '../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('printSchemas', () => {
  beforeAll(() => {
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    writeFileSync(join(__dirname, 'sample-schemas.ts'), schemas);
  });

  it('should work', () => {
    expect(1).toEqual(1);
  });
});
