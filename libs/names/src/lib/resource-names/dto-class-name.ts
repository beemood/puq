import { InvalidResourceNameError } from '@puq/errors';
import {
  endsWithFn,
  keysAsString,
  some,
  startsWithFn,
  values,
} from '@puq/utils';

export const DtoClassNamePrefixes = {
  Create: 'Create',
  Read: 'Read',
  Update: 'Update',
  Delete: 'Delete',
  Select: 'Select',
  Order: 'Order',
  Query: 'Query',
  Where: 'Where',
} as const;

export type DtoClassNamePrefix = keyof typeof DtoClassNamePrefixes;

export const DtoClassNameSuffixes = {
  Dto: 'Dto',
  Schema: 'Schema',
} as const;

export type DtoClassNameSuffix = keyof typeof DtoClassNameSuffixes;

export type DtoClassName =
  `${DtoClassNamePrefix}${string}${DtoClassNameSuffix}`;

export function isDtoClassName<T extends DtoClassName>(
  className: T | string
): className is T {
  return (
    some(values(DtoClassNamePrefixes), startsWithFn(className)) &&
    some(values(DtoClassNameSuffixes), endsWithFn(className))
  );
}

export function isDtoClassNameOrThrow<T extends DtoClassName>(
  className: T | string
): className is T {
  if (isDtoClassName(className)) {
    return true;
  }

  throw new InvalidResourceNameError(
    className,
    '(prefixes)' +
      keysAsString(DtoClassNamePrefixes) +
      ('  (suffixes)' + keysAsString(DtoClassNameSuffixes))
  );
}
