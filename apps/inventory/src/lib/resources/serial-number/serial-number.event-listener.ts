import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class SerialNumberEventListener extends AbstractEventListener {}
