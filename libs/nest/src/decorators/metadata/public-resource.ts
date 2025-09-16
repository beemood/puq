import { SetMetadata } from '@nestjs/common';

export const PUBLIC_RESOURCE_METADATA_TOKEN = Symbol(
  'PUBLIC_RESOURCE_METADATA_TOKEN'
);

/**
 * This decorator marks a class as a public resource,
 * meaning it can be accessed by users without any privileges.
 *
 * @returns - {@link ClassDecorator}
 */
export function PublicResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_RESOURCE_METADATA_TOKEN, true)(...args);
  };
}
