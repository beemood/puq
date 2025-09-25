import type { ClassType } from '@puq/types';

/**
 * Get own property names (excluding 'constructor')
 * @param targetClass 
 * @returns 
 */
export function getOwnPropertyNames(targetClass: ClassType): string[] {
  const methodNames = Object.getOwnPropertyNames(targetClass.prototype);

  return methodNames.filter((e) => e !== 'constructor');
}
