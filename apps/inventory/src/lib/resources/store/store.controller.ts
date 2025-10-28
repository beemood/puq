import type { Prisma } from '@puq/inventory-db';
import type {
  StoreCreate,
  StoreProjection,
  StoreQuery,
  StoreUpdate,
} from '@puq/inventory-db/zod';
import {
  StoreCreateSchema,
  StoreProjectionSchema,
  StoreQuerySchema,
  StoreUpdateSchema,
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
export class StoreController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.StoreDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(StoreCreateSchema) data: StoreCreate,
    @Query(StoreProjectionSchema) projection: StoreProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(StoreProjectionSchema) projection: StoreProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(StoreQuerySchema) query: StoreQuery,
    @Query(StoreProjectionSchema) projection: StoreProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(StoreProjectionSchema) projection: StoreProjection,
    @Body(StoreUpdateSchema) data: StoreUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(StoreProjectionSchema) projection: StoreProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
