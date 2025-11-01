import { NotFoundError } from '@puq/errors';
import { Prisma, PrismaClient } from '../../../../generated/index.js';
import { fieldModel } from './field-model.js';

new PrismaClient().product.findMany({
  where: { OR: [], AND: {}, NOT: {} },
});

describe('FieldModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();

  it('should print', () => {
    const expected = `z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'updatedBy', 'readonly', 'parentId', 'name', 'slug', 'description' ])`;
    expect(fieldModel(model)).toEqual(expected);
  });
});
