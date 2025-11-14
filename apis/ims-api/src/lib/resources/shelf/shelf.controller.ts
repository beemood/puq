import type { Prisma } from '@puq/ims-db';
import type {
  ShelfCreateType,
  ShelfProjectionType,
  ShelfQueryType,
  ShelfUpdateType,
} from '@puq/ims-db/zod';
import {
  ShelfCreate,
  ShelfProjection,
  ShelfQuery,
  ShelfUpdate,
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
export class ShelfController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ShelfDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ShelfCreate) data: ShelfCreateType,
    @Query(ShelfProjection) projection: ShelfProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ShelfProjection) projection: ShelfProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ShelfQuery) query: ShelfQueryType,
    @Query(ShelfProjection) projection: ShelfProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ShelfProjection) projection: ShelfProjectionType,
    @Body(ShelfUpdate) data: ShelfUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ShelfProjection) projection: ShelfProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
