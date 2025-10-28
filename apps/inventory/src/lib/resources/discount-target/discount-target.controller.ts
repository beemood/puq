import type { Prisma } from '@puq/inventory-db';
import type {
  DiscountTargetCreate,
  DiscountTargetProjection,
  DiscountTargetQuery,
  DiscountTargetUpdate,
} from '@puq/inventory-db/zod';
import {
  DiscountTargetCreateSchema,
  DiscountTargetProjectionSchema,
  DiscountTargetQuerySchema,
  DiscountTargetUpdateSchema,
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
export class DiscountTargetController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.DiscountTargetDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(DiscountTargetCreateSchema) data: DiscountTargetCreate,
    @Query(DiscountTargetProjectionSchema) projection: DiscountTargetProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(DiscountTargetProjectionSchema) projection: DiscountTargetProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(DiscountTargetQuerySchema) query: DiscountTargetQuery,
    @Query(DiscountTargetProjectionSchema) projection: DiscountTargetProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(DiscountTargetProjectionSchema) projection: DiscountTargetProjection,
    @Body(DiscountTargetUpdateSchema) data: DiscountTargetUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(DiscountTargetProjectionSchema) projection: DiscountTargetProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
