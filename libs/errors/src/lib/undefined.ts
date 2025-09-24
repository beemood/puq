import { BaseError } from './base-error.js';

export class UndefinedError extends BaseError {
  constructor(message = '') {
    super(`${UndefinedError.name}: ${message}`);
  }
}
