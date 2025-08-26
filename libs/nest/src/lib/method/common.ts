import { ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { OperationName } from '../meta/operation-name.js';
import { PublicMethod } from '../meta/public.js';
import { inferOperationName } from './../common/infer-operation-name.js';
import { inferOperationSummary } from './../common/infer-operation-summary.js';
import { isPublicResource } from './../common/is-public-resource.js';
import { isSecureResource } from './../common/is-secure-resource.js';

export function __getFields(...args: any[]) {
  const fields = (args[0].constructor as any)['fields'];

  if (!fields)
    throw new Error(
      'static property fields is not defined in controller class!'
    );

  return fields;
}

export function CommonMethodDecorator(): MethodDecorator {
  return (...args) => {
    const fields = __getFields(...args);

    const methodName = args[1].toString();

    if (isPublicResource(methodName)) {
      PublicMethod()(...args);
    } else if (isSecureResource(methodName)) {
      ApiBearerAuth()(...args);
    }

    OperationName(inferOperationName(methodName))(...args);

    ApiQuery({
      name: 'select',
      type: 'string',
      isArray: true,
      enum: fields,
      required: false,
    })(...args);

    ApiQuery({
      name: 'omit',
      type: 'array',
      items: {
        type: 'string',
        enum: fields,
      },
      required: false,
      nullable: true,
    })(...args);

    ApiQuery({
      name: 'include',
      type: 'array',
      items: { type: 'string', nullable: true },
      required: false,
      nullable: true,
    })(...args);

    ApiOperation({ summary: inferOperationSummary(methodName) })(...args);
  };
}
