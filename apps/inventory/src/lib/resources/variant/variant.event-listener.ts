import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class VariantEventListener extends AbstractEventListener {}
