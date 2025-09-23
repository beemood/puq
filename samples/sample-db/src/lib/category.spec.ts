import type { Prisma } from '@puq/sample-db';
import { PrismaClient } from '@puq/sample-db';

describe('category', () => {
  let client: PrismaClient;
  let repo: Prisma.CategoryDelegate;

  beforeAll(async () => {
    client = new PrismaClient();
    repo = client.category;
    await repo.deleteMany();
  });

  it('should create one', async () => {
    const saved = await repo.create({ data: { name: 'sample category' } });
    expect(saved).toBeDefined();
    await repo.deleteMany();
  });

  it('should find all', async () => {
    const found = await repo.findMany();
    expect(found).toBeDefined();
  });

  it('should update one', async () => {
    const saved = await repo.create({ data: { name: 'sample category' } });
    await repo.update({ where: { id: saved.id }, data: { name: 'udpated' } });
    await repo.deleteMany();
  });
});
