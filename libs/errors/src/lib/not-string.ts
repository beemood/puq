import { BaseError } from './base-error.js';

export class NotStringError extends BaseError {
  constructor(value: unknown) {
    super(`${NotStringError.name}: ${value}`);
  }
}
