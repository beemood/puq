import type { Prisma } from '@puq/inventory-db';
import type {
  TagCreateType,
  TagProjectionType,
  TagQueryType,
  TagUpdateType,
} from '@puq/inventory-db/zod';
import {
  TagCreate,
  TagProjection,
  TagQuery,
  TagUpdate,
} from '@puq/inventory-db/zod';
import {
  AbstractResourceController,
  AutoResourceController,
  Body,
  ParamId,
  Query,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';

@AutoResourceController()
export class TagController extends AbstractResourceController {
  constructor(@InjectRepository() protected readonly repo: Prisma.TagDelegate) {
    super();
  }

  override async saveOne(
    @Body(TagCreate) data: TagCreateType,
    @Query(TagProjection) projection: TagProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(TagProjection) projection: TagProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(TagQuery) query: TagQueryType,
    @Query(TagProjection) projection: TagProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(TagProjection) projection: TagProjectionType,
    @Body(TagUpdate) data: TagUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(TagProjection) projection: TagProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
