import { ApiOperation } from '@nestjs/swagger';
import type { AuthOperationName } from '@puq/names';
import { names } from '@puq/names';

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
