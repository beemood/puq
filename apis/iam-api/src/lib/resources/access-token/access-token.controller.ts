import type { Prisma } from '@puq/iam-db';
import type {
  AccessTokenCreateType,
  AccessTokenProjectionType,
  AccessTokenQueryType,
  AccessTokenUpdateType,
} from '@puq/iam-db/zod';
import {
  AccessTokenCreate,
  AccessTokenProjection,
  AccessTokenQuery,
  AccessTokenUpdate,
} from '@puq/iam-db/zod';
import {
  AbstractResourceController,
  AutoResourceController,
  Body,
  ParamId,
  Query,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';

@AutoResourceController()
export class AccessTokenController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.AccessTokenDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(AccessTokenCreate) data: AccessTokenCreateType,
    @Query(AccessTokenProjection) projection: AccessTokenProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(AccessTokenProjection) projection: AccessTokenProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(AccessTokenQuery) query: AccessTokenQueryType,
    @Query(AccessTokenProjection) projection: AccessTokenProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(AccessTokenProjection) projection: AccessTokenProjectionType,
    @Body(AccessTokenUpdate) data: AccessTokenUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(AccessTokenProjection) projection: AccessTokenProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
