import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const {
  decorator: InternalOperation,
  key: INTERNAL_OPERATION_METADATA_KEY,
} = createMetadataDecorator<MethodDecorator, []>('InternalOperation');
