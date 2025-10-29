import { PrismaClient } from '../generated/prisma/client.js';

describe('ignore', { skip: true }, () => {
  it('should work', async () => {
    new PrismaClient().product.findMany({where:{cat:{}, productTags:{some:{product:{}}}}});
    expect(1).toEqual(1);
  });
});
