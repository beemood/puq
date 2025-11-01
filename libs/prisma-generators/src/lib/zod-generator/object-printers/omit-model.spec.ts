import { NotFoundError } from '@puq/errors';
import { Prisma } from '../../../../generated/index.js';
import { omitModel } from './omit-model.js';

describe('OmitModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.models;
  const model = models.find((e) => e.name == 'Category');
  if (!model) throw new NotFoundError();
  const expectedModel = `z.object({ id: bool, createdAt: bool, updatedAt: bool, deletedAt: bool, updatedBy: bool, readonly: bool, parentId: bool, name: bool, slug: bool, description: bool })`;
  it('should print', () => {
    expect(omitModel(model)).toEqual(expectedModel);
  });
});
