import type { Type } from '@nestjs/common';

export function getOwnPropertyNames(targetClass: Type): string[] {
  const methodNames = Object.getOwnPropertyNames(targetClass.prototype);

  return methodNames.filter((e) => e !== 'constructor');
}
