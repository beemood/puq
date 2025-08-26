import { AuthOperations, CrudOperations } from '../enums/operation-names.js';

export function inferOperationName(methodName: string) {
  const READ_EXP = new RegExp(/find|read/i);
  const WRITE_EXP = new RegExp(/create|save|write/i);
  const DELETE_EXP = new RegExp(/delete|drop/i);
  const UPDATE_EXP = new RegExp(/update|change|reset/i);
  const LOGIN_EXP = new RegExp(/login/i);
  const LOGOUT_EXP = new RegExp(/logout/i);
  const SIGNUP_EXP = new RegExp(/signup/i);
  const FORGOT_EXP = new RegExp(/forgotPassword/i);

  if (READ_EXP.test(methodName)) {
    return CrudOperations.READ;
  } else if (WRITE_EXP.test(methodName)) {
    return CrudOperations.WRITE;
  } else if (DELETE_EXP.test(methodName)) {
    return CrudOperations.DELETE;
  } else if (UPDATE_EXP.test(methodName)) {
    return CrudOperations.DELETE;
  } else if (LOGIN_EXP.test(methodName)) {
    return AuthOperations.LOGIN;
  } else if (LOGOUT_EXP.test(methodName)) {
    return AuthOperations.LOGOUT;
  } else if (SIGNUP_EXP.test(methodName)) {
    return AuthOperations.SIGNUP;
  } else if (FORGOT_EXP.test(methodName)) {
    return AuthOperations.FORGOT_PASSWORD;
  }

  throw new Error(
    `Method name, ${methodName}, does not infer any operation name!`
  );
}
