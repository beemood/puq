import { SetMetadata } from '@nestjs/common';

export const RESOURCE_NAME_METADATA_KEY = Symbol('RESOURCE_NAME_METADATA_KEY');

export function ResourceName(name: string): ClassDecorator {
  return (...args) => {
    SetMetadata(RESOURCE_NAME_METADATA_KEY, name)(...args);
  };
}
