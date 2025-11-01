import { NotFoundError } from '@puq/errors';
import { Prisma } from '../../../../generated/index.js';
import { parseJsonOrReturn } from '../common/common-code.js';
const datamodel = Prisma.dmmf.datamodel;
const models = datamodel.models;
const enumModels = datamodel.enums;

const model = models.find((e) => e.name == 'Product');

if (!model) throw new NotFoundError();

describe('EnumModel', () => {
  it('should print enum model', () => {
    console.log(parseJsonOrReturn.toString());
  });
});
