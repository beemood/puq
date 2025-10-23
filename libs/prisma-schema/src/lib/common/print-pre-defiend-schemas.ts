import * as commonSchemas from './pre-defined-schemas.js';

/**
 * Print common pre-defined schemas
 * @returns string
 */
export function printPredefinedSchemas() {
  return Object.values(commonSchemas).join('\n');
}
