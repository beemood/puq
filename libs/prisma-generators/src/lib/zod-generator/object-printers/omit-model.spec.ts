import { NotFoundError } from '@puq/errors';
import { Prisma } from '../../../../generated/index.js';
import { omitModel } from './omit-model.js';

describe('OmitModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();
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
      description: P.bool 
     }).partial()`;
  it('should print', () => {
    expect(require('prettier').format(omitModel(model))).toEqual(
      require('prettier').format(expectedModel)
    );
  });
});
