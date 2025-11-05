import type { Prisma } from '@puq/inventory-db';
import type {
  PriceLevelCreateType,
  PriceLevelProjectionType,
  PriceLevelQueryType,
  PriceLevelUpdateType,
} from '@puq/inventory-db/zod';
import {
  PriceLevelCreate,
  PriceLevelProjection,
  PriceLevelQuery,
  PriceLevelUpdate,
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
    @Body(PriceLevelCreate) data: PriceLevelCreateType,
    @Query(PriceLevelProjection) projection: PriceLevelProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(PriceLevelProjection) projection: PriceLevelProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(PriceLevelQuery) query: PriceLevelQueryType,
    @Query(PriceLevelProjection) projection: PriceLevelProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(PriceLevelProjection) projection: PriceLevelProjectionType,
    @Body(PriceLevelUpdate) data: PriceLevelUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(PriceLevelProjection) projection: PriceLevelProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
