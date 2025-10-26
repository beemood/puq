import type { INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { CategoryModule, ResourceModule } from '@puq/inventory';
import { PrismaClient } from '@puq/inventory-db';
import type { CategoryCreate, CategoryOwnCreate } from '@puq/inventory-db/zod';
import { CommonAppModule } from '@puq/nest';
import request from 'supertest';
import type TestAgent from 'supertest/lib/agent.js';
import { inspect } from 'util';

describe('CreateCategory', () => {
  const client = new PrismaClient();
  let app: INestApplication;
  let agent: TestAgent;
  const repo = client.category;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CommonAppModule, ResourceModule, CategoryModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    agent = request(app.getHttpServer());
  });

  beforeEach(async () => {
    await repo.deleteMany();
  });

  it('should create category with only required fields', async () => {
    const data: CategoryOwnCreate = {
      name: 'category name',
      slug: 'category-name',
    };
    await agent.post('/category').send(data).expect(201);
    expect(await repo.count()).toEqual(1);
  });

  it('should create category with child relations', async () => {
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

  it('should validate requried inputs', async () => {
    const data: CategoryOwnCreate = {} as CategoryOwnCreate;

    const res = await agent.post('/category').send(data).expect(422);

    expect(res.body).toBeDefined();
    expect(res.body.errors).toBeDefined();
    expect(
      res.body.errors.find(
        (e: any) => e.property === 'name' && e.constraints.invalid_type
      )
    ).toBeDefined();
    expect(
      res.body.errors.find(
        (e: any) => e.property === 'slug' && e.constraints.invalid_type
      )
    ).toBeDefined();
  });

  it('should validate child relation inputs', async () => {
    const data: CategoryCreate = {
      name: 'category name',
      slug: 'category-name',
      children: {
        createMany: {
          data: [{} as CategoryCreate, {} as CategoryCreate],
        },
      },
    };

    const res = await agent.post('/category').send(data).expect(422);

    expect(res.body).toBeDefined();
    expect(res.body.errors).toBeDefined();

    console.log(inspect(res.body, true, 1000));

    expect(
      res.body.errors.find(
        (e: any) => e.property.endsWith('name') && e.constraints.invalid_type
      )
    ).toBeDefined();
    expect(
      res.body.errors.find(
        (e: any) => e.property.endsWith('slug') && e.constraints.invalid_type
      )
    ).toBeDefined();
  });
});
