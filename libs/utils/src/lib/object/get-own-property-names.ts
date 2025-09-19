import type { ClassType } from '@puq/types';

export function getOwnPropertyNames(targetClass: ClassType): string[] {
  const methodNames = Object.getOwnPropertyNames(targetClass.prototype);

  return methodNames.filter((e) => e !== 'constructor');
}
