export class InvalidNameError extends Error {
  constructor(name: string, expected?: string) {
    if (expected) {
      super(`The name must match ${expected}, but found ${name}`);
    } else {
      super(`The name, ${name}, is invalid!`);
    }
  }
}
