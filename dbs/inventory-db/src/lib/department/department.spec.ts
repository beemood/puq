import type { Prisma } from '@puq/inventory-db';
import { PrismaClient } from '@puq/inventory-db';

describe('department', () => {
  let client: PrismaClient;
  let repo: Prisma.DepartmentDelegate;

  beforeAll(async () => {
    client = new PrismaClient();
    repo = client.department;

    await repo.deleteMany();
  });
  afterAll(async () => {
    await repo.deleteMany();
  });

  it('should create one', async () => {
    const saved = await repo.create({
      data: {
        name: 'sample department 2',
        categories: {
          createMany: {
            data: [
              { name: 'Department Cat 1' },
              { name: 'Department Cat 2' },
              { name: 'Department Cat 3' },
              { name: 'Department Cat 4' },
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
    const saved = await repo.create({ data: { name: 'sample department 1' } });
    await repo.update({ where: { id: saved.id }, data: { name: 'udpated' } });
    await repo.deleteMany();
  });
});
