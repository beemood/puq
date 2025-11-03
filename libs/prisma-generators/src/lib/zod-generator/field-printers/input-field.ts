import { NotFoundError } from '@puq/errors';
import type { Field } from '../common/dmmf.js';
import { toCreateOwn, toEnum } from '../common/names.js';
import { pre } from '../common/pre.js';
import { makeArray } from './make-array.js';

/**
 * Print custom string field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const _customStringField = (field: Field) => {
  switch (field.name) {
    case 'uuid': {
      return pre('uuid');
    }
    case 'name': {
      return pre('short');
    }
    case 'slug': {
      return pre('slug');
    }
    case 'password': {
      return pre('pass');
    }
    case 'username':
    case 'email': {
      return pre('email');
    }

    case 'phone': {
      return pre('phone');
    }
    case 'description': {
      return pre('long');
    }
  }

  return pre('str');
};

/**
 * Print custom number field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const _customNumberField = (field: Field) => {
  switch (field.name) {
    case 'cost':
    case 'tax':
    case 'price': {
      return pre('currency');
    }
  }

  return pre('num');
};

/**
 * Print custom field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const _customIntField = (field: Field) => {
  switch (field.name) {
    case 'id': {
      return pre('id');
    }
    case 'count':
    case 'stock':
    case 'quantity': {
      return pre('int');
    }
  }
  return pre('int');
};

/**
 * Print scalar field schema
 *
 * @param field {@link Field}
 * @returns string
 */
export const inputScalarField = (field: Field) => {
  let s = '';
  switch (field.type) {
    case 'String':
    case 'BigInt': {
      s = _customStringField(field);
      break;
    }
    case 'Json': {
      s = pre('json');
      break;
    }
    case 'Number':
    case 'Decimal': {
      s = _customNumberField(field);
      break;
    }
    case 'Integer':
    case 'Int': {
      s = _customIntField(field);
      break;
    }
    case 'Boolean': {
      s = pre('bool');
      break;
    }
    case 'Date': {
      s = pre('date');
      break;
    }
    case 'DateTime': {
      s = pre('datetime');
      break;
    }
  }

  if (field.isList) {
    s = makeArray(s);
  }
  return s;
};

/**
 * Print enum-field schema such as `Status`, `Status.array()`
 *
 * @param field {@link Field}
 * @returns
 */
export const inputEnumField = (field: Field): string => {
  const schema = toEnum(field.type);
  if (field.isList) {
    return makeArray(schema);
  }
  return schema;
};

/**
 * Print relation input field
 * @param field {@link Field}
 * @returns
 */
export const inputRelationField = (field: Field): string => {
  if (field.isList) {
    return `z.object({ 
      createMany: { 
        data: ${toCreateOwn(field.type)}.array() 
      }
    })`;
  }
  return `z.object({ 
    create:{
       data: ${toCreateOwn(field.type)} 
    } 
  })`;
};

/**
 * Print input field schema
 *
 * @param field {@link Field}
 * @returns
 */
export const inputField = (field: Field): string => {
  switch (field.kind) {
    case 'enum': {
      return inputEnumField(field);
    }
    case 'scalar': {
      return inputScalarField(field);
    }
    case 'object': {
      return inputRelationField(field);
    }
    case 'unsupported': {
      throw new NotFoundError(field.kind);
    }
  }
};
