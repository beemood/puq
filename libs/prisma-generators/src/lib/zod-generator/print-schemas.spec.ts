import { Prisma } from '../../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('printSchemas', () => {
  // new PrismaClient().product.create({
  //   data: {
  //     name: '',
  //     sku: '',
  //     upc: '',
  //     category: { connect: { id: 1 }, create: { name: '' } },
  //     productTags: {
  //       createMany: { data: { tagId: 1 } },
  //     },
  //   },
  // });
  it('should print schemas', () => {
    expect(1).toEqual(1);
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    require('prettier').format(schemas);
  });
});
