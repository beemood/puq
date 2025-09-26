import { PrismaClient } from '@puq/inventory-db';

describe('client', () => {
  let client: PrismaClient;
  beforeAll(async () => {
    client = new PrismaClient();
  });

  afterAll(async () => {
    await client.$disconnect();
  });

  it('should initialize client', () => {
    expect(client).toBeDefined();
  });

  it('should initialize repositories', () => {
    expect(client.category).toBeDefined();
    expect(client.department).toBeDefined();
    expect(client.product).toBeDefined();
    expect(client.productCategory).toBeDefined();
  });
});
