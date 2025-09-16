import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const { decorator: PublicResource, key: PUBLIC_RESOURCE_METADATA_KEY } =
  createMetaDataDecorator('PublicResource');
