import { Injectable } from './injectable.js';

export function EventListener(): ClassDecorator {
  return (...args) => {
    Injectable()(...args);
  };
}
