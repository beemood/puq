export const CrudOperations = Object.freeze({
  WRITE: 'WRITE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
});

export type CrudOperations = typeof CrudOperations;

export type OperationNameType = CrudOperations[keyof CrudOperations];

export const AuthOperations = Object.freeze({
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  RESET_PASSWORD: 'RESET_PASSWORD',
});
