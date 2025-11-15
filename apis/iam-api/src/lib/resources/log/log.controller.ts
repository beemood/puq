import type { Prisma } from '@puq/iam-db';
import type {
  LogCreateType,
  LogProjectionType,
  LogQueryType,
  LogUpdateType,
} from '@puq/iam-db/zod';
import { LogCreate, LogProjection, LogQuery, LogUpdate } from '@puq/iam-db/zod';
import {
  AbstractResourceController,
  AutoResourceController,
  Body,
  ParamId,
  Query,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';

@AutoResourceController()
export class LogController extends AbstractResourceController {
  constructor(@InjectRepository() protected readonly repo: Prisma.LogDelegate) {
    super();
  }

  override async saveOne(
    @Body(LogCreate) data: LogCreateType,
    @Query(LogProjection) projection: LogProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(LogProjection) projection: LogProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(LogQuery) query: LogQueryType,
    @Query(LogProjection) projection: LogProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(LogProjection) projection: LogProjectionType,
    @Body(LogUpdate) data: LogUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(LogProjection) projection: LogProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
