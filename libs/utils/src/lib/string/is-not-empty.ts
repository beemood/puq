import { isEmpty } from './is-empty.js';

/**
 * Check the given {@link value} is not an empty string
 * @param value
 * @returns
 */
export const isNotEmpty = (value: string) => {
  return !isEmpty(value);
};
