import { UnprocessableEntityException } from '@nestjs/common';
import z, { preprocess } from 'zod';
import { ZodValidationPipe } from './zod-validation.pipe.js';

describe('ZodValidationPipe', () => {
  it('should be compatible with objects', async () => {
    const pipe = new ZodValidationPipe(z.object({ name: z.string() }));
    expect(pipe).toBeDefined();
    expect(await pipe.transform({ name: 'some' })).toEqual({ name: 'some' });
  });

  it('should be compatible with scalers', async () => {
    {
      const pipe = new ZodValidationPipe(z.string());
      expect(pipe).toBeDefined();

      expect(await pipe.transform('some')).toEqual('some');
    }

    {
      const pipe = new ZodValidationPipe(z.number());
      expect(pipe).toBeDefined();
      expect(await pipe.transform(1)).toEqual(1);
    }

    {
      const pipe = new ZodValidationPipe(z.enum(['name']));
      expect(pipe).toBeDefined();
      expect(await pipe.transform('name')).toEqual('name');
    }

    {
      const pipe = new ZodValidationPipe(z.boolean());
      expect(pipe).toBeDefined();
      expect(await pipe.transform(true)).toEqual(true);
    }

    {
      const pipe = new ZodValidationPipe(z.int());
      expect(pipe).toBeDefined();
      expect(await pipe.transform(1)).toEqual(1);
    }
  });

  it('should be compatible with transformers', async () => {
    expect(
      new ZodValidationPipe(z.object().transform((value) => value))
    ).toBeDefined();
    expect(
      new ZodValidationPipe(
        preprocess(
          (value) => value,
          z.object().transform((value) => value)
        )
      )
    ).toBeDefined();
  });

  it('should throw UnprocessableEntityException', async () => {
    const schema = z.object({ name: z.string().min(3) });
    expect(() =>
      new ZodValidationPipe(schema).transform({ name: 'd' })
    ).rejects.toThrowError(UnprocessableEntityException);

    try {
      await new ZodValidationPipe(schema).transform({ name: 'd' });
    } catch (___error__: any) {
      const exception = ___error__ as UnprocessableEntityException;
      expect(exception).toBeInstanceOf(UnprocessableEntityException);

      const response = exception.getResponse() as any;
      expect(response).toBeTypeOf('object');
      expect(response.errors).instanceOf(Array);
      const firstError = response.errors[0];

      expect(firstError).toHaveProperty('property');
      expect(firstError).toHaveProperty('constraints');
      expect(firstError).toHaveProperty('message');
      expect(firstError.property).toEqual('name');
      expect(firstError.constraints).toHaveProperty('too_small');
    }
  });

  it('should validate projections', () => {
    const pipe = new ZodValidationPipe(
      z
        .object({ id: z.boolean(), name: z.boolean() })
        .partial()
        .refine(
          (value) => {
            if (Object.keys(value).length === 2) {
              return false;
            }

            return true;
          },
          {
            message:
              'The object must be a *partial* selection, not empty or complete.',
            path: ['$property'],
          }
        )
    );

    expect(() => pipe.transform({ id: true, name: true })).rejects.toThrowError(
      UnprocessableEntityException
    );
  });
});
