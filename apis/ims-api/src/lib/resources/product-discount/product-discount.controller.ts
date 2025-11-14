import type { Prisma } from '@puq/ims-db';
import type {
  ProductDiscountCreateType,
  ProductDiscountProjectionType,
  ProductDiscountQueryType,
  ProductDiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  ProductDiscountCreate,
  ProductDiscountProjection,
  ProductDiscountQuery,
  ProductDiscountUpdate,
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
export class ProductDiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductDiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductDiscountCreate) data: ProductDiscountCreateType,
    @Query(ProductDiscountProjection) projection: ProductDiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductDiscountProjection) projection: ProductDiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductDiscountQuery) query: ProductDiscountQueryType,
    @Query(ProductDiscountProjection) projection: ProductDiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductDiscountProjection) projection: ProductDiscountProjectionType,
    @Body(ProductDiscountUpdate) data: ProductDiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductDiscountProjection) projection: ProductDiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
