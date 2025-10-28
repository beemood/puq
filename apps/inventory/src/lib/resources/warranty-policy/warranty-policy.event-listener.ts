import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class WarrantyPolicyEventListener extends AbstractEventListener {}
