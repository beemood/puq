import { names } from '@puq/names';

export function createMetadataKey(name: string) {
  return Symbol(`${names(name).screamingSnake}_METADATA_KEY`);
}
