import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class ProductEventListener extends AbstractEventListener {}
