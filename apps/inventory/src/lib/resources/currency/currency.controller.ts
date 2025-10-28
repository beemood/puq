import type { Prisma } from '@puq/inventory-db';
import type {
  CurrencyCreate,
  CurrencyProjection,
  CurrencyQuery,
  CurrencyUpdate,
} from '@puq/inventory-db/zod';
import {
  CurrencyCreateSchema,
  CurrencyProjectionSchema,
  CurrencyQuerySchema,
  CurrencyUpdateSchema,
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
export class CurrencyController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CurrencyDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CurrencyCreateSchema) data: CurrencyCreate,
    @Query(CurrencyProjectionSchema) projection: CurrencyProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CurrencyProjectionSchema) projection: CurrencyProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CurrencyQuerySchema) query: CurrencyQuery,
    @Query(CurrencyProjectionSchema) projection: CurrencyProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CurrencyProjectionSchema) projection: CurrencyProjection,
    @Body(CurrencyUpdateSchema) data: CurrencyUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CurrencyProjectionSchema) projection: CurrencyProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
