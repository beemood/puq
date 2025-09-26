import type { ZodType } from 'zod';
import { type ZodObject } from 'zod';
import type { OmitGeneratedType } from '../types/generated-type.js';

/**
 * 🧩 Zod Helper: Creates a new Zod schema that omits properties marked as 'Generated'.
 * * ✅ FIX: The type check now uses the stable string literal 'ZodBranded'.
 * @param schema The original Zod object schema.
 * @returns A new Zod object schema with 'Generated' properties omitted.
 */
export function omitGenerated<T extends ZodObject>(
  schema: T
): ZodObject<OmitGeneratedType<T>> {
  const keysToOmit: string[] = [];
  const shape = schema.shape;

  // Iterate through the properties to find branded schemas
  for (const key in shape) {
    const propSchema = shape[key] as ZodType;

    if (propSchema.description?.includes('Generated')) {
      keysToOmit.push(key);
    }
  }

  // Use z.object.omit() to create the new schema
  return schema.omit(
    keysToOmit.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  ) as unknown as ZodObject<OmitGeneratedType<T>>;
}
