export function matchesFn(expression: RegExp) {
  return (value: string) => expression.test(value);
}
