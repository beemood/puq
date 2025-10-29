import type { Field } from '../dmmf.js';

export function printWhereScalarField(field: Field) {
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
