import type { Prisma } from '@puq/ims-db';
import type {
  StoreDiscountCreateType,
  StoreDiscountProjectionType,
  StoreDiscountQueryType,
  StoreDiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  StoreDiscountCreate,
  StoreDiscountProjection,
  StoreDiscountQuery,
  StoreDiscountUpdate,
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
export class StoreDiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.StoreDiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(StoreDiscountCreate) data: StoreDiscountCreateType,
    @Query(StoreDiscountProjection) projection: StoreDiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(StoreDiscountProjection) projection: StoreDiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(StoreDiscountQuery) query: StoreDiscountQueryType,
    @Query(StoreDiscountProjection) projection: StoreDiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(StoreDiscountProjection) projection: StoreDiscountProjectionType,
    @Body(StoreDiscountUpdate) data: StoreDiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(StoreDiscountProjection) projection: StoreDiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
