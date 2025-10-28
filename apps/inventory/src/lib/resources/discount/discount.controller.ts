import type { Prisma } from '@puq/inventory-db';
import type {
  DiscountCreate,
  DiscountProjection,
  DiscountQuery,
  DiscountUpdate,
} from '@puq/inventory-db/zod';
import {
  DiscountCreateSchema,
  DiscountProjectionSchema,
  DiscountQuerySchema,
  DiscountUpdateSchema,
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
export class DiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.DiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(DiscountCreateSchema) data: DiscountCreate,
    @Query(DiscountProjectionSchema) projection: DiscountProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(DiscountProjectionSchema) projection: DiscountProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(DiscountQuerySchema) query: DiscountQuery,
    @Query(DiscountProjectionSchema) projection: DiscountProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(DiscountProjectionSchema) projection: DiscountProjection,
    @Body(DiscountUpdateSchema) data: DiscountUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(DiscountProjectionSchema) projection: DiscountProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
