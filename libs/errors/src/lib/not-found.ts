import { BaseError } from './base-error.js';

export class NotFoundError extends BaseError {
  constructor(name = 'Unkown') {
    super(`${name}: Not Found`);
  }
}
