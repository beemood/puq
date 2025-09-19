import { endsWithFn, some, startsWithFn, values } from '@puq/utils';

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

export function isDtoClassName(className: string) {
  return (
    some(values(DtoClassNamePrefixes), startsWithFn(className)) &&
    some(values(DtoClassNameSuffixes), endsWithFn(className))
  );
}
