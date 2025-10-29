import type { Datamodel, Field, Model } from '../dmmf.js';
import { printWhere } from '../objects-printers/print-where.js';

export function __printScalarWhereField(field: Field) {
  let filterName = '';
  let suffix = '';

  if (field.isList) {
    suffix = 'ArrayFilter';
  } else {
    suffix = 'Filter';
  }

  switch (field.type) {
    case 'Json':
    case 'BigInt':
    case 'String': {
      filterName = '_str';
      break;
    }
    case 'Date':
    case 'DateTime': {
      filterName = '_date';
      break;
    }
    case 'Int':
    case 'Integer': {
      filterName = '_int';
      break;
    }

    case 'Number':
    case 'Decimal': {
      filterName = '_num';
      break;
    }
    case 'Boolean': {
      filterName = '_bool';
      break;
    }
    default: {
      throw new Error(`Not filter type is found for ${field.name}`);
    }
  }

  return `${filterName}${suffix}`;
}

export function __printEnumWhereField(field: Field) {
  if (field.isList) {
    return `${field.type}.array()`;
  }
  return `${field.type}`;
}

export function __printManyRelationWhereField(
  datamodel: Datamodel,
  model: Model
) {
  return `z.object({ 
            some: ${printWhere(datamodel, model)},
            every: ${printWhere(datamodel, model)},
            none: ${printWhere(datamodel, model)},
        })`;
}

export function printWhereField(
  datamodel: Datamodel,
  model: Model,
  field: Field
): string {
  switch (field.kind) {
    case 'object': {
      const relationModel = datamodel.models.find((m) => m.name === field.type);
      if (!relationModel) throw new Error(`${field.type} not found in models`);
      if (field.isList) {
        return __printManyRelationWhereField(datamodel, relationModel);
      }
      return printWhere(datamodel, relationModel);
    }
    case 'scalar': {
      return __printScalarWhereField(field);
    }
    case 'enum': {
      return __printEnumWhereField(field);
    }
    case 'unsupported': {
      throw new Error(`${field.name} is not supported where filter`);
    }
  }
}
