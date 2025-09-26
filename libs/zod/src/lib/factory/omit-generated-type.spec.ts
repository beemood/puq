import z from 'zod';
import { Generated } from '../types/generated-type.js';
import { omitGenerated } from './omit-generated-type.js';

describe('omit-generated-type', () => {
  const user = z.object({
    id: Generated(z.int()),
    name: z.string(),
  });

  const omittedUser = omitGenerated(user);

  it('should omit-generated-type', async () => {
    expect(Object.hasOwn(omittedUser.shape, 'name')).toEqual(true);
    expect(Object.hasOwn(omittedUser.shape, 'id')).toEqual(false);
  });
});
