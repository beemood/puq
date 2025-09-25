import z, { ZodError } from 'zod';
describe('ZodValidationPipe', () => {
  const schema = z.object({
    name: z.string().min(3),
  });

  it('shold work', async () => {
    expect(schema.parse({ name: 'some' })).toEqual({ name: 'some' });
    expect(() => schema.parse({ name: 'so' })).toThrowError(ZodError);
  });
});
