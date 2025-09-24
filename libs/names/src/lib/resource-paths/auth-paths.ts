import type { StringRecord } from '@puq/types';
import { mapObject } from '@puq/utils';
import { names } from '../names/names.js';
import { AuthOperationNames } from '../resource-names/auth-operation-name.js';

export const AuthPaths = mapObject(
  AuthOperationNames,
  (value) => `auth/${names(value).kebab}`
) as StringRecord<typeof AuthOperationNames>;
