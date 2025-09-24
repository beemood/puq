import { UseFilters, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PrismaExceptionFilter } from 'src/filters/prisma-exception-filter.js';
import { ZodExceptionFilter } from 'src/filters/zod-exception.filter.js';
import { Controller } from '../base/controller.js';
import { ResourceEventInterceptor } from '../interceptors/resource-event.interceptor.js';
import { ResourceTransformInterceptor } from '../interceptors/resource-transform.interceptor.js';
import { ResourceName } from '../metadata/resource-name.js';

/**
 * Nestjs controller decorator that combines common resouce interceptors, {@link ResourceName} metadata, and swagger docs and security.
 *
 * @returns - {@link ClassDecorator}
 */
export function ResourceController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    Controller()(...args);
    UseFilters(PrismaExceptionFilter, ZodExceptionFilter)(...args);
    UseInterceptors(
      ResourceTransformInterceptor,
      ResourceEventInterceptor
    )(...args);
    ResourceName()(...args);
    ApiTags(className)(...args);
    ApiBearerAuth()(...args);
  };
}
