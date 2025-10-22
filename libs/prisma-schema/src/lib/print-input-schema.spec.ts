const prettier = require('prettier');
import type { DMMF } from '@prisma/client/runtime/library';
import { Prisma } from '../../generated/index.js';
import { printCreateInputSchema } from './print-input-schema.js';

describe('printInputSchema', () => {
  let model: DMMF.Model;

  beforeAll(() => {
    model = Prisma.dmmf.datamodel.models.find((e) => e.name === 'Sample')!;
    if (!model) {
      throw new Error('Model does not exist!');
    }
  });

  describe('printOwnCreateInputSchema', () => {
    it('should print the schema', () => {
      const schema = printCreateInputSchema(model);
      expect(schema).toBeDefined();
    });
  });
});
