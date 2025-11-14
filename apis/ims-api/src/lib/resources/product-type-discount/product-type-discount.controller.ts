import type { Prisma } from '@puq/ims-db';
import type {
  ProductTypeDiscountCreateType,
  ProductTypeDiscountProjectionType,
  ProductTypeDiscountQueryType,
  ProductTypeDiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  ProductTypeDiscountCreate,
  ProductTypeDiscountProjection,
  ProductTypeDiscountQuery,
  ProductTypeDiscountUpdate,
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
export class ProductTypeDiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository()
    protected readonly repo: Prisma.ProductTypeDiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductTypeDiscountCreate) data: ProductTypeDiscountCreateType,
    @Query(ProductTypeDiscountProjection)
    projection: ProductTypeDiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductTypeDiscountProjection)
    projection: ProductTypeDiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductTypeDiscountQuery) query: ProductTypeDiscountQueryType,
    @Query(ProductTypeDiscountProjection)
    projection: ProductTypeDiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductTypeDiscountProjection)
    projection: ProductTypeDiscountProjectionType,
    @Body(ProductTypeDiscountUpdate) data: ProductTypeDiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductTypeDiscountProjection)
    projection: ProductTypeDiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
