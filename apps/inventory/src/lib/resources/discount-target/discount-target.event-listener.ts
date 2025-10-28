import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class DiscountTargetEventListener extends AbstractEventListener {}
