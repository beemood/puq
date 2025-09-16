import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const {
  decorator: InternalResource,
  key: INTERNAL_RESOURCE_METADATA_KEY,
} = createMetaDataDecorator('InternalResource');
