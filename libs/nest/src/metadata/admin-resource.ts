import { SetMetadata } from '@nestjs/common';

export const ADMIN_RESOURCE_METADATA_TOKEN = Symbol(
  'ADMIN_RESOURCE_METADATA_TOKEN'
);

export function AdminResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(ADMIN_RESOURCE_METADATA_TOKEN, true)(...args);
  };
}
