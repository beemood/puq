import type { INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { AppModule } from '@puq/inventory';
import { PrismaClient } from '@puq/inventory-db';

import request from 'supertest';
import type TestAgent from 'supertest/lib/agent.js';

describe('Smoke', () => {
  const client = new PrismaClient();
  let app: INestApplication;
  let agent: TestAgent;
  const repo = client.category;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    agent = request(app.getHttpServer());
  });

  beforeEach(async () => {
    await repo.deleteMany();
  });

  it.each`
    path
    ${'/categories'}
  `('should GET $path', async ({ path }) => {
    const res = await agent.get(path).expect(200);
    expect(res.body).toBeDefined();
    expect(res.body).instanceOf(Array);
  });

  it.each`
    path
    ${'/categories'}
  `('should GET $path with projection', async ({ path }) => {
    const mainCat = await repo.create({ data: { name: 'main cat' } });
    await repo.create({ data: { name: 'cat 1', parentId: mainCat.id } });
    await repo.create({ data: { name: 'cat 2', parentId: mainCat.id } });

    const res = await agent
      .get(path)
      .query({
        select: { id: true },
      })
      .expect(200);
    expect(res.body).toBeDefined();
    expect(res.body).instanceOf(Array);
    expect(res.body.length).toEqual(3);
  });
  it.each`
    path
    ${'/categories'}
  `('should GET $path with relation projection', async ({ path }) => {
    const mainCat = await repo.create({ data: { name: 'main cat' } });
    await repo.create({ data: { name: 'cat 1', parentId: mainCat.id } });
    await repo.create({ data: { name: 'cat 2', parentId: mainCat.id } });

    const res = await agent
      .get(path)
      .query({
        take: 3,
        skip: 0,
        include: JSON.stringify({ parent: true, children: true }),
      })
      .expect(200);

    expect(res.body).toBeDefined();
    expect(res.body).instanceOf(Array);
    expect(res.body.length).toEqual(3);
    expect(res.body[1].parent).toBeDefined();
    expect(res.body[1].children).toBeDefined();
  });
});
