import type { Prisma } from '@puq/inventory-db';
import type {
  ProductCategoryCreate,
  ProductCategoryProjection,
  ProductCategoryQuery,
  ProductCategoryUpdate,
} from '@puq/inventory-db/zod';
import {
  ProductCategoryCreateSchema,
  ProductCategoryProjectionSchema,
  ProductCategoryQuerySchema,
  ProductCategoryUpdateSchema,
} from '@puq/inventory-db/zod';
import {
  AbstractResourceController,
  AutoResourceController,
  Body,
  ParamId,
  Query,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';

@AutoResourceController()
export class ProductCategoryController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductCategoryDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductCategoryCreateSchema) data: ProductCategoryCreate,
    @Query(ProductCategoryProjectionSchema)
    projection: ProductCategoryProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductCategoryProjectionSchema)
    projection: ProductCategoryProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductCategoryQuerySchema) query: ProductCategoryQuery,
    @Query(ProductCategoryProjectionSchema)
    projection: ProductCategoryProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductCategoryProjectionSchema)
    projection: ProductCategoryProjection,
    @Body(ProductCategoryUpdateSchema) data: ProductCategoryUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductCategoryProjectionSchema)
    projection: ProductCategoryProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
