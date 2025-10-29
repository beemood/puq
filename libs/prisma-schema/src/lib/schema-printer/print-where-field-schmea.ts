import type { DMMF } from '@prisma/client/runtime/library';
import { printWhereSchema } from './print-where-schema.js';

export function printWhereFieldSchema(
  datamodel: Omit<DMMF.Datamodel, 'indexes'>,
  model: DMMF.Model,
  field: DMMF.Field,
  count = 0
) {
  count++;

  switch (field.kind) {
    case 'object': {
      if (field.relationName != undefined) {
        const foundModel = datamodel.models.find((m) => m.name === field.type);
        if (!foundModel) {
          throw new Error(`${field.type} is not found!`);
        }

        if (count > 4) {
          return `z.any()`;
        }

        if (field.isList) {
          return `z.object({ 
            some: ${printWhereSchema(datamodel, foundModel, count)}.optional(), 
            every: ${printWhereSchema(
              datamodel,
              foundModel,
              count
            )}.optional(), 
            none: ${printWhereSchema(datamodel, foundModel, count)}.optional(),
          })`;
        }
        return `${printWhereSchema(datamodel, foundModel, count)}`;
      }

      return 'z.any()';
    }
    case 'scalar': {
      if (field.isList) {
        switch (field.type) {
          case 'Json':
          case 'BigInt':
          case 'String': {
            return `_strArrayFilter`;
          }
          case 'Int':
          case 'Integer': {
            return `_intArrayFilter`;
          }
          case 'Decimal':
          case 'Number': {
            return `_numArrayFilter`;
          }
          case 'Date':
          case 'DateTime': {
            return `_dateArrayFilter`;
          }
          case 'Boolean': {
            return `_boolArrayFilter`;
          }
        }
      } else {
        switch (field.type) {
          case 'Json':
          case 'BigInt':
          case 'String': {
            return `_strFilter`;
          }
          case 'Int':
          case 'Integer': {
            return `_intFilter`;
          }
          case 'Decimal':
          case 'Number': {
            return `_numFilter`;
          }
          case 'Date':
          case 'DateTime': {
            return `_dateFilter`;
          }
          case 'Boolean': {
            return `_boolFilter`;
          }
        }
      }
      return 'z.any()';
    }
    case 'enum': {
      if (field.isList) {
        return `${field.type}.array()`;
      } else {
        return `${field.type}`;
      }
    }
    case 'unsupported': {
      return 'z.any()';
    }
  }
}
