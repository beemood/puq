import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const {
  decorator: InternalOperation,
  key: INTERNAL_OPERATION_METADATA_KEY,
} = createMetaDataDecorator('InternalOperation');
