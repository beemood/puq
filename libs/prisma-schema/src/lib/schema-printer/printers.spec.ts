import { Prisma } from '../../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('Printers', () => {
  it('should work', () => {
    const datamodel = Prisma.dmmf.datamodel;
    const content = printSchemas(datamodel);

    expect(content).toBeDefined();
  });
});
