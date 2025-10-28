import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class ProductWarrantyEventListener extends AbstractEventListener {}
