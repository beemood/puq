import type { Prisma } from '@puq/inventory-db';
import type {
  VariantCreate,
  VariantProjection,
  VariantQuery,
  VariantUpdate,
} from '@puq/inventory-db/zod';
import {
  VariantCreateSchema,
  VariantProjectionSchema,
  VariantQuerySchema,
  VariantUpdateSchema,
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
export class VariantController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.VariantDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(VariantCreateSchema) data: VariantCreate,
    @Query(VariantProjectionSchema) projection: VariantProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(VariantProjectionSchema) projection: VariantProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(VariantQuerySchema) query: VariantQuery,
    @Query(VariantProjectionSchema) projection: VariantProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(VariantProjectionSchema) projection: VariantProjection,
    @Body(VariantUpdateSchema) data: VariantUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(VariantProjectionSchema) projection: VariantProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
