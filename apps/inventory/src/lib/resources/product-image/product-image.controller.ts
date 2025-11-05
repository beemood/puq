import type { Prisma } from '@puq/inventory-db';
import type {
  ProductImageCreateType,
  ProductImageProjectionType,
  ProductImageQueryType,
  ProductImageUpdateType,
} from '@puq/inventory-db/zod';
import {
  ProductImageCreate,
  ProductImageProjection,
  ProductImageQuery,
  ProductImageUpdate,
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
export class ProductImageController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductImageDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductImageCreate) data: ProductImageCreateType,
    @Query(ProductImageProjection) projection: ProductImageProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductImageProjection) projection: ProductImageProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductImageQuery) query: ProductImageQueryType,
    @Query(ProductImageProjection) projection: ProductImageProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductImageProjection) projection: ProductImageProjectionType,
    @Body(ProductImageUpdate) data: ProductImageUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductImageProjection) projection: ProductImageProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
