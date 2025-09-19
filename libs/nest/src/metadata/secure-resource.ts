import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const { decorator: SecureResource, key: SECURE_RESOURCE_METADATA_KEY } =
  createMetadataDecorator<ClassDecorator>('SecureResource');
