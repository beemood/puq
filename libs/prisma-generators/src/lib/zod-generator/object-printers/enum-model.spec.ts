import { NotFoundError } from '@puq/errors';
import { Prisma, PrismaClient } from '../../../../generated/index.js';
import { enumModel } from './enum-model.js';

new PrismaClient().product.findMany({
  where: { OR: [], AND: {}, NOT: {} },
});

describe('EnumModel', () => {
  const datamodel = Prisma.dmmf.datamodel;
  const models = datamodel.enums;
  const model = models.find((e) => e.name == 'Status');
  if (!model) throw new NotFoundError();

  it('should print', () => {
    expect(enumModel(model)).toEqual(`z.enum([ 'OK', 'PENDING' ])`);
  });
});
