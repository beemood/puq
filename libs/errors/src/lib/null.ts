import { BaseError } from './base-error.js';

export class NullError extends BaseError {
  constructor(message = '') {
    super(`${NullError.name}: ${message}`);
  }
}
