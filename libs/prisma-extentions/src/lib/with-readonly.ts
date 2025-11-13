import { Prisma } from '@prisma/client';
import { NotFoundError } from '@puq/errors';
import type { Datamodel } from './helpers.js';
import {
  DatamodelManager,
  isModifyOperation,
  ModelManager,
} from './helpers.js';

/**
 * Add readonly functionality to databse models with "readonly" column.
 * @param datamodel
 * @returns PrismaClient
 */
export function withReadonly(datamodel: Datamodel) {
  const dm = new DatamodelManager(datamodel);
  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'Readonly',
      query: {
        $allModels: {
          $allOperations({
            args,
            model: modelName,
            operation: operationName,
            query,
          }) {
            if (isModifyOperation(operationName)) {
              const foundModel = dm.findModel(modelName);
              if (!foundModel) throw new NotFoundError(modelName);
              const mm = new ModelManager(foundModel);
              const readonlyField = mm.findReadonlyField();

              if (readonlyField) {
                (args as any).where = {
                  ...(args as any).where,
                  readonly: false,
                };
              }
            }

            return query(args);
          },
        },
      },
    });
  });
}
