import { SetMetadata } from '@nestjs/common';

export const PUBLIC_RESOURCE_METADATA_KEY = Symbol(
  'PUBLIC_RESOURCE_METADATA_KEY'
);

export function PublicController(): ClassDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_RESOURCE_METADATA_KEY, true)(...args);
  };
}

export function PublicMethod(): MethodDecorator {
  return (...args) => {
    SetMetadata(PUBLIC_RESOURCE_METADATA_KEY, true)(...args);
  };
}
