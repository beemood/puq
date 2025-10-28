import type { DMMF } from '@prisma/client/runtime/library';

export function printProjectionSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
) {
  return `z.object({ 
        select: ${model.name}SelectSchema.optional(),
        omit: ${model.name}OmitSchema.optional(),
        include:  ${model.name}IncludeSchema.optional()
    })`;
}
