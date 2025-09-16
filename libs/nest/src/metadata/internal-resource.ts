import { SetMetadata } from '@nestjs/common';

export const INTERNAL_RESOURCE_METADATA_TOKEN = Symbol(
  'INTERNAL_RESOURCE_METADATA_TOKEN'
);

/**
 * Only allow the request from the same origin
 * @returns
 */
export function InternalResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(INTERNAL_RESOURCE_METADATA_TOKEN, true)(...args);
  };
}
