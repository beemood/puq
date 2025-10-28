import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class QuantityEventListener extends AbstractEventListener {}
