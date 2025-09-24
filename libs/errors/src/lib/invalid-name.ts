import { BaseError } from './base-error.js';

export class InvalidNameError extends BaseError {
  constructor(name: string, expression: string) {
    super(`${InvalidNameError.name}: ${name} must match ${expression}!`);
  }
}
