import { BaseError } from './base-error.js';

export class NotImplementedError extends BaseError {
  constructor(methodName = 'Method') {
    super(`${methodName}: Not Implemented`);
  }
}
