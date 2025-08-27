import type { Selection } from './prisma.js';

export function __selectionTransformer<T>(selection: Selection<T>) {
  if (typeof selection === 'string') {
    selection = JSON.parse(selection);
  }

  const { select, omit, include } = selection;

  if (select) {
    return { select };
  } else if (omit) {
    return { omit };
  } else if (include) {
    return { include };
  }
  return {};
}

/**
 * Transform json value into object and pick only one of the selection options of 'select', 'omit', and 'include'
 * @param value
 * @returns
 */
export function selectionTransformer(value: unknown) {
  return __selectionTransformer(value as Selection<any>);
}
