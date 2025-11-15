import type { Prisma } from '@puq/iam-db';
import type {
  AccessTokenPermissionCreateType,
  AccessTokenPermissionProjectionType,
  AccessTokenPermissionQueryType,
  AccessTokenPermissionUpdateType,
} from '@puq/iam-db/zod';
import {
  AccessTokenPermissionCreate,
  AccessTokenPermissionProjection,
  AccessTokenPermissionQuery,
  AccessTokenPermissionUpdate,
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
export class AccessTokenPermissionController extends AbstractResourceController {
  constructor(
    @InjectRepository()
    protected readonly repo: Prisma.AccessTokenPermissionDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(AccessTokenPermissionCreate) data: AccessTokenPermissionCreateType,
    @Query(AccessTokenPermissionProjection)
    projection: AccessTokenPermissionProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(AccessTokenPermissionProjection)
    projection: AccessTokenPermissionProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(AccessTokenPermissionQuery) query: AccessTokenPermissionQueryType,
    @Query(AccessTokenPermissionProjection)
    projection: AccessTokenPermissionProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(AccessTokenPermissionProjection)
    projection: AccessTokenPermissionProjectionType,
    @Body(AccessTokenPermissionUpdate) data: AccessTokenPermissionUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(AccessTokenPermissionProjection)
    projection: AccessTokenPermissionProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
