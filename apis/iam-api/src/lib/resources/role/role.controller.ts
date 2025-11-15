import type { Prisma } from '@puq/iam-db';
import type {
  RoleCreateType,
  RoleProjectionType,
  RoleQueryType,
  RoleUpdateType,
} from '@puq/iam-db/zod';
import {
  RoleCreate,
  RoleProjection,
  RoleQuery,
  RoleUpdate,
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
export class RoleController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.RoleDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(RoleCreate) data: RoleCreateType,
    @Query(RoleProjection) projection: RoleProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(RoleProjection) projection: RoleProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(RoleQuery) query: RoleQueryType,
    @Query(RoleProjection) projection: RoleProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(RoleProjection) projection: RoleProjectionType,
    @Body(RoleUpdate) data: RoleUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(RoleProjection) projection: RoleProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
