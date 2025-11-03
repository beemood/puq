import { toEnum } from '../common/names.js';
import { pre } from '../common/pre.js';
import { makePartial } from '../field-printers/make-partial.js';

/**
 * Print enum filter schema
 *
 * @param name Enum model name
 * @returns string
 */
export function enumFilterModel(name: string) {
  const sName = toEnum(name);
  const schema = `z.object({ 
      equals: ${sName},
      in: ${sName}.array(),
      not: ${sName},
      notIn: ${sName}.array()
  })`;

  return makePartial(schema);
}

export const enumArrayFilterModel = (name: string): string => {
  const sName = toEnum(name);
  const schema = `z.object({ 
      equals: ${sName}.array(),
      has: ${sName},
      hasEvery: ${sName}.array(),
      hasSome: ${sName}.array(),
      isEmpty: ${pre('bool')}
    })`;

  return makePartial(schema);
};
