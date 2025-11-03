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
        id: P.dir,
        createdAt: P.dir,
        updatedAt: P.dir,
        deletedAt: P.dir,
        updatedBy: P.dir,
        readonly: P.dir,
        parentId: P.dir,
        name: P.dir,
        slug: P.dir, 
        description: P.dir, 
        Parent: CategoryOrderByOwn,
        Children: P.orderByCount,
        Products: P.orderByCount,
  }).partial()`;

    const format = require('prettier').format;
    expect(format(actualModel)).toEqual(format(expectedModel));
  });
});
