import { names } from '@puq/names';

export function toMetadataKey(name: string) {
  const screamingSnake = names(name).screamingSnake;
  return Symbol(`${screamingSnake}_METADATA_KEY`);
}
