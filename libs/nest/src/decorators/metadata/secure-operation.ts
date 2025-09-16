import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const {
  decorator: SecureOperation,
  key: SECURE_OPERATION_METADATA_KEY,
} = createMetaDataDecorator('SecureOperation');
