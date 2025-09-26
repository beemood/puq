import z from 'zod';
import { Generated } from '../types/generated-type.js';
import { createResourceSchemas } from './create-resource-schemas.js';

describe('create-resource-schema', () => {
  it('should create-resource-schema', async () => {
    const schema = z.object({
      id: Generated(z.int()),
      name: z.string(),
    });

    const { create, order, projection, update, where } =
      createResourceSchemas(schema);

    type Create = z.infer<typeof create>;
    type Update = z.infer<typeof update>;
    type Order = z.infer<typeof order>;
    type Projection = z.infer<typeof projection>;
    type Where = z.infer<typeof where>;
  });
});
