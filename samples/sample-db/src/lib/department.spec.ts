import type { Prisma } from '@puq/sample-db';
import { PrismaClient } from '@puq/sample-db';

describe('department', () => {
  let client: PrismaClient;
  let repo: Prisma.DepartmentDelegate;

  beforeAll(async () => {
    client = new PrismaClient();
    repo = client.department;

    await repo.deleteMany();
  });

  it('should create one', async () => {
    const saved = await repo.create({
      data: {
        name: 'sample department',
        categories: {
          createMany: {
            data: [
              { name: 'Cat 1' },
              { name: 'Cat 2' },
              { name: 'Cat 3' },
              { name: 'Cat 4' },
            ],
          },
        },
      },
    });
    expect(saved).toBeDefined();
    await repo.deleteMany();
  });

  it('should find all', async () => {
    const found = await repo.findMany();
    expect(found).toBeDefined();
  });

  it('should update one', async () => {
    const saved = await repo.create({ data: { name: 'sample department' } });
    await repo.update({ where: { id: saved.id }, data: { name: 'udpated' } });
    await repo.deleteMany();
  });
});
