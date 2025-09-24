import { z } from 'zod';

/**
 * Convert zod object schema's properties into zod enum ('asc' | 'desc') type.
 *
 * @param zodObject Zod object schema
 * @returns Zod object schema with BooleanType properties
 */
export function toOrderRecord<T extends Record<string, z.ZodType>>(
  zodObject: z.ZodObject<T>
) {
  const newShape = Object.fromEntries(
    Object.entries(zodObject.shape).map(([key]) => [
      key,
      z.enum(['asc', 'desc']),
    ])
  );
  return z.object(newShape) as z.ZodObject<{ [K in keyof T]: z.ZodEnum }>;
}
