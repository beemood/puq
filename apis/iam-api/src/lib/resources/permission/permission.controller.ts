import type { Prisma } from '@puq/iam-db';
import type {
  PermissionCreateType,
  PermissionProjectionType,
  PermissionQueryType,
  PermissionUpdateType,
} from '@puq/iam-db/zod';
import {
  PermissionCreate,
  PermissionProjection,
  PermissionQuery,
  PermissionUpdate,
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
export class PermissionController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.PermissionDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(PermissionCreate) data: PermissionCreateType,
    @Query(PermissionProjection) projection: PermissionProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(PermissionProjection) projection: PermissionProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(PermissionQuery) query: PermissionQueryType,
    @Query(PermissionProjection) projection: PermissionProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(PermissionProjection) projection: PermissionProjectionType,
    @Body(PermissionUpdate) data: PermissionUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(PermissionProjection) projection: PermissionProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
