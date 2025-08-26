import { names } from '@puq/names';

export function inferOperationSummary(methoName: string) {
  return names(methoName).sentenceCase;
}
