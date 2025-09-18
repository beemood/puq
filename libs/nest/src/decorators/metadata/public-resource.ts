import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const { decorator: PublicResource, key: PUBLIC_RESOURCE_METADATA_KEY } =
  createMetadataDecorator<ClassDecorator>('PublicResource');
