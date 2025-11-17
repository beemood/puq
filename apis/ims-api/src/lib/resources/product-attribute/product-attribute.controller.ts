import type { Prisma } from '@puq/ims-db';
import type {
  ProductAttributeCreateType,
  ProductAttributeProjectionType,
  ProductAttributeQueryType,
  ProductAttributeUpdateType,
} from '@puq/ims-db/zod';
import {
  ProductAttributeCreate,
  ProductAttributeProjection,
  ProductAttributeQuery,
  ProductAttributeUpdate,
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
export class ProductAttributeController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductAttributeDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductAttributeCreate) data: ProductAttributeCreateType,
    @Query(ProductAttributeProjection)
    projection: ProductAttributeProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductAttributeProjection)
    projection: ProductAttributeProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductAttributeQuery) query: ProductAttributeQueryType,
    @Query(ProductAttributeProjection)
    projection: ProductAttributeProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductAttributeProjection)
    projection: ProductAttributeProjectionType,
    @Body(ProductAttributeUpdate) data: ProductAttributeUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductAttributeProjection)
    projection: ProductAttributeProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
