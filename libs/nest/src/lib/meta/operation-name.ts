import { SetMetadata } from '@nestjs/common';

export const OPERATION_NAME_METADATA_KEY = Symbol(
  'OPERATION_NAME_METADATA_KEY'
);

export function OperationName(name: string): MethodDecorator {
  return (...args) => {
    SetMetadata(OPERATION_NAME_METADATA_KEY, name)(...args);
  };
}
