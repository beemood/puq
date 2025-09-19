import type { Type } from '@nestjs/common';

export function getOwnPropertyDescriptor(
  targetClass: Type,
  propertykey: string
) {
  return Object.getOwnPropertyDescriptor(targetClass.prototype, propertykey);
}
