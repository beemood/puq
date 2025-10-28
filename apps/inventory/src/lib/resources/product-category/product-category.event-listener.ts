import { AbstractEventListener, AutoEventListener } from '@puq/nest';

@AutoEventListener()
export class ProductCategoryEventListener extends AbstractEventListener {}
