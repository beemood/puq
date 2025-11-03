import { NotFoundError } from '@puq/errors';
import { Prisma, PrismaClient } from '../../../../generated/index.js';
import { whereModel } from './where-model.js';

new PrismaClient().product.findMany({
  cursor: { id: 1 },
});
describe('WhereModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();
  it('should print', () => {
    const actualModel = whereModel(model);
    const expectedModel = `z.object({ 
        id: P.intFilter,
        createdAt: P.datetimeFilter,
        updatedAt: P.datetimeFilter,
        deletedAt: P.datetimeFilter,
        updatedBy: P.strFilter,
        readonly: P.boolFilter,
        parentId: P.intFilter,
        name: P.strFilter,
        slug: P.strFilter, 
        description: P.strFilter, 
        Parent: CategoryWhereOwn,
        Children: CategoryWhereOwn,
        Products: ProductWhereOwn,
        AND: CategoryWhereOwn,
        OR: CategoryWhereOwn.array(),
        NOT: CategoryWhereOwn.or(CategoryWhereOwn.array())
  }).partial()`;

    const format = require('prettier').format;
    expect(format(actualModel)).toEqual(format(expectedModel));
  });
});
