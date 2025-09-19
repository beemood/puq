export const ResourceOperationNames = {
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
} as const;

export type ResourceOperationName = keyof typeof ResourceOperationNames;

export function isResourceOperationName<T extends ResourceOperationName>(
  operationName: T | string
): operationName is T {
  return !!ResourceOperationNames[operationName as T];
}
