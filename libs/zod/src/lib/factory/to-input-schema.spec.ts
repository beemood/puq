import z from 'zod';
import { Generated } from '../types/generated-type.js';
import { toInputSchema } from './to-input-schema.js';

describe('create-input-schema', () => {
  beforeAll(async () => {
    // setup
  });

  afterAll(async () => {
    // teardown
  });

  it('should create-input-schema', async () => {
    const schema = z.object({
      id: Generated(z.int()),
      name: z.string(),
    });

    const createSchema = toInputSchema(schema);

    expect(Object.hasOwn(createSchema.shape, 'name')).toEqual(true);
    expect(Object.hasOwn(createSchema.shape, 'id')).toEqual(false);
  });
});
