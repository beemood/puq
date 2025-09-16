import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const { decorator: AdminOperation, key: ADMIN_OPERATION_METADATA_KEY } =
  createMetaDataDecorator('AdminOperation');
