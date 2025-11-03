export const P = 'P';

export const importZod = () => {
  return [`import { z } from 'zod';`, `import * as ${P} from '@puq/zod';`].join(
    '\n'
  );
};
/**
 * This function helps to import pre-build schemas from '@puq/zod' library.
 * @param schemaName builtin schema name imported from '@puq/zod' library
 * @returns
 */
export function pre(schemaName: string) {
  return `P.${schemaName}`;
}
