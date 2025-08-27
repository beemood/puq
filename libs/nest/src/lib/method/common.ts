import { ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { OperationName } from '../meta/operation-name.js';
import { PublicMethod } from '../meta/public.js';
import { inferOperationName } from './../common/infer-operation-name.js';
import { inferOperationSummary } from './../common/infer-operation-summary.js';
import { isPublicResource } from './../common/is-public-resource.js';
import { isSecureResource } from './../common/is-secure-resource.js';

export function __getFields(...args: any[]): string[] {
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
      type: 'object',
      schema: {
        type: 'object',
        properties: {
          select: {
            properties: {
              ...fields.reduce(
                (p, c) => ({
                  ...p,
                  [c]: { type: 'boolean', required: false, nullable: true },
                }),
                {}
              ),
            },
          },
        },
      },
      required: false,
    })(...args);

    ApiQuery({
      name: 'omit',
      type: 'object',
      schema: {
        type: 'object',
        properties: {
          omit: {
            properties: {
              ...fields.reduce(
                (p, c) => ({
                  ...p,
                  [c]: { type: 'boolean', required: false, nullable: true },
                }),
                {}
              ),
            },
          },
        },
      },
      required: false,
    })(...args);

    ApiQuery({
      name: 'include',
      schema: {
        type: 'object',
        properties: {
          include: {
            properties: {
              ...fields.reduce(
                (p, c) => ({
                  ...p,
                  [c]: { type: 'boolean', required: false, nullable: true },
                }),
                {}
              ),
            },
          },
        },
      },
      required: false,
      nullable: true,
    })(...args);

    ApiOperation({ summary: inferOperationSummary(methodName) })(...args);
  };
}
