import { JSONSchema7 } from '@puq/types';
import { toDefinitionPath } from './to-definition-path.js';

/**
 * Convert $ref paths into definition paths
 * @param schema
 */
export function resolveReferences(schema: JSONSchema7) {
  if (schema.$ref && !schema.$ref.startsWith('#')) {
    schema.$ref = toDefinitionPath(schema.$ref);
  }
  const entries = Object.entries(schema);

  for (const [key, value] of entries) {
    if (key != '$ref') {
      if (typeof value === 'object') {
        resolveReferences(value);
      } else if (Array.isArray(value)) {
        for (const v of value) {
          resolveReferences(v);
        }
      }
    }
  }
}
