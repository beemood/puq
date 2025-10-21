import { Prisma } from '../../generated/index.js';
import { printOwnCreateSchema } from './print-own-create-schema.js';
describe('printOwnCreateSchema', () => {
  it('should print the own create schema', () => {
    const result = printOwnCreateSchema(
      Prisma.dmmf.datamodel.models.find((e) => e.name === 'Category')!
    );

    console.log(result);
  });
});
