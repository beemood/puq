import { NotFoundError } from '@puq/errors';
import type { Field } from '../common/dmmf.js';
import { isRequired } from '../common/is-field.js';
import { toEnum } from '../common/names.js';
import { pre } from '../common/pre.js';
import { makeArray } from './make-array.js';
import { makeOptional } from './make-optional.js';

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

  if (!isRequired(field)) {
    s = makeOptional(s);
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
  let s = toEnum(field.type);
  if (field.isList) {
    s = makeArray(s);
  }

  if (!isRequired(field)) {
    s = makeOptional(s);
  }
  return s;
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
      return makeOptional(pre('connectMany'));
    }
    case 'unsupported': {
      throw new NotFoundError(field.kind);
    }
  }
};
