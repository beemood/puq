import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class DiscountEventListener extends AbstractEventListener {}
