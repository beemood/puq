import { BadOperationError } from '@puq/errors';
import { toArrayFilter, toFilter, toWhereOwn } from '../common/names.js';
import type { Field } from '../common/types.js';

export const whereRelationField = (field: Field) => {
  return toWhereOwn(field.type);
};

export const whereScalarArrayField = (field: Field) => {
  switch (field.type) {
    case 'String':
    case 'BigInt':
    case 'Json': {
      return 'strArrayFilter';
    }
    case 'Number':
    case 'Decimal': {
      return 'numArrayFilter';
    }
    case 'Integer':
    case 'Int': {
      return 'intArrayFilter';
    }
    case 'Boolean': {
      return 'boolArrayFilter';
    }
    case 'Date': {
      return 'dateArrayFilter';
    }
    case 'DateTime': {
      return 'datetimeArrayFilter';
    }
  }
  throw new BadOperationError(field.name);
};

export const whereScalarField = (field: Field): string => {
  switch (field.type) {
    case 'String':
    case 'BigInt':
    case 'Json': {
      return 'strFilter';
    }
    case 'Number':
    case 'Decimal': {
      return 'numFilter';
    }
    case 'Integer':
    case 'Int': {
      return 'intFilter';
    }
    case 'Boolean': {
      return 'boolFilter';
    }
    case 'Date': {
      return 'dateFilter';
    }
    case 'DateTime': {
      return 'datetimeFilter';
    }
  }
  throw new BadOperationError(field.name);
};
export const whereField = (field: Field): string => {
  switch (field.kind) {
    case 'scalar': {
      if (field.isList) {
        return whereScalarArrayField(field);
      }
      return whereScalarField(field);
    }

    case 'enum': {
      if (field.isList) {
        return toArrayFilter(field.type);
      }
      return toFilter(field.type);
    }
    case 'object':
    case 'unsupported': {
      return whereRelationField(field);
    }
  }
};
