import { names } from '@puq/names';

export function createProviderKey(name: string): symbol {
  return Symbol(`${names(name).screamingSnake}_PROVIDER_KEY`);
}
