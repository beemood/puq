import z from 'zod';
import { toWhereRecord } from './to-where-record.js';

describe('toWhereRecord', () => {
  it('should convert the object schema into where record', () => {
    const schema = z.object({ name: z.string() });

    const whereSchema = toWhereRecord(schema);

    expect(whereSchema).toBeDefined();
    expect(whereSchema.parse({ name: { equals: 's' } })).toEqual({
      name: { equals: 's' },
    });
  });
});
