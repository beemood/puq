import { InvalidOperationNameError } from '@puq/errors';
import { equalsFn, keysAsString, some, values } from '@puq/utils';

export const AuthOperationNames = {
  forgotPassword: 'forgotPassword',
  loginWithCredentials: 'loginWithCredentials',
  loginWithOtp: 'loginWithOtp',
  logoutFromAllSessions: 'logoutFromAllSessions',
  logoutFromCurrentSession: 'logoutFromCurrentSession',
  resetPassword: 'resetPassword',
  subscribe: 'subscribe',
} as const;

export type AuthOperationName = keyof typeof AuthOperationNames;

export function isAuthOperationName<T extends AuthOperationName>(
  operationName: T | string
): operationName is T {
  return some(values(AuthOperationNames), equalsFn(operationName));
}

export function isAuthOperationNameOrThrow<T extends AuthOperationName>(
  operationName: T | string
): operationName is T {
  if (isAuthOperationName(operationName)) {
    return true;
  }
  throw new InvalidOperationNameError(
    operationName,
    keysAsString(AuthOperationNames)
  );
}
