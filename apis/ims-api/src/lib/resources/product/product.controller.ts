import type { Prisma } from '@puq/ims-db';
import type {
  ProductCreateType,
  ProductProjectionType,
  ProductQueryType,
  ProductUpdateType,
} from '@puq/ims-db/zod';
import {
  ProductCreate,
  ProductProjection,
  ProductQuery,
  ProductUpdate,
} from '@puq/ims-db/zod';
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
    @Body(ProductCreate) data: ProductCreateType,
    @Query(ProductProjection) projection: ProductProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductProjection) projection: ProductProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductQuery) query: ProductQueryType,
    @Query(ProductProjection) projection: ProductProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductProjection) projection: ProductProjectionType,
    @Body(ProductUpdate) data: ProductUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductProjection) projection: ProductProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
