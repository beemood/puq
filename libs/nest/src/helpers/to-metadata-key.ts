import { names } from '@puq/names';

export function toMetadataKey(name: string) {
  return Symbol(`${names(name).screamingSnake}_METADATA_KEY`);
}
