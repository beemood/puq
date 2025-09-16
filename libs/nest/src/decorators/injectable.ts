import { Injectable as __Injectable } from '@nestjs/common';
import {
    InvalidResourceNameError,
    isResouceOperationClassName,
} from '@puq/names';

export function Injectable(): ClassDecorator {
  return (...args) => {
    if (!isResouceOperationClassName(args[0].name)) {
      throw new InvalidResourceNameError(args[0].name);
    }
    __Injectable()(...args);
  };
}
