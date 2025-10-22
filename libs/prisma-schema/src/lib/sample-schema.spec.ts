import type z from 'zod';
import { PrismaClient } from '../../generated/index.js';
import {
  SampleCompleteQuerySchema,
  SampleOwnQueryOneSchema,
} from './sample-schema.js';
describe('Prisma', () => {
  const client = new PrismaClient();

  it('should work', async () => {
    const sample = client.sample;

    {
      const parsed = SampleCompleteQuerySchema.parse({});

      type Query = z.infer<typeof SampleCompleteQuerySchema>;

      const q: Query = {
        where: {
          name: { endsWith: '' },
          nums: { has: 1 },
          categoryId: { equals: 1 },
          category: { id: { equals: 1 } },
          statuses: { has: 'DONE', hasEvery: ['DONE', 'DONE'] },
        },
        select: {
          category: { select: { id: true } },
          tags: { where: { id: 1 }, select: { id: true } },
          status: false,
        },
        orderBy: { category: { id: 'asc' }, tags: { _count: 'asc' } },
      };

      sample.findMany(parsed);
    }
    sample.findFirst(SampleOwnQueryOneSchema.parse({}));
  });
});
