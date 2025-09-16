import { ApiOperation } from '@nestjs/swagger';
import { names, type AuthOperationName } from '@puq/names';

export function SwaggerAutoOperation(
  operationName: AuthOperationName
): MethodDecorator {
  return (...args) => {
    const summary = names(operationName).sentence;
    ApiOperation({ summary })(...args);
  };
}
