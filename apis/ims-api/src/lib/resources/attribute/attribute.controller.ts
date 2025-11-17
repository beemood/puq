import type { Prisma } from '@puq/ims-db';
import type {
  AttributeCreateType,
  AttributeProjectionType,
  AttributeQueryType,
  AttributeUpdateType,
} from '@puq/ims-db/zod';
import {
  AttributeCreate,
  AttributeProjection,
  AttributeQuery,
  AttributeUpdate,
} from '@puq/ims-db/zod';
import {
  AbstractResourceController,
  AutoResourceController,
  Body,
  ParamId,
  Query,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';

@AutoResourceController()
export class AttributeController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.AttributeDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(AttributeCreate) data: AttributeCreateType,
    @Query(AttributeProjection) projection: AttributeProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(AttributeProjection) projection: AttributeProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(AttributeQuery) query: AttributeQueryType,
    @Query(AttributeProjection) projection: AttributeProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(AttributeProjection) projection: AttributeProjectionType,
    @Body(AttributeUpdate) data: AttributeUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(AttributeProjection) projection: AttributeProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
