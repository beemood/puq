import { names } from '@puq/names';
import { mapObject } from '@puq/utils';
import { AuthOperationNames } from './auth-operation-name.js';

export const AuthPaths = mapObject(
  AuthOperationNames,
  (value) => `auth/${names(value).kebab}`
) 
