import type { Model } from '../common/dmmf.js';
import { toInclude, toOmit, toSelect, toWhere } from '../common/names.js';

/**
 * Print query-one schema
 *
 * @param model {@link Model}
 * @returns string
 */
export const queryOneModel = (model: Model): string => {
  const where = toWhere(model.name);
  const select = toSelect(model.name);
  const omit = toOmit(model.name);
  const include = toInclude(model.name);

  const schema = `z.union([ 
    z.object({ select: ${select}, where: ${where} }),
    z.object({ omit: ${omit}, where: ${where} }),
    z.object({ include: ${include}, where: ${where} }),
    z.object({})
  ])`;

  return schema;
};
