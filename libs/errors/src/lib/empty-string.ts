import { BaseError } from './base-error.js';

export class EmptyStringError extends BaseError {
  constructor(message = '') {
    super(`${EmptyStringError.name}: ${message}`);
  }
}
