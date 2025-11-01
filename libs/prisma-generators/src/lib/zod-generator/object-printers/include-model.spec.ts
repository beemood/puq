import { NotFoundError } from '@puq/errors';
import { Prisma } from '../../../../generated/index.js';

import { includeModel } from './include-model.js';

describe('IncludeModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();
  it('should print', () => {
    const actualModel = includeModel(model);
    const expectedModel = `z.object({
        Parent: bool.or(CategoryQueryOneOwn),
        Children: bool.or(CategoryQueryOwn),
        Products: bool.or(ProductQueryOwn),
  })`;

    const format = require('prettier').format;
    expect(format(actualModel)).toEqual(format(expectedModel));
  });
});
