import z from 'zod';
import { NameSchema } from '../literals/name-schema.js';
import { toOrderBySchema } from './to-order-by-schema.js';

describe('to-order-by-schema', () => {
  it('should to-order-by-schema', async () => {
    const schema = z.object({ name: NameSchema });
    const orderByScehma = toOrderBySchema(schema);

    expect(orderByScehma.shape.name.parse('asc')).toEqual('asc');
    expect(orderByScehma.shape.name.parse('desc')).toEqual('desc');
    expect(() => orderByScehma.shape.name.parse('some')).toThrowError();
  });
});
