import type { Prisma } from '@puq/ims-db';
import type {
  ProductTypeCreateType,
  ProductTypeProjectionType,
  ProductTypeQueryType,
  ProductTypeUpdateType,
} from '@puq/ims-db/zod';
import {
  ProductTypeCreate,
  ProductTypeProjection,
  ProductTypeQuery,
  ProductTypeUpdate,
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
export class ProductTypeController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductTypeDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductTypeCreate) data: ProductTypeCreateType,
    @Query(ProductTypeProjection) projection: ProductTypeProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductTypeProjection) projection: ProductTypeProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductTypeQuery) query: ProductTypeQueryType,
    @Query(ProductTypeProjection) projection: ProductTypeProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductTypeProjection) projection: ProductTypeProjectionType,
    @Body(ProductTypeUpdate) data: ProductTypeUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductTypeProjection) projection: ProductTypeProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
