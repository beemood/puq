import { SetMetadata } from '@nestjs/common';

export const ADMIN_RESOURCE_METADATA_TOKEN = Symbol(
  'ADMIN_RESOURCE_METADATA_TOKEN'
);

/**
 * This decorator marks a class as an admin-only resource,
 * meaning it can only be accessed by users with administrative privileges.
 *
 * @group Metadata
 * @returns - {@link ClassDecorator}
 */
export function AdminResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(ADMIN_RESOURCE_METADATA_TOKEN, true)(...args);
  };
}
