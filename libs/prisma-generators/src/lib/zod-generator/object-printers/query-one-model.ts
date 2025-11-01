import { toInclude, toOmit, toSelect, toWhere } from '../common/names.js';
import type { Model } from '../common/types.js';

export function queryOneModel(model: Model) {
  const where = toWhere(model.name);
  const select = toSelect(model.name);
  const omit = toOmit(model.name);
  const include = toInclude(model.name);

  return `z.union([ 
    z.object({ select: ${select}, where: ${where} }),
    z.object({ omit: ${omit}, where: ${where} }),
    z.object({ include: ${include}, where: ${where} }),
    z.object({})
  ])`;
}
