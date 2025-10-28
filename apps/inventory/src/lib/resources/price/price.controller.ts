import type { Prisma } from '@puq/inventory-db';
import type {
  PriceCreate,
  PriceProjection,
  PriceQuery,
  PriceUpdate,
} from '@puq/inventory-db/zod';
import {
  PriceCreateSchema,
  PriceProjectionSchema,
  PriceQuerySchema,
  PriceUpdateSchema,
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
export class PriceController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.PriceDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(PriceCreateSchema) data: PriceCreate,
    @Query(PriceProjectionSchema) projection: PriceProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(PriceProjectionSchema) projection: PriceProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(PriceQuerySchema) query: PriceQuery,
    @Query(PriceProjectionSchema) projection: PriceProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(PriceProjectionSchema) projection: PriceProjection,
    @Body(PriceUpdateSchema) data: PriceUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(PriceProjectionSchema) projection: PriceProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
