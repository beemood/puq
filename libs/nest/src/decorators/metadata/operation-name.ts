import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

const __operationName = createMetadataDecorator<MethodDecorator, [string]>(
  'OperationName'
);

export function OperationName(): MethodDecorator {
  return (...args) => {
    const operationName = args[1].toString();
    __operationName.decorator(operationName)(...args);
  };
}

export const { key: OPERATION_NAME_METADATA_KEY } = __operationName;
