import { UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller } from '../base/controller.js';
import { ResourceEventInterceptor } from '../interceptors/resource-event.interceptor.js';
import { ResourceTransformInterceptor } from '../interceptors/resource-transform.interceptor.js';
import { ResourceName } from '../metadata/resource-name.js';

/**
 *
 * @returns - {@link ClassDecorator}
 */
export function ResourceController(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    Controller()(...args);
    UseInterceptors(
      ResourceTransformInterceptor,
      ResourceEventInterceptor
    )(...args);
    ResourceName()(...args);

    ApiTags(className)(...args);
    ApiBearerAuth()(...args);
  };
}
