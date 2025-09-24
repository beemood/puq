import { BaseError } from './base-error.js';

export class InvalidOperationNameError extends BaseError {
  constructor(operationName: string, expression: string) {
    super(
      `${InvalidOperationNameError.name}: ${operationName} must match ${expression}!`
    );
  }
}
