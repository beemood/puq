import z, { preprocess } from 'zod';
import { ZodValidationPipe } from './zod-validation.pipe.js';

describe('ZodValidationPipe', () => {
  it('should be compatible with objects', () => {
    const pipe = new ZodValidationPipe(z.object({ name: z.string() }));
    expect(pipe).toBeDefined();
    expect(pipe.transform({ name: 'some' })).toEqual({ name: 'some' });
  });

  it('should be compatible with scalers', () => {
    {
      const pipe = new ZodValidationPipe(z.string());
      expect(pipe).toBeDefined();

      expect(pipe.transform('some')).toEqual('some');
    }

    {
      const pipe = new ZodValidationPipe(z.number());
      expect(pipe).toBeDefined();
      expect(pipe.transform(1)).toEqual(1);
    }

    {
      const pipe = new ZodValidationPipe(z.enum(['name']));
      expect(pipe).toBeDefined();
      expect(pipe.transform('name')).toEqual('name');
    }

    {
      const pipe = new ZodValidationPipe(z.boolean());
      expect(pipe).toBeDefined();
      expect(pipe.transform(true)).toEqual(true);
    }

    {
      const pipe = new ZodValidationPipe(z.int());
      expect(pipe).toBeDefined();
      expect(pipe.transform(1)).toEqual(1);
    }
  });

  it('should be compatible with transformers', () => {
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
});
