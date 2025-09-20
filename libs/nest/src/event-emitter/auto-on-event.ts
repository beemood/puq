import { OnEvent } from '@nestjs/event-emitter';
import { toEventName } from '../helpers/to-event-name.js';
import { extractResourceName } from '../names/extract-resource-name.js';

/**
 * Wrapper around nestjs OnEvent decorator that automatically create event name from target class and method name.
 *
 * @returns - {@link MethodDecorator}
 */
export function AutoOnEvent(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const handlerName = args[1].toString();
    const resourceName = extractResourceName(className);
    const eventName = toEventName(resourceName, handlerName);

    OnEvent(eventName)(...args);
  };
}
