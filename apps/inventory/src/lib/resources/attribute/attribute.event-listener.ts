import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class AttributeEventListener extends AbstractEventListener {}
