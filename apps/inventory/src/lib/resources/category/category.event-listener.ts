import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class CategoryEventListener extends AbstractEventListener {}
