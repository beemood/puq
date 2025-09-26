import z from 'zod';
import { toWhereQuerySchema } from './to-where-query-schemas.js';

describe('to-where-query-schema', () => {
  it('should to-where-query-schema', async () => {
    const schema = z.object({
      string: z.string(),
      number: z.number(),
      integer: z.int(),
      boolean: z.boolean(),
      datetime: z.iso.datetime(),
    });

    const whereSchema = toWhereQuerySchema(schema);

    expect(whereSchema.shape.string).toBeDefined();
    expect(whereSchema.shape.number).toBeDefined();
    expect(whereSchema.shape.integer).toBeDefined();
    expect(whereSchema.shape.boolean).toBeDefined();
    expect(whereSchema.shape.datetime).toBeDefined();

    expect(whereSchema.shape.string.description).toEqual('StringFilterSchema');
    expect(whereSchema.shape.number.description).toEqual('NumberFilterSchema');
    expect(whereSchema.shape.integer.description).toEqual(
      'IntegerFilterSchema'
    );
    expect(whereSchema.shape.boolean.description).toEqual(
      'BooleanFilterSchema'
    );
    expect(whereSchema.shape.datetime.description).toEqual(
      'DatetimeFilterSchema'
    );
  });
});
