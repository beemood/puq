export class InvalidResourceNameError extends Error {
  constructor(name: string) {
    super(`The resource name, ${name}, is invalid`);
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
  EventEmiter: 'EventEmiter',
  EventListener: 'EventListener',
  Module: 'Module',
  Guard: 'Guard',
  Error: 'Error',
  Pipe: 'Pipe',
  Transformer: 'Transformer',
  Middleware: 'Middleware',
};

export const resouceOperationClassNameExp = () =>
  /^[A-Z]{1}.+[a-z]{1,}(Controller|Service|Interceptor|ExceptionFilter|EventEmiter|EventListener|Module|Guard|Error|Pipe|Transformer|Middleware|Dto)$/;

export function isResouceOperationClassName(name: string) {
  return resouceOperationClassNameExp().test(name);
}

export function isResouceDataClassName(name: string) {
  return resourceDataClassNameExp().test(name);
}
export type ClassNameSuffix = keyof typeof classNameSuffixes;

export const crudOperationNames = {
  findOne: 'findOne',
  findOneById: 'findOneById',
  findMany: 'findMany',
  findManyBy: 'findManyBy',
  saveOne: 'saveOne',
  saveMany: 'saveMany',
  updateOne: 'updateOne',
  updateOneById: 'updateOneById',
  updateMany: 'updateMany',
  updateManyBy: 'updateManyBy',
  deleteOne: 'deleteOne',
  deleteOneById: 'deleteOneById',
  deleteMany: 'deleteMany',
  deleteManyBy: 'deleteManyBy',
};

export const crudOperationNameExp = () =>
  /^(findOne|findOneById|findMany|findManyBy|saveOne|saveMany|updateOne|updateOneById|updateMany|updateManyBy|deleteOne|deleteOneById|deleteMany|deleteManyBy)$/;

export function isCrudOperationName(name: string) {
  return crudOperationNameExp().test(name);
}

export type CrudOperationName = keyof typeof crudOperationNames;
