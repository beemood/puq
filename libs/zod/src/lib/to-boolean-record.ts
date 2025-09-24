import { z } from 'zod';

/**
 * Convert zod object schema's properties into zod boolean type.
 *
 * @param zodObject Zod object schema
 * @returns Zod object schema with BooleanType properties
 */
export function toBooleanRecord<T extends Record<string, z.ZodType>>(
  zodObject: z.ZodObject<T>
): z.ZodObject<{ [K in keyof T]: z.ZodOptional<z.ZodBoolean> }> {
  const newShape = Object.fromEntries(
    Object.entries(zodObject.shape).map(([key]) => [
      key,
      z.boolean().optional(),
    ])
  );

  return z.object(newShape) as z.ZodObject<{
    [K in keyof T]: z.ZodOptional<z.ZodBoolean>;
  }>;
}
