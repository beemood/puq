import z from 'zod';
import { GENERATED_VALUE } from '../constants/constants.js';
import { isGeneratedSchema, toGeneratedSchema } from './to-generated-schema.js';

describe('to-generated-schema', () => {
  const schema = z.string();

  it('should to-generated-schema', async () => {
    const generatedSchema = toGeneratedSchema(schema);
    expect(generatedSchema.description).toEqual(GENERATED_VALUE);
    expect(isGeneratedSchema(generatedSchema)).toEqual(true);

    expect(schema.description).toEqual(undefined);
    expect(isGeneratedSchema(schema)).toEqual(false);
  });
});
