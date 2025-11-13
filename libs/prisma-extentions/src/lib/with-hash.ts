/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';
import { hash } from '@puq/crypto';
import { NotFoundError } from '@puq/errors';
import type { Datamodel } from './helpers.js';
import { DatamodelManager, isInputOperation, ModelManager } from './helpers.js';

/**
 * Add hash functionality to columns that marked with "@hash" tag.
 * @param datamodel
 * @returns PrismaClient
 */
export function withHash(datamodel: Datamodel) {
  const datamodelManager = new DatamodelManager(datamodel);

  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'Hash',
      query: {
        $allModels: {
          $allOperations({
            args,
            model: modelName,
            operation: operationName,
            query,
          }) {
            if (isInputOperation(operationName)) {
              let data = (args as any).data;
              const model = datamodelManager.findModel(modelName);

              if (!model) throw new NotFoundError(modelName);

              const modelManager = new ModelManager(model);

              const hashFields = modelManager.findHashFields();

              if (hashFields.length > 0) {
                for (const field of hashFields) {
                  const fieldValue = data[field.name];
                  if (fieldValue != undefined) {
                    data = {
                      ...data,
                      [field.name]: hash(fieldValue),
                    };
                  }
                }
              }
              (args as any).data = data;
            }

            return query(args);
          },
        },
      },
    });
  });
}
