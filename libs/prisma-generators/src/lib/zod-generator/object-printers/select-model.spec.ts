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
        id: bool,
        createdAt: bool,
        updatedAt: bool,
        deletedAt: bool,
        updatedBy: bool,
        readonly: bool,
        parentId: bool,
        name: bool,
        slug: bool, 
        description: bool, 
        Parent: CategoryQueryOneOwn,
        Children: CategoryQueryOwn,
        Products: ProductQueryOwn,
  })`;

    const format = require('prettier').format;
    expect(format(actualModel)).toEqual(format(expectedModel));
  });
});
