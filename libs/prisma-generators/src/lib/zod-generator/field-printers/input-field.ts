import { toEnum } from '../common/names.js';
import type { Field } from '../common/types.js';
import { makeArray } from './make-array.js';

const builtinStringNames: Record<string, string> = {
  uuid: 'uuid',
  name: 'name',
  slug: 'slug',
  password: 'pass',
  email: 'email',
  username: 'email',
  phone: 'phone',
  description: 'desc',
};

const builtinNumberNames: Record<string, string> = {
  id: 'id',
  price: 'currency',
  cost: 'currency',
  tax: 'currency',
  quantity: 'positiveInt',
  stock: 'positiveInt',
  count: 'positiveInt',
};
export const inputScalarField = (field: Field) => {
  let s = '';
  switch (field.type) {
    case 'String':
    case 'BigInt': {
      if (builtinStringNames[field.name]) {
        s = builtinStringNames[field.name];
      } else {
        s = 'str';
      }
      break;
    }
    case 'Json': {
      s = 'json';
      break;
    }
    case 'Number':
    case 'Decimal': {
      if (builtinNumberNames[field.name]) {
        s = builtinNumberNames[field.name];
      } else {
        s = 'num';
      }
      break;
    }
    case 'Integer':
    case 'Int': {
      if (builtinNumberNames[field.name]) {
        s = builtinNumberNames[field.name];
      } else {
        s = 'int';
      }
      break;
    }
    case 'Boolean': {
      s = 'bool';
      break;
    }
    case 'Date': {
      s = 'date';
      break;
    }
    case 'DateTime': {
      s = 'datetime';
      break;
    }
  }

  if (field.isList) {
    s = makeArray(s);
  }
  return s;
};

export const inputEnumField = (field: Field): string => {
  let s = toEnum(field.type);
  if (field.isList) {
    s = makeArray(s);
  }
  return s;
};

export const inputField = (field: Field): string => {
  let s = '';

  switch (field.kind) {
    case 'enum': {
      s = inputEnumField(field);
      break;
    }
    case 'scalar': {
      s = inputScalarField(field);
      break;
    }
    case 'object': {
      return '';
    }
    case 'unsupported': {
      break;
    }
  }

  return s;
};
