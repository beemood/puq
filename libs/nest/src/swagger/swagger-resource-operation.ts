import { ApiOperation as __ApiOperation } from '@nestjs/swagger';
import type { DataModelName } from '../names/data-model-name.js';
import type { ResourceOperationName } from '../names/resource-operation-name.js';
import { resourceOperationSummary } from './resource-operation-summary.js';

/**
 * Set resource operation summary metadata which is created by {@link resourceOperationSummary}
 *
 * @group Swagger
 * @param resourceName - {@link DataModelName}
 * @param operationName - {@link ResourceOperationName}
 * @returns - {@link MethodDecorator}
 */
export function SwaggerResourceOperation(
  resourceName: DataModelName,
  operationName: ResourceOperationName
): MethodDecorator {
  return (...args) => {
    const summary = resourceOperationSummary(resourceName, operationName);
    __ApiOperation({ summary })(...args);
  };
}
