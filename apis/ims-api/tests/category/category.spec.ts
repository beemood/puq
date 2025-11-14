import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule, client } from '@puq/ims-api';
import type { CategoryCreateType } from '@puq/ims-db/zod';
import * as request from 'supertest';
import type TestAgent from 'supertest/lib/agent.js';

describe('Category', () => {
  let app: INestApplication;
  const repo = client.category;
  let agent: TestAgent;

  const data: CategoryCreateType = {
    name: 'category',
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    await repo.deleteMany();

    agent = request.agent(app.getHttpServer(), {});
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await repo.deleteMany();
  });

  afterEach(async () => {
    await repo.deleteMany();
  });

  it('GET /categories', async () => {
    return await agent.get('/categories').expect(200);
  });

  it('POST /category', async () => {
    const created = await agent.post('/category').send(data).expect(201);
    await agent.get(`/category/${created.body.id}`).expect(200);
  });

  it('PUT /category/:id', async () => {
    const created = await agent
      .post('/category')
      .send({ name: 'category' })
      .expect(201);
    await agent
      .put(`/category/${created.body.id}`)
      .send({ name: 'updated' })
      .expect(200);
  });

  it('DELETE /category/:id', async () => {
    const created = await agent
      .post('/category')
      .send({ name: 'category' })
      .expect(201);
    await agent.delete(`/category/${created.body.id}`).expect(200);
  });
});
