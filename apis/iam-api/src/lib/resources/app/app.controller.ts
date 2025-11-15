import type { Prisma } from '@puq/iam-db';
import type {
  AppCreateType,
  AppProjectionType,
  AppQueryType,
  AppUpdateType,
} from '@puq/iam-db/zod';
import { AppCreate, AppProjection, AppQuery, AppUpdate } from '@puq/iam-db/zod';
import {
  AbstractResourceController,
  AutoResourceController,
  Body,
  ParamId,
  Query,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';

@AutoResourceController()
export class AppController extends AbstractResourceController {
  constructor(@InjectRepository() protected readonly repo: Prisma.AppDelegate) {
    super();
  }

  override async saveOne(
    @Body(AppCreate) data: AppCreateType,
    @Query(AppProjection) projection: AppProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(AppProjection) projection: AppProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(AppQuery) query: AppQueryType,
    @Query(AppProjection) projection: AppProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(AppProjection) projection: AppProjectionType,
    @Body(AppUpdate) data: AppUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(AppProjection) projection: AppProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
