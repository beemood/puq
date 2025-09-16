import { SetMetadata } from '@nestjs/common';

export const PUBLIC_RESOURCE_METADATA_TOKEN = Symbol(
  'PUBLIC_RESOURCE_METADATA_TOKEN'
);

export function PublicResource(): ClassDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_RESOURCE_METADATA_TOKEN, true)(...args);
  };
}
