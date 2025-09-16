import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const { decorator: SecureResource, key: SECURE_RESOURCE_METADATA_KEY } =
  createMetaDataDecorator('SecureResource');
