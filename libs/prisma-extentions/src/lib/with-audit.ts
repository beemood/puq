import { Prisma } from '@prisma/client';
import type { AuditLog } from '@puq/types';
import type { Datamodel } from './helpers.js';
import { DatamodelManager } from './helpers.js';
/**
 * Add hash functionality to columns that marked with "@hash" tag.
 * @param datamodel
 * @returns PrismaClient
 */
export function withAudit(datamodel: Datamodel) {
  const datamodelManager = new DatamodelManager(datamodel);
  const logModel = datamodelManager.findLogModel();

  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'Audit',
      query: {
        $allModels: {
          async $allOperations({ query, args, model, operation }) {
            const res = await query(args);

            if (logModel && model !== logModel.name) {
              const data = (args as any)?.data;

              const logRepo = (client as any)[logModel.name];
              const operatorId = data?.updatedById ?? null;

              const operatorType = operatorId != undefined ? 'USER' : 'SYSTEM';

              if (logRepo) {
                try {
                  await logRepo.create({
                    data: {
                      recordName: model,
                      operatorId: operatorId,
                      operatorType: operatorType,
                      recordId: (args as any).where.id,
                      difference: data,
                      operationName: operation,
                      readonly: true,
                    } as Partial<AuditLog>,
                  });
                } catch (err) {
                  console.error(err);
                }
              }
            }

            return res;
          },
        },
      },
    });
  });
}
