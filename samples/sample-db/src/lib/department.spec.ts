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

  afterAll(async () => {
    await repo.deleteMany();
  });

  it('should create one', async () => {
    const saved = await repo.create({
      data: {
        name: 'sample department 1',
        categories: {
          createMany: {
            data: [
              { name: ' D Cat 1' },
              { name: ' D Cat 2' },
              { name: ' D Cat 3' },
              { name: ' D Cat 4' },
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
    const saved = await repo.create({ data: { name: 'sample department 2' } });
    await repo.update({ where: { id: saved.id }, data: { name: 'udpated 2' } });
    await repo.deleteMany();
  });
});
