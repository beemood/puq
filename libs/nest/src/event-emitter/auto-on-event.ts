import { Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { extractResourceName } from '@puq/names';
import { toEventName } from '../helpers/to-event-name.js';

/**
 * Wrapper around nestjs OnEvent decorator that automatically create event name from target class and method name.
 *
 * @returns - {@link MethodDecorator}
 */
export function AutoOnEvent(): MethodDecorator {
  return (...args) => {
    const className = (args[0] as any).name;
    const handlerName = args[1].toString();
    const resourceName = extractResourceName(className);
    const eventName = toEventName(resourceName, handlerName);
    Logger.log(`Registered ${eventName}`, 'EventEmitter');
    OnEvent(eventName)(...args);
  };
}
