/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';
import { NotFoundError } from '@puq/errors';
import type { Encoder } from '@puq/types';
import type { Datamodel } from './helpers.js';
import { DatamodelManager, isInputOperation, ModelManager } from './helpers.js';

/**
 * Add hash functionality to columns that marked with "@hash" tag.
 * @param datamodel
 * @returns PrismaClient
 */
export function withEncription(datamodel: Datamodel, encoder: Encoder) {
  const datamodelManager = new DatamodelManager(datamodel);

  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'Encription',
      query: {
        $allModels: {
          async $allOperations({
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

              const fields = modelManager.findSenstiveFields();

              if (fields.length > 0) {
                for (const field of fields) {
                  const fieldValue = data[field.name];
                  if (fieldValue != undefined) {
                    const encodedValue = await encoder.encode(fieldValue);
                    data = {
                      ...data,
                      [field.name]: encodedValue,
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
