import { PrismaClient } from '@puq/inventory-db/client';

describe('Category', async () => {
  const client = new PrismaClient();

  client.product.findMany({
    // include: { Variants: {}, Category: {} },

    include: {
      Category: { include: { Children: true } },
    },
  });
  it('should work', () => {
    expect(1).toEqual(1);
  });
});
