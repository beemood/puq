import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma } from '../../generated/index.js';
import { printSchemas } from './print-schemas.js';

describe('printSchemas', () => {
  beforeAll(() => {
    const schemas = printSchemas(Prisma.dmmf.datamodel);
    writeFileSync(join(__dirname, 'sample-schemas.ts'), schemas);
  });

  it('should work', () => {
    expect(1).toEqual(1);
  });
  // const client = new PrismaClient();

  // it('should work', () => {
  //   try {
  //     client.sample.findMany(SampleCompleteQuerySchema.parse({}));
  //     client.sample.findUnique({
  //       ...SampleCompleteQueryOneSchema.parse({}),
  //       where: { id: 1 },
  //     });
  //     client.sample.findFirst(SampleCompleteQueryOneSchema.parse({}));
  //     // client.sample.create({

  //     // });
  //     client.sample.update({
  //       where: { id: 1 },
  //       data: SampleUpdateSchema.parse({}),
  //     });

  //     client.sample.delete({
  //       ...SampleCompleteQueryOneSchema.parse({}),
  //       where: { id: 1 },
  //     });
  //   } catch {
  //     //
  //   }
  // });
});
