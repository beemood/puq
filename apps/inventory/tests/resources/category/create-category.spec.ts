import type { INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { CategoryModule, ResourceModule } from '@puq/inventory';
import { PrismaClient } from '@puq/inventory-db';
import type { CategoryCreate, CategoryOwnCreate } from '@puq/inventory-db/zod';
import request from 'supertest';
import type TestAgent from 'supertest/lib/agent.js';

describe('CreateCategory', () => {
  const client = new PrismaClient();
  let app: INestApplication;
  let agent: TestAgent;
  const repo = client.category;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ResourceModule, CategoryModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    agent = request(app.getHttpServer());
  });

  beforeEach(async () => {
    await repo.deleteMany();
  });

  it('should create category with its own fields', async () => {
    const data: CategoryOwnCreate = {
      name: 'category name',
      slug: 'category-name',
    };
    await agent.post('/category').send(data).expect(201);
    expect(await repo.count()).toEqual(1);
  });

  it('should create category with children', async () => {
    const data: CategoryCreate = {
      name: 'category name',
      slug: 'category-name',
      children: {
        createMany: {
          data: [
            { name: 'child 1', slug: 'child-1' },
            { name: 'child 2', slug: 'child-2' },
          ],
        },
      },
    };

    await agent.post('/category').send(data).expect(201);
    expect(await repo.count()).toEqual(3);
  });
});
