import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class PriceEventListener extends AbstractEventListener {}
