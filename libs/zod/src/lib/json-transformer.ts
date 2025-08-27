export function jsonTransformer(value: any) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  }

  return value;
}
