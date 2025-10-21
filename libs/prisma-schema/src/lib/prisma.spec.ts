import { PrismaClient } from '../../generated/index.js';

describe('Prisma', () => {
  const sample = new PrismaClient().sample;
  it('should work', async () => {
    console.log(sample);

    // sample.create({
    //   data: {
    //     json: { some: 'some' },
    //   },
    // });
  });
});
