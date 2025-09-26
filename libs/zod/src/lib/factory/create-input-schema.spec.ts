import z from 'zod';
import { GENERATED_VALUE } from '../constants/constants.js';
import { createInputSchema } from './create-input-schema.js';

describe('create-input-schema', () => {
  beforeAll(async () => {
    // setup
  });

  afterAll(async () => {
    // teardown
  });

  it('should create-input-schema', async () => {
    const schema = z.object({
      id: z.int().describe(GENERATED_VALUE),
      name: z.string(),
    });

    const createSchema = createInputSchema(schema);

    expect(Object.hasOwn(createSchema.shape, 'name')).toEqual(true);
    expect(Object.hasOwn(createSchema.shape, 'id')).toEqual(false);
  });
});
