import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../meta/operation-name.js';
import { PublicMethod } from '../meta/public.js';
import { inferOperationName } from './../common/infer-operation-name.js';
import { inferOperationSummary } from './../common/infer-operation-summary.js';
import { isPublicResource } from './../common/is-public-resource.js';
import { isSecureResource } from './../common/is-secure-resource.js';

export function CommonMethodDecorator(): MethodDecorator {
  return (...args) => {
    const methodName = args[1].toString();

    if (isPublicResource(methodName)) {
      PublicMethod()(...args);
    } else if (isSecureResource(methodName)) {
      ApiBearerAuth()(...args);
    }

    OperationName(inferOperationName(methodName))(...args);

    ApiOperation({ summary: inferOperationSummary(methodName) })(...args);
  };
}
