import { createMetadataDecorator } from '../helpers/create-metadata-decorator.js';
import { extractResourceName } from '../names/extract-resource-name.js';

const __resourceName = createMetadataDecorator<ClassDecorator, [string]>(
  'ResourceName'
);

export function ResourceName(): ClassDecorator {
  return (...args) => {
    const className = args[0].name;
    const resouceName = extractResourceName(className);
    __resourceName.decorator(resouceName)(...args);
  };
}

export const { key: RESOURCE_NAME_METADATA_KEY } = __resourceName;
