import * as p from '@puq/zod';
import z from 'zod';
import { CategorySchema } from './category.schema.js';

export class ProductSchema {
  /**
   * Configure input validation
   */
  static readonly __Schema = {
    ...p.Base,
    productId: z.uuid(),
    name: p.name,
    description: p.description,
    upc: p.barcode,
    cost: p.currency,
    price: p.currency,
    categoryId: p.id,
  };

  /**
   * Configuer seletable fields
   */
  static readonly __Select = {
    ...p.BaseSelectable,
    productId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    upc: z.boolean(),
    cost: z.boolean(),
    price: z.boolean(),
    categoryId: z.boolean(),
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
        category: CategorySchema.IncludeMe,
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
  static readonly Create = ProductSchema.Read.pick({
    productId: true,
    name: true,
    description: true,
    upc: true,
    price: true,
    cost: true,

    // Add all input fields here
  }).required({
    name: true,
    upc: true,
    price: true,
    cost: true,
    // Add all required input fields here
  });

  /**
   * Update validation schema
   */
  static readonly Update = ProductSchema.Create.partial();

  /**
   * Configure query fields
   */
  static readonly __Where = {
    ...p.BaseWhere,
    productId: p.StrFilter,
    name: p.StrFilter,
    description: p.StrFilter,
    upc: p.StrFilter,
    cost: p.NumFilter,
    price: p.NumFilter,
    categoryId: p.IntFilter,
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
    productId: p.Direction,
    description: p.Direction,
    upc: p.Direction,
    cost: p.Direction,
    price: p.Direction,
    categoryId: p.Direction,
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

export type Product = z.infer<typeof ProductSchema.Read>;
export type CreateProduct = z.infer<typeof ProductSchema.Create>;
export type UpdateProduct = z.infer<typeof ProductSchema.Update>;
export type PageProduct = z.infer<typeof ProductSchema.Page>;
export type WhereProduct = z.infer<typeof ProductSchema.Where>;
export type OrderProduct = z.infer<typeof ProductSchema.Order>;
export type SelectProduct = z.infer<typeof ProductSchema.QuerySelect>;
export type QueryManyProduct = z.infer<typeof ProductSchema.QueryMany>;
export type DeleteManyProduct = z.infer<typeof ProductSchema.DeleteMany>;
