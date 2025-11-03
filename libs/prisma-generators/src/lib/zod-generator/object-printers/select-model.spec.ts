import { NotFoundError } from '@puq/errors';
import { Prisma } from '../../../../generated/index.js';
import { selectModel } from './select-model.js';

describe('SelectModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();
  it('should print', () => {
    const actualModel = selectModel(model);
    const expectedModel = `z.object({ 
        id: P.bool,
        createdAt: P.bool,
        updatedAt: P.bool,
        deletedAt: P.bool,
        updatedBy: P.bool,
        readonly: P.bool,
        parentId: P.bool,
        name: P.bool,
        slug: P.bool, 
        description: P.bool, 
        Parent: CategoryQueryOneOwn,
        Children: CategoryQueryOwn,
        Products: ProductQueryOwn,
  }).partial()`;

    const format = require('prettier').format;
    expect(format(actualModel)).toEqual(format(expectedModel));
  });
});
