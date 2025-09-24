import { BaseError } from './base-error.js';

export class EmptyArrayError extends BaseError {
  constructor(message = '') {
    super(`${EmptyArrayError.name}: ${message}`);
  }
}
