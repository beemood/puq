import { BadOperationError } from '@puq/errors';
import type { Field } from '../common/dmmf.js';
import { toArrayFilter, toFilter, toWhereOwn } from '../common/names.js';
import { pre } from '../common/pre.js';

/**
 * Print scalar-array-where-field schemas
 *
 * @param field {@link Field}
 * @returns
 */
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

/**
 * Print where-scalar field schemas
 *
 * @param field {@link Field}
 * @returns
 */
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

/**
 * Print where-field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const whereField = (field: Field): string => {
  switch (field.kind) {
    case 'scalar': {
      if (field.isList) {
        return pre(whereScalarArrayField(field));
      }
      return pre(whereScalarField(field));
    }

    case 'enum': {
      if (field.isList) {
        return toArrayFilter(field.type);
      }
      return toFilter(field.type);
    }
    case 'object': {
      return toWhereOwn(field.type);
    }
    case 'unsupported': {
      throw new BadOperationError(field.kind);
    }
  }
};
