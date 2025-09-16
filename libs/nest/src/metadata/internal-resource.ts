import { SetMetadata } from '@nestjs/common';

export const INTERNAL_RESOURCE_METADATA_TOKEN = Symbol(
  'INTERNAL_RESOURCE_METADATA_TOKEN'
);


/**
 * This decorator marks a class as an internal resource,
 * meaning it can only be accessed by users within the same network.
 *
 * @group Metadata
 * @returns - {@link ClassDecorator}
 */
export function InternalResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(INTERNAL_RESOURCE_METADATA_TOKEN, true)(...args);
  };
}
