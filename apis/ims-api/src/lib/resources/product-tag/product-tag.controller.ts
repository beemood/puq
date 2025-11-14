import type { Prisma } from '@puq/ims-db';
import type {
  ProductTagCreateType,
  ProductTagProjectionType,
  ProductTagQueryType,
  ProductTagUpdateType,
} from '@puq/ims-db/zod';
import {
  ProductTagCreate,
  ProductTagProjection,
  ProductTagQuery,
  ProductTagUpdate,
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
export class ProductTagController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductTagDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductTagCreate) data: ProductTagCreateType,
    @Query(ProductTagProjection) projection: ProductTagProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductTagProjection) projection: ProductTagProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductTagQuery) query: ProductTagQueryType,
    @Query(ProductTagProjection) projection: ProductTagProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductTagProjection) projection: ProductTagProjectionType,
    @Body(ProductTagUpdate) data: ProductTagUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductTagProjection) projection: ProductTagProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
