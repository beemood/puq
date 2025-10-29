import { Prisma } from '../../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('Printers', () => {
  it('should work', () => {
    const datamodel = Prisma.dmmf.datamodel;

    const content = printSchemas(datamodel);

    // writeFileSync(join(__dirname, 'samples.ts'), content);

    expect(content).toBeDefined();
  });
});
