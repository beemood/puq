import type { Prisma } from '@puq/iam-db';
import type {
  UserCreateType,
  UserProjectionType,
  UserQueryType,
  UserUpdateType,
} from '@puq/iam-db/zod';
import {
  UserCreate,
  UserProjection,
  UserQuery,
  UserUpdate,
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
export class UserController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.UserDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(UserCreate) data: UserCreateType,
    @Query(UserProjection) projection: UserProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(UserProjection) projection: UserProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(UserQuery) query: UserQueryType,
    @Query(UserProjection) projection: UserProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(UserProjection) projection: UserProjectionType,
    @Body(UserUpdate) data: UserUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(UserProjection) projection: UserProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
