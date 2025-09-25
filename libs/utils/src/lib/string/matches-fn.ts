/**
 * Return a function that check the function's parameter passes the {@link expression} test
 *
 * @group Strings
 * @param expression
 * @returns
 */
export function matchesFn(expression: RegExp) {
  return (value: string) => expression.test(value);
}
