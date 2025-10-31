/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';
import type { Datamodel } from './helpers.js';
import { DatamodelManager, isFindOperation, ModelManager } from './helpers.js';

/**
 * Analize database models and integrate soft-delete feature to the compatible database models
 * @param datamodel
 * @returns
 */
export function withSoftDelete(datamodel: Datamodel) {
  const dm = new DatamodelManager(datamodel);
  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'SoftDelete',
      query: {
        $allModels: {
          async $allOperations({
            query,
            args,
            model: modelName,
            operation: operationName,
          }) {
            if (isFindOperation(operationName)) {
              const model = dm.findModel(modelName);
              if (!model) throw new Error(`${modelName} is not found!`);
              const mm = new ModelManager(model);

              const field = mm.findSoftDeleteField();

              if (field) {
                const softDeleteField = field.name;
                (args as any).where = {
                  ...(args as any).where,
                  [softDeleteField]: null,
                };
              }
            }
            return query(args);
          },
          async delete({ query, args, model: modelName }) {
            const model = dm.findModel(modelName);

            if (!model) throw new Error(`${modelName} is not found`);

            const mm = new ModelManager(model);

            const softField = mm.findSoftDeleteField();

            if (softField) {
              const data = { [softField.name]: new Date() };
              return await (client as any)[modelName].update({ ...args, data });
            }
            return query(args);
          },
          async deleteMany({ query, args, model: modelName }) {
            const model = dm.findModel(modelName);
            if (!model) throw new Error(`${modelName} is not found`);
            const mm = new ModelManager(model);

            const softField = mm.findSoftDeleteField();
            if (softField) {
              const data = { [softField.name]: new Date() };
              return await (client as any)[modelName].updateMany({
                ...args,
                data,
              });
            }
            return query(args);
          },
        },
      },
    });
  });
}
