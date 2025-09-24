export class BaseError extends Error {
  public readonly platform = typeof process === 'object' ? 'node' : 'browser';

  constructor(message = 'Unkown', options?: ErrorOptions) {
    super(message, options);
  }
}
