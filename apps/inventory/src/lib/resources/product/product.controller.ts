import type { Prisma } from '@puq/inventory-db';
import type {
  ProductCompleteQuery,
  ProductCreate,
  ProductProjection,
  ProductUpdate,
} from '@puq/inventory-db/zod';
import {
  ProductCompleteQuerySchema,
  ProductCreateSchema,
  ProductProjectionSchema,
  ProductUpdateSchema,
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
export class ProductController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductCreateSchema) data: ProductCreate,
    @Query(ProductProjectionSchema) projection: ProductProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductProjectionSchema) projection: ProductProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductCompleteQuerySchema) query: ProductCompleteQuery,
    @Query(ProductProjectionSchema) projection: ProductProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductProjectionSchema) projection: ProductProjection,
    @Body(ProductUpdateSchema) data: ProductUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductProjectionSchema) projection: ProductProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
