import type { Prisma } from '@puq/inventory-db';
import type {
  AttributeCreate,
  AttributeProjection,
  AttributeQuery,
  AttributeUpdate,
} from '@puq/inventory-db/zod';
import {
  AttributeCreateSchema,
  AttributeProjectionSchema,
  AttributeQuerySchema,
  AttributeUpdateSchema,
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
export class AttributeController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.AttributeDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(AttributeCreateSchema) data: AttributeCreate,
    @Query(AttributeProjectionSchema) projection: AttributeProjection
  ) {
    return await this.repo.create({
      ...projection,
      data,
    });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(AttributeProjectionSchema) projection: AttributeProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(AttributeQuerySchema) query: AttributeQuery,
    @Query(AttributeProjectionSchema) projection: AttributeProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(AttributeProjectionSchema) projection: AttributeProjection,
    @Body(AttributeUpdateSchema) data: AttributeUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(AttributeProjectionSchema) projection: AttributeProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
