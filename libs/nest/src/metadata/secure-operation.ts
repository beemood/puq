import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const {
  decorator: SecureOperation,
  key: SECURE_OPERATION_METADATA_KEY,
} = createMetadataDecorator<MethodDecorator>('SecureOperation');
