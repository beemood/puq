import { createMetaDataDecorator } from './create-metadata-decorator.js';

export const { decorator: AdminResource, key: ADMIN_RESOURCE_METADATA_KEY } =
  createMetaDataDecorator('AdminResource');
