import type { Prisma } from '@puq/ims-db';
import type {
  StoreCreateType,
  StoreProjectionType,
  StoreQueryType,
  StoreUpdateType,
} from '@puq/ims-db/zod';
import {
  StoreCreate,
  StoreProjection,
  StoreQuery,
  StoreUpdate,
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
export class StoreController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.StoreDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(StoreCreate) data: StoreCreateType,
    @Query(StoreProjection) projection: StoreProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(StoreProjection) projection: StoreProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(StoreQuery) query: StoreQueryType,
    @Query(StoreProjection) projection: StoreProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(StoreProjection) projection: StoreProjectionType,
    @Body(StoreUpdate) data: StoreUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(StoreProjection) projection: StoreProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
