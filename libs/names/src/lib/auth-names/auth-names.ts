export class InvalidAuthOperationNameError extends Error {
  constructor(name: string) {
    super(`The auth operation name, ${name}, is invalid`);
  }
}

export const authOperationNames = {
  forgotPassword: 'forgotPassword',
  loginWithCredentials: 'loginWithCredentials',
  loginWithOtp: 'loginWithOtp',
  logoutFromAllSessions: 'logoutFromAllSessions',
  logoutFromCurrentSession: 'logoutFromCurrentSession',
  resetPassword: 'resetPassword',
  subscribe: 'subscribe',
};

export type AuthOperationName = keyof typeof authOperationNames;


export const authMethodNameExp = () =>
  /^(forgotPassword|loginWithCredentials|loginWithOtp|logoutFromAllSessions|logoutFromCurrentSession|resetPassword|subscribe)[A-Z]{1,}.+Dto$/;

export function isAuthOperationName(name: string) {
  return authMethodNameExp().test(name);
}
