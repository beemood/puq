import type { Prisma } from '@puq/inventory-db';
import type {
  QuantityCreate,
  QuantityProjection,
  QuantityQuery,
  QuantityUpdate,
} from '@puq/inventory-db/zod';
import {
  QuantityCreateSchema,
  QuantityProjectionSchema,
  QuantityQuerySchema,
  QuantityUpdateSchema,
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
export class QuantityController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.QuantityDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(QuantityCreateSchema) data: QuantityCreate,
    @Query(QuantityProjectionSchema) projection: QuantityProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(QuantityProjectionSchema) projection: QuantityProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(QuantityQuerySchema) query: QuantityQuery,
    @Query(QuantityProjectionSchema) projection: QuantityProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(QuantityProjectionSchema) projection: QuantityProjection,
    @Body(QuantityUpdateSchema) data: QuantityUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(QuantityProjectionSchema) projection: QuantityProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
