import type { ClassType } from '@puq/types';
import { getOwnPropertyDescriptor, getOwnPropertyNames } from '@puq/utils';
import { AutoOnEvent } from './auto-on-event.js';
import { EventListener } from './event-listener.js';

/**
 * Automatically wires events with corresponding methods so you do not have to apply OnEvent decorator for each method
 *
 * @returns - {@link ClassDecorator}
 */
export function AutoEventListener(): ClassDecorator {
  return (...args) => {
    const targetClass = args[0] as unknown as ClassType;

    EventListener()(...args);

    const propertyKeys = getOwnPropertyNames(targetClass);

    for (const propertyKey of propertyKeys) {
      const descriptor = getOwnPropertyDescriptor(targetClass, propertyKey);
      AutoOnEvent()(targetClass, propertyKey, descriptor!);
    }
  };
}
