import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';

export const { decorator: AdminOperation, key: ADMIN_OPERATION_METADATA_KEY } =
  createMetadataDecorator<MethodDecorator, []>('AdminOperation');
