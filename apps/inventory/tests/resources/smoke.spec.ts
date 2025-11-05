import type { INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { AppModule } from '@puq/inventory';
import { Prisma, PrismaClient } from '@puq/inventory-db';
import { names, pluralize } from '@puq/names';

import request from 'supertest';
import type TestAgent from 'supertest/lib/agent.js';

const models = Prisma.dmmf.datamodel.models;
const paths = models.map((e) => {
  return `/${pluralize(names(e.name).kebab)}`;
});
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

  it.each(paths)('should GET $0 with projection', async (path) => {
  {  const res = await agent
      .get(path)
      .query({
        select: { id: true },
      })
      .expect(200);
    expect(res.body).toBeDefined();
    expect(res.body).instanceOf(Array);}
  });
});
