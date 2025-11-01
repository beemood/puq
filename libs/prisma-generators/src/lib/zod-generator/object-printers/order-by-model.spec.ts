import { NotFoundError } from '@puq/errors';
import { Prisma } from '../../../../generated/index.js';
import { orderByModel } from './order-by-model.js';

describe('OrderByModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();
  it('should print', () => {
    const actualModel = orderByModel(model);
    const expectedModel = `z.object({ 
        id: dir,
        createdAt: dir,
        updatedAt: dir,
        deletedAt: dir,
        updatedBy: dir,
        readonly: dir,
        parentId: dir,
        name: dir,
        slug: dir, 
        description: dir, 
        Parent: CategoryOrderByOwn,
        Children: orderByCount,
        Products: orderByCount,
  })`;

    const format = require('prettier').format;
    expect(format(actualModel)).toEqual(format(expectedModel));
  });
});
