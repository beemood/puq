import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const {
  decorator: PublicOperation,
  key: PUBLIC_OPERATION_METADATA_KEY,
} = createMetaDataDecorator('PublicOperation');
