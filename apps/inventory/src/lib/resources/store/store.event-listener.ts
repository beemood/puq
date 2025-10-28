import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class StoreEventListener extends AbstractEventListener {}
