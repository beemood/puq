import type { DMMF } from '@prisma/client/runtime/library';
import { printIncludeSchema } from './print-include-schema.js';
import { printOmitSchema } from './print-omit-schema.js';
import { printOrderBySchema } from './print-order-by-schema.js';
import { printSelectSchema } from './print-select-schema.js';
import { printWhereSchema } from './print-where-schema.js';

export function printQuerySchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  count = 0
): string {
  count++;

  return `z.object({ 
        take:_take, 
        skip:_skip, 
        where: ${printWhereSchema(datamodel, model, count)},
        distinct:${model.name}DistinctSchema.array().optional(),
        select: ${printSelectSchema(datamodel, model, count)} .optional(),
        omit: ${printOmitSchema(datamodel, model)}.optional(),
        include: ${printIncludeSchema(datamodel, model, count)} .optional(), 
        orderBy:${printOrderBySchema(datamodel, model, count)} .optional(),
    })`;
}
