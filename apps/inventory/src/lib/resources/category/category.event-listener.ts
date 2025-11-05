import type { EventPayload } from '@puq/nest';
import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class CategoryEventListener extends AbstractEventListener {
  override saveOne(payload: EventPayload): void {
    console.log(payload);
  }

  override findMany(payload: EventPayload): void {
    // console.log(inspect(payload, true, 100));
  }
}
