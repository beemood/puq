import { BaseError } from './base-error.js';

export class BadOperationError extends BaseError {
  constructor(message = 'Unkown') {
    super(`${message}: Bad Operation`);
  }
}
