import type { Model } from '../common/dmmf.js';
import { toInclude, toOmit, toSelect } from '../common/names.js';

/**
 * Print projection schema
 *
 * @param model {@link Model}
 * @returns
 */
export const projectionModel = (model: Model): string => {
  const select = toSelect(model.name);
  const omit = toOmit(model.name);
  const include = toInclude(model.name);
  return `z.union([
        z.object({ select: ${select} }),
        z.object({ omit: ${omit} }),
        z.object({ include: ${include} }),
        z.object({})
    ])`;
};
