import z from 'zod';

export const PropertyValueSchema = z.object({
  property: z.string(),
  value: z.string(),
});

export type PropertyValue = z.infer<typeof PropertyValueSchema>;
