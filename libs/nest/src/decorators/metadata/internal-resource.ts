import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const {
  decorator: InternalResource,
  key: INTERNAL_RESOURCE_METADATA_KEY,
} = createMetadataDecorator<ClassDecorator, []>('InternalResource');
