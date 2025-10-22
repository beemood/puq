import * as commonSchemas from './common-schemas.js';

export function printCommonSchemas() {
  return Object.values(commonSchemas).join('\n');
}
