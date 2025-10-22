import { PrismaClient } from '../../generated/index.js';

describe('Prisma', () => {
  const sample = new PrismaClient().sample;
  it('should work', async () => {
    console.log(sample);

    sample.findMany({
      select: {
        category: {},
      },
      orderBy: [
        
        { id: 'asc', category: { id: 'desc' } },
        { tags: { _count: 'desc' } },
      ],
    });
    // sample.findMany({
    //   select:{category:true}
    // })
    // sample.create({
    //   data: {
    //     json: { some: 'some' },
    //   },
    // });
  });
});
