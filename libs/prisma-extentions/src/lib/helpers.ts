import type { DMMF, Operation } from '@prisma/client/runtime/library';

export type Datamodel = Omit<DMMF.Datamodel, 'indexes'>;
export type Model = DMMF.Model;
export type Field = DMMF.Field;

export function isInputOperation(operation: string) {
  return operation.startsWith('update') || operation.startsWith('create');
}

export function isCreateOperation(operation: string) {
  return (operation as Operation) === 'create';
}

export function isCreateManyOperation(operation: string) {
  return (operation as Operation) === 'createMany';
}

export function isUpdateOperation(operation: string) {
  return (operation as Operation) === 'update';
}

export function isModifyOperation(operation: string) {
  return operation.startsWith('update') || operation.startsWith('delete');
}

export function isUpdateManyOperation(operation: string) {
  return (operation as Operation) === 'updateMany';
}

export function isUpdateOrCreateOperation(operation: string) {
  return (
    (operation as Operation) === 'update' ||
    (operation as Operation) === 'create' ||
    isCreateManyOperation(operation)
  );
}

export function isFindOperation(operation: string) {
  return (operation as Operation).startsWith('find');
}

export class DatamodelManager {
  constructor(protected readonly datamodel: Datamodel) {}

  findModel(modelName: string) {
    return this.datamodel.models.find((e) => e.name === modelName);
  }

  findChangeLogModel() {
    return this.datamodel.models.find(
      (e) => e.name === 'ChangeLog' || e.documentation?.includes('@changeLog')
    );
  }

  findLogTable() {
    return this.datamodel.models.find((e) => e.name.endsWith('Log'));
  }
}

export class ModelManager {
  constructor(protected readonly model: Model) {}
  findField(name: string) {
    return this.model.fields.find((e) => e.name === name);
  }

  protected isSlugField(field: Field) {
    return field.type === 'String';
  }

  protected isSlugSourceField(field: Field) {
    return (
      field.name === 'title' ||
      field.name === 'name' ||
      field.documentation?.includes('@slug')
    );
  }

  protected isSlugTargetField(field: Field) {
    return field.name === 'slug' || field.documentation?.includes('@slug');
  }

  protected isHashField(field: Field) {
    return (
      field.name === 'password' ||
      field.name === 'pin' ||
      field.documentation?.includes('@hash')
    );
  }

  protected isSensitiveField(field: Field) {
    return field.documentation?.includes('@senstive');
  }

  findHashFields() {
    return this.model.fields.filter(this.isHashField);
  }

  findSenstiveFields() {
    return this.model.fields.filter(this.isSensitiveField);
  }

  findSlugTarget() {
    return this.model.fields
      .filter(this.isSlugField)
      .find(this.isSlugTargetField);
  }

  findSlugSource() {
    return this.model.fields
      .filter(this.isSlugField)
      .find(this.isSlugSourceField);
  }

  findSoftDeleteField() {
    return this.model.fields
      .filter((e) => e.type == 'Date' || e.type === 'DateTime')
      .find((e) => {
        return (
          e.name === 'deletedAt' || e.documentation?.includes('@deletedAt')
        );
      });
  }

  findReadonlyField() {
    return this.model.fields
      .filter((e) => e.type === 'Boolean')
      .find((e) => e.name === 'readonly');
  }
}
