import type { Prisma } from '@puq/iam-db';
import type {
  RolePermissionCreateType,
  RolePermissionProjectionType,
  RolePermissionQueryType,
  RolePermissionUpdateType,
} from '@puq/iam-db/zod';
import {
  RolePermissionCreate,
  RolePermissionProjection,
  RolePermissionQuery,
  RolePermissionUpdate,
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
export class RolePermissionController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.RolePermissionDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(RolePermissionCreate) data: RolePermissionCreateType,
    @Query(RolePermissionProjection) projection: RolePermissionProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(RolePermissionProjection) projection: RolePermissionProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(RolePermissionQuery) query: RolePermissionQueryType,
    @Query(RolePermissionProjection) projection: RolePermissionProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(RolePermissionProjection) projection: RolePermissionProjectionType,
    @Body(RolePermissionUpdate) data: RolePermissionUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(RolePermissionProjection) projection: RolePermissionProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
