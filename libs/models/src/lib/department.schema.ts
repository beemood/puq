import * as p from '@puq/zod';
import z from 'zod';

export class DepartmentSchema {
  /**
   * Configure input validation
   */
  static readonly __Schema = {
    ...p.Base,
    name: p.name,
  };

  /**
   * Configuer seletable fields
   */
  static readonly __Select = {
    ...p.BaseSelectable,
    name: z.boolean(),
  };

  /**
   * Configure paginator
   */
  static readonly __Page = {
    ...p.Page,
  };

  /**
   * Paginator schema
   */
  static readonly Page = z.object(this.__Page).partial();

  /**
   * Select fields schema
   */
  static readonly Select = z.preprocess(
    p.jsonTransformer,
    z.object(this.__Select).partial()
  );

  /**
   * Omit fields schema
   */
  static readonly Omit = z.preprocess(
    p.jsonTransformer,
    z
      .object(this.__Select)
      .partial()
      .refine(...p.getOmitFieldsRefineOptions(this.__Select))
  );

  /**
   * Include relations schema, (if nay)
   */
  static readonly Include = z.preprocess(
    p.jsonTransformer,
    z
      .object({
        // Add relation fields if any
      })
      .partial()
  );

  /**
   * Configure all query select options
   */
  static readonly __QuerySelect = {
    select: this.Select,
    omit: this.Omit,
    include: this.Include,
  };

  static readonly QuerySelect = z.preprocess(
    p.selectionTransformer,
    z.object(this.__QuerySelect).partial()
  );

  /**
   * Read schema
   */
  static readonly Read = z.object(this.__Schema).partial();

  /**
   * Create validation schema
   */
  static readonly Create = DepartmentSchema.Read.pick({
    name: true,

    // Add all input fields here
  }).required({
    name: true,

    // Add all required input fields here
  });

  /**
   * Update validation schema
   */
  static readonly Update = DepartmentSchema.Create.partial();

  /**
   * Configure query fields
   */
  static readonly __Where = {
    ...p.BaseWhere,
    name: p.name,
  };

  /**
   * Query schema
   */
  static readonly Where = z.preprocess(
    p.jsonTransformer,
    z.object(this.__Where).partial()
  );

  /**
   * Configure orderable fields
   */
  static readonly __Order = {
    ...p.BaseOrder,
    name: p.Direction,
  };

  /**
   * Order schema
   */
  static readonly Order = z.preprocess(
    p.jsonTransformer,
    z.object(this.__Order).partial()
  );

  /**
   * Delete many schema
   */
  static readonly DeleteMany = z
    .object({
      where: this.Where,
      limit: p.quantity.optional(),
    })
    .partial();

  /**
   * Query many schema
   */
  static readonly QueryMany = z
    .object({
      ...p.Page,
      ...this.__QuerySelect,
      orderBy: this.Order,
      where: this.Where,
    })
    .partial();

  /**
   * Relation query schema used by other schemas
   */
  static readonly IncludeMe = z.preprocess(
    p.jsonTransformer,
    z
      .object({
        ...this.__QuerySelect,
        where: this.Where,
      })
      .partial()
  );
}

export type Department = z.infer<typeof DepartmentSchema.Read>;
export type CreateDepartment = z.infer<typeof DepartmentSchema.Create>;
export type UpdateDepartment = z.infer<typeof DepartmentSchema.Update>;

export type PageDepartment = z.infer<typeof DepartmentSchema.Page>;
export type WhereDepartment = z.infer<typeof DepartmentSchema.Where>;
export type OrderDepartment = z.infer<typeof DepartmentSchema.Order>;
export type SelectDepartment = z.infer<typeof DepartmentSchema.QuerySelect>;
export type QueryManyDepartment = z.infer<typeof DepartmentSchema.QueryMany>;
export type DeleteManyDepartment = z.infer<typeof DepartmentSchema.DeleteMany>;
