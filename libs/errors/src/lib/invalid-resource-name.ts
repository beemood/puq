import { BaseError } from './base-error.js';

export class InvalidResourceNameError extends BaseError {
  constructor(resourceName: string, expression: string) {
    super(
      `${InvalidResourceNameError.name}: ${resourceName} must match ${expression}!`
    );
  }
}
