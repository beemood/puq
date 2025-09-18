export class InvalidResourceNameError extends Error {
  constructor(name: string) {
    super(`The resource name, ${name}, is invalid`);
  }
}

export class InvalidResourceOperationNameError extends Error {
  constructor(name: string) {
    super(`The operation name, ${name}, is invalid`);
  }
}

export const classNamePrefixes = {
  Create: 'Create',
  Read: 'Read',
  Update: 'Update',
  Delete: 'Delete',
  Select: 'Select',
  Order: 'Order',
  Query: 'Query',
  Where: 'Where',
};

export const resourceDataClassNameExp = () =>
  /^(Create|Read|Update|Delete|Select|Order|Query|Where)[A-Z]{1,}.+Dto$/;

export type ClassNamePrefix = keyof typeof classNamePrefixes;

export const classNameSuffixes = {
  Dto: 'Dto',
  Controller: 'Controller',
  Service: 'Service',
  Interceptor: 'Interceptor',
  ExceptionFilter: 'ExceptionFilter',
  EventEmitter: 'EventEmitter',
  EventListener: 'EventListener',
  Module: 'Module',
  Guard: 'Guard',
  Error: 'Error',
  Pipe: 'Pipe',
  Transformer: 'Transformer',
  Middleware: 'Middleware',
};

export const resouceOperationClassNameExp = () =>
  /^[A-Z]{1}.+[a-z]{1,}(Controller|Service|ExceptionFilter|EventEmitter|EventListener|Interceptor|Module|Guard|Error|Pipe|Transformer|Middleware|Dto)$/;

export function isResouceOperationClassName(name: string) {
  return resouceOperationClassNameExp().test(name);
}

export function isResouceDataClassName(name: string) {
  return resourceDataClassNameExp().test(name);
}
export type ClassNameSuffix = keyof typeof classNameSuffixes;

export const crudOperationNames = {
  findOne: 'findOne',
  findOneBy: 'findOneBy',
  findOneById: 'findOneById',
  findMany: 'findMany',
  findManyBy: 'findManyBy',
  saveOne: 'saveOne',
  saveMany: 'saveMany',
  updateOne: 'updateOne',
  updateOneBy: 'updateOneBy',
  updateOneById: 'updateOneById',
  updateMany: 'updateMany',
  updateManyBy: 'updateManyBy',
  deleteOne: 'deleteOne',
  deleteOneBy: 'deleteOneBy',
  deleteOneById: 'deleteOneById',
  deleteMany: 'deleteMany',
  deleteManyBy: 'deleteManyBy',
};

export const crudOperationNameExp = () =>
  /^(findOne|findOneBy|findOneById|findMany|findManyBy|saveOne|saveMany|updateOne|updateOneBy|updateOneById|updateMany|updateManyBy|deleteOne|deleteOneBy|deleteOneById|deleteMany|deleteManyBy|)$/;

export function isCrudOperationName(name: string) {
  return crudOperationNameExp().test(name);
}

export type CrudOperationName = keyof typeof crudOperationNames;
