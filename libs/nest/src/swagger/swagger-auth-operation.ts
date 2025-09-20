import { ApiOperation } from '@nestjs/swagger';
import { names } from '@puq/names';
import type { AuthOperationName } from '../names/auth-operation-name.js';

/**
 * Set swagger doc to the target authentication operation
 *
 * @group Swagger
 * @param operationName
 * @returns
 */
export function SwaggerAutoOperation(
  operationName: AuthOperationName
): MethodDecorator {
  return (...args) => {
    const summary = names(operationName).sentence;
    ApiOperation({ summary })(...args);
  };
}
