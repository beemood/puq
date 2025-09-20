import { NotImplementedException as NIE } from '@nestjs/common';
import type { ResourceOperationName } from '../names/resource-operation-name.js';
import type { EventPayload } from '../types/event-payload.js';

/**
 * Whenever you need to listen to a resource operation event such as `Product.saveOne`, extends this class, 
 * and override the corresponding method such as for `Product.saveOne`, override the `saveOne` method.
 * 
 */
export abstract class AbstractEventListener
  implements Record<ResourceOperationName, (payload: EventPayload) => void>
{
  findOne(payload: EventPayload): void {
    throw new NIE(`findOne is not implemented ${payload}`);
  }
  findOneBy(payload: EventPayload): void {
    throw new NIE(`findOneBy is not implemented ${payload}`);
  }
  findOneById(payload: EventPayload): void {
    throw new NIE(`findOneById is not implemented ${payload}`);
  }
  findMany(payload: EventPayload): void {
    throw new NIE(`findMany is not implemented ${payload}`);
  }
  findManyBy(payload: EventPayload): void {
    throw new NIE(`findManyBy is not implemented ${payload}`);
  }
  saveOne(payload: EventPayload): void {
    throw new NIE(`saveOne is not implemented ${payload}`);
  }
  saveMany(payload: EventPayload): void {
    throw new NIE(`saveMany is not implemented ${payload}`);
  }
  updateOne(payload: EventPayload): void {
    throw new NIE(`updateOne is not implemented ${payload}`);
  }
  updateOneBy(payload: EventPayload): void {
    throw new NIE(`updateOneBy is not implemented ${payload}`);
  }
  updateOneById(payload: EventPayload): void {
    throw new NIE(`updateOneById is not implemented ${payload}`);
  }
  updateMany(payload: EventPayload): void {
    throw new NIE(`updateMany is not implemented ${payload}`);
  }
  updateManyBy(payload: EventPayload): void {
    throw new NIE(`updateManyBy is not implemented ${payload}`);
  }
  deleteOne(payload: EventPayload): void {
    throw new NIE(`deleteOne is not implemented ${payload}`);
  }
  deleteOneBy(payload: EventPayload): void {
    throw new NIE(`deleteOneBy is not implemented ${payload}`);
  }
  deleteOneById(payload: EventPayload): void {
    throw new NIE(`deleteOneById is not implemented ${payload}`);
  }
  deleteMany(payload: EventPayload): void {
    throw new NIE(`deleteMany is not implemented ${payload}`);
  }
  deleteManyBy(payload: EventPayload): void {
    throw new NIE(`deleteManyBy is not implemented ${payload}`);
  }
}
