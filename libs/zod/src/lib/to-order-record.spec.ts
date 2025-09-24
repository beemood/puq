import z from 'zod';
import { toOrderRecord } from './to-order-record.js';

describe('toOrderRecord', () => {
  const objectSchema = z.object({
    name: z.string(),
  });
  it('should convert object into order record schema', () => {
    const orderSchema = toOrderRecord(objectSchema);
    expect(orderSchema).toBeDefined();

    expect(orderSchema.parse({ name: 'asc' })).toEqual({ name: 'asc' });

    expect(() => orderSchema.parse({ name: "some'" })).toThrowError();
  });
});
