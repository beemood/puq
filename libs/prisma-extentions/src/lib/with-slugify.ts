/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@prisma/client';
import { slugify } from '@puq/names';
import type { Datamodel } from './helpers.js';
import {
  DatamodelManager,
  isCreateManyOperation,
  isUpdateOrCreateOperation,
  ModelManager,
} from './helpers.js';

/**
 * Analize the database schema and integrate slugify feature.
 * @param datamodel
 * @returns
 */
export function withSlugify(datamodel: Datamodel) {
  const dm = new DatamodelManager(datamodel);

  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'Slugify',
      query: {
        $allModels: {
          $allOperations({
            query,
            args,
            model: modelName,
            operation: operationName,
          }: any) {
            if (isUpdateOrCreateOperation(operationName)) {
              const model = dm.findModel(modelName);

              if (!model) {
                throw new Error(`${modelName} is not found!`);
              }

              const mm = new ModelManager(model);
              if (isCreateManyOperation(operationName)) {
                const slugSource = mm.findSlugSource();
                const slugTarget = mm.findSlugTarget();

                if (slugSource && slugTarget) {
                  const sourceValue = args.data[slugSource.name];
                  if (sourceValue) {
                    const slugValue = slugify(sourceValue);
                    args.data.map((e: any) => {
                      e[slugTarget.name] = slugValue;
                      return e;
                    });
                  }
                }
              } else {
                const slugSource = mm.findSlugSource();
                const slugTarget = mm.findSlugTarget();

                if (slugSource && slugTarget) {
                  const sourceValue = args.data[slugSource.name];
                  if (sourceValue) {
                    const slugValue = slugify(sourceValue);
                    args.data[slugTarget.name] = slugValue;
                  }
                }
              }
            }

            return query(args);
          },
        },
      },
    });
  });
}
