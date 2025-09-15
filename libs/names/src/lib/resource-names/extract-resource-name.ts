import { normalizeName } from '../names/normalize-name.js';
import {
  classNamePrefixes,
  classNameSuffixes,
  InvalidResourceNameError,
  isResouceDataClassName,
  isResouceOperationClassName,
} from './resource-names.js';

export function extractResourceName(className: string) {
  if (
    !(
      isResouceOperationClassName(className) ||
      isResouceDataClassName(className)
    )
  ) {
    throw new InvalidResourceNameError(className);
  }
  {
    const values = Object.values(classNamePrefixes);
    for (const v of values) {
      className = className.replace(v, '');
    }
  }
  {
    const values = Object.values(classNameSuffixes);
    for (const v of values) {
      className = className.replace(v, '');
    }
  }

  return normalizeName(className);
}
