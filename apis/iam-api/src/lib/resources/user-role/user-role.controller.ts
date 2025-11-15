import type { Prisma } from '@puq/iam-db';
import type {
  UserRoleCreateType,
  UserRoleProjectionType,
  UserRoleQueryType,
  UserRoleUpdateType,
} from '@puq/iam-db/zod';
import {
  UserRoleCreate,
  UserRoleProjection,
  UserRoleQuery,
  UserRoleUpdate,
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
export class UserRoleController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.UserRoleDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(UserRoleCreate) data: UserRoleCreateType,
    @Query(UserRoleProjection) projection: UserRoleProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(UserRoleProjection) projection: UserRoleProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(UserRoleQuery) query: UserRoleQueryType,
    @Query(UserRoleProjection) projection: UserRoleProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(UserRoleProjection) projection: UserRoleProjectionType,
    @Body(UserRoleUpdate) data: UserRoleUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(UserRoleProjection) projection: UserRoleProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
