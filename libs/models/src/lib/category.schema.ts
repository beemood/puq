import * as P from '@puq/zod';
import Z from 'zod';

export class CategorySchema {
  private static readonly __BaseSelect = {
    ...P.BaseSelectIdSchema,
    ...P.BaseSelectTimestampSchema,
    name: Z.boolean(),
  };

  private static readonly __BaseWhere = {
    ...P.BaseWhereIdSchema,
    ...P.BaseWhereTimestampSchema,
  };

  private static readonly __BaseRead = {
    ...P.BaseIdSchema,
    ...P.BaseTimestsampSchema,
  };

  private static readonly __BaseOrder = {
    ...P.BaseOrderIdSchema,
    ...P.BaseOrderTimestampSchema,
  };

  private static readonly __IncludeFields = Z.preprocess(
    P.jsonTransformer,
    Z.object({}).partial()
  );

  private static readonly __OmitFields = Z.preprocess(
    P.jsonTransformer,
    Z.object({ ...this.__BaseSelect })
      .partial()
      .refine(...P.getOmitFieldsRefineOptions(this.__BaseSelect))
  );

  private static readonly __SelectFields = Z.preprocess(
    P.jsonTransformer,
    Z.object({ ...this.__BaseSelect }).partial()
  );

  static readonly Read = Z.object({
    ...this.__BaseRead,
    name: P.name,
  }).partial();

  static readonly Create = CategorySchema.Read.pick({
    name: true,
  }).required({ name: true });

  static readonly Update = CategorySchema.Create.partial();

  static readonly Where = Z.preprocess(
    P.jsonTransformer,
    Z.object({ ...this.__BaseWhere, name: P.StrFilterSchema }).partial()
  );

  static readonly Select = Z.preprocess(
    P.selectionTransformer,
    Z.object({
      select: this.__SelectFields,
      omit: this.__OmitFields,
      include: this.__IncludeFields,
    }).partial()
  );

  private static readonly Order = Z.preprocess(
    P.jsonTransformer,
    Z.object({
      ...this.__BaseOrder,
      name: P.DirectionSchema.optional(),
    }).partial()
  );

  static readonly Query = Z.object({
    ...P.BasePaginatorSchema,
    where: this.Where,
    orderBy: this.Order,
  }).partial();

  static readonly DeleteMany = Z.object({
    where: this.Where,
    limit: P.quantity,
  }).partial();
}

export type Category = Z.infer<typeof CategorySchema.Read>;
export type CreateCategory = Z.infer<typeof CategorySchema.Create>;
export type UpdateCategory = Z.infer<typeof CategorySchema.Update>;
export type SelectCategory = Z.infer<typeof CategorySchema.Select>;
export type QueryCategory = Z.infer<typeof CategorySchema.Query>;
export type DeleteManyCategory = Z.infer<typeof CategorySchema.DeleteMany>;
