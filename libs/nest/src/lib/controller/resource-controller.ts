import { Controller } from '@nestjs/common';

export function ResourceController(): ClassDecorator {
  return (...args) => {
    Controller()(...args);
  };
}
