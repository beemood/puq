import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma, PrismaClient } from '../../generated/index.js';
import { printSchemas } from './print-schemas.js';
import {
  SampleCompleteQueryOneSchema,
  SampleCompleteQuerySchema,
  SampleCreateSchema,
  SampleUpdateSchema,
} from './sample-schemas.js';
describe('printSchemas', () => {
  beforeAll(() => {
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    const formatted = require('prettier').format(schemas);
    writeFileSync(join(__dirname, 'sample-schemas.ts'), formatted);
  });

  const client = new PrismaClient();

  it('should work', () => {
    try {
      client.sample.findMany(SampleCompleteQuerySchema.parse({}));
      client.sample.findUnique({
        ...SampleCompleteQueryOneSchema.parse({}),
        where: { id: 1 },
      });
      client.sample.findFirst(SampleCompleteQueryOneSchema.parse({}));
      client.sample.create({ data: SampleCreateSchema.parse({}) });
      client.sample.update({
        where: { id: 1 },
        data: SampleUpdateSchema.parse({}),
      });

      client.sample.delete({
        ...SampleCompleteQueryOneSchema.parse({}),
        where: { id: 1 },
      });
    } catch {
      //
    }
  });
});
