import type { DMMF } from '@prisma/client/runtime/library.js';

export type Datamodel = Omit<DMMF.Datamodel, 'indexes'>;
export type Model = DMMF.Model;
export type Field = DMMF.Field;
export type DatamodelEnum = DMMF.DatamodelEnum;
