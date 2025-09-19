import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const { decorator: AdminResource, key: ADMIN_RESOURCE_METADATA_KEY } =
  createMetadataDecorator<ClassDecorator, []>('AdminResource');
