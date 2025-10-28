import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class PriceLevelEventListener extends AbstractEventListener {}
