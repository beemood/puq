import type { Prisma } from '@puq/inventory-db';
import type {
  PriceLevelCreate,
  PriceLevelProjection,
  PriceLevelQuery,
  PriceLevelUpdate,
} from '@puq/inventory-db/zod';
import {
  PriceLevelCreateSchema,
  PriceLevelProjectionSchema,
  PriceLevelQuerySchema,
  PriceLevelUpdateSchema,
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
export class PriceLevelController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.PriceLevelDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(PriceLevelCreateSchema) data: PriceLevelCreate,
    @Query(PriceLevelProjectionSchema) projection: PriceLevelProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(PriceLevelProjectionSchema) projection: PriceLevelProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(PriceLevelQuerySchema) query: PriceLevelQuery,
    @Query(PriceLevelProjectionSchema) projection: PriceLevelProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(PriceLevelProjectionSchema) projection: PriceLevelProjection,
    @Body(PriceLevelUpdateSchema) data: PriceLevelUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(PriceLevelProjectionSchema) projection: PriceLevelProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
