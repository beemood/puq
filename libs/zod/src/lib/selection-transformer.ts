export function __selectionTransformer(selection: any) {
  if (typeof selection === 'string') {
    selection = JSON.parse(selection);
  }

  const { select, omit, include, ...rest } = selection;

  if (select) {
    return { ...rest, select };
  } else if (omit) {
    return { ...rest, omit, include };
  }

  return { ...rest };
}

/**
 * Transform json value into object and pick only one of the selection options of 'select', 'omit', and 'include'
 * @param value
 * @returns
 */
export function selectionTransformer(value: unknown) {
  return __selectionTransformer(value);
}
