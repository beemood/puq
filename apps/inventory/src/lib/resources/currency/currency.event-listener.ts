import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class CurrencyEventListener extends AbstractEventListener {}
