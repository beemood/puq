import { authOperationNames, names } from '@puq/names';
import { mapObject } from '@puq/utils';

export const authPaths = mapObject(
  authOperationNames,
  (value) => `auth/${names(value).kebab}`
);
