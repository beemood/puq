import { equalsFn, some, values } from '@puq/utils';

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
