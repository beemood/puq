import type { Prisma } from '@puq/ims-db';
import type {
  DiscountCreateType,
  DiscountProjectionType,
  DiscountQueryType,
  DiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  DiscountCreate,
  DiscountProjection,
  DiscountQuery,
  DiscountUpdate,
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
export class DiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.DiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(DiscountCreate) data: DiscountCreateType,
    @Query(DiscountProjection) projection: DiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(DiscountProjection) projection: DiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(DiscountQuery) query: DiscountQueryType,
    @Query(DiscountProjection) projection: DiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(DiscountProjection) projection: DiscountProjectionType,
    @Body(DiscountUpdate) data: DiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(DiscountProjection) projection: DiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
