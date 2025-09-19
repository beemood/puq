import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const {
  decorator: PublicOperation,
  key: PUBLIC_OPERATION_METADATA_KEY,
} = createMetadataDecorator<MethodDecorator>('PublicOperation');
