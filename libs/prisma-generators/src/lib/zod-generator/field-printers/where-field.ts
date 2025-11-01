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
      return 'filterStrArray';
    }
    case 'Number':
    case 'Decimal': {
      return 'filerNumArray';
    }
    case 'Integer':
    case 'Int': {
      return 'filterIntArray';
    }
    case 'Boolean': {
      return 'filterBoolArray';
    }
    case 'Date': {
      return 'filterDateArray';
    }
    case 'DateTime': {
      return 'filterDatetimeArray';
    }
  }
  throw new BadOperationError(field.name);
};

export const whereScalarField = (field: Field): string => {
  switch (field.type) {
    case 'String':
    case 'BigInt':
    case 'Json': {
      return 'filterStr';
    }
    case 'Number':
    case 'Decimal': {
      return 'filerNum';
    }
    case 'Integer':
    case 'Int': {
      return 'filterInt';
    }
    case 'Boolean': {
      return 'filterBool';
    }
    case 'Date': {
      return 'filterDate';
    }
    case 'DateTime': {
      return 'filterDatetime';
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
