import type { Prisma } from '@puq/inventory-db';
import type {
  PriceCreateType,
  PriceProjectionType,
  PriceQueryType,
  PriceUpdateType,
} from '@puq/inventory-db/zod';
import {
  PriceCreate,
  PriceProjection,
  PriceQuery,
  PriceUpdate,
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
    @Body(PriceCreate) data: PriceCreateType,
    @Query(PriceProjection) projection: PriceProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(PriceProjection) projection: PriceProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(PriceQuery) query: PriceQueryType,
    @Query(PriceProjection) projection: PriceProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(PriceProjection) projection: PriceProjectionType,
    @Body(PriceUpdate) data: PriceUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(PriceProjection) projection: PriceProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
