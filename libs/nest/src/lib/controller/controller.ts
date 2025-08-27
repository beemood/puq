import { Controller as __Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { names } from '@puq/names';
import { inferResourceName } from '../common/infer-resource-name.js';
import { isPublicResource } from '../common/is-public-resource.js';
import { PublicController } from '../meta/public.js';
import { ResourceName } from '../meta/resource-name.js';
/**
 * Resource controller decorator
 * @returns Class decorators
 */
export function Controller(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    const resouceName = inferResourceName(className);
    const resourceNameVariants = names(resouceName);

    __Controller()(...args);

    ResourceName(resourceNameVariants.screamingSnakeCase)(...args);
    ApiTags(names(className).titleCase)(...args);

    if (isPublicResource(className)) {
      PublicController()(...args);
    } else {
      ApiBearerAuth()(...args);
    }
  };
}
