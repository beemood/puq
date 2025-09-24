import { BaseError } from './base-error.js';

export class EmptyObjectError extends BaseError {
  constructor(message = '') {
    super(`${EmptyObjectError.name}: ${message}`);
  }
}
