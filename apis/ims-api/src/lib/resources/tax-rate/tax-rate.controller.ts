import type { Prisma } from '@puq/ims-db';
import type {
  TaxRateCreateType,
  TaxRateProjectionType,
  TaxRateQueryType,
  TaxRateUpdateType,
} from '@puq/ims-db/zod';
import {
  TaxRateCreate,
  TaxRateProjection,
  TaxRateQuery,
  TaxRateUpdate,
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
export class TaxRateController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.TaxRateDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(TaxRateCreate) data: TaxRateCreateType,
    @Query(TaxRateProjection) projection: TaxRateProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(TaxRateProjection) projection: TaxRateProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(TaxRateQuery) query: TaxRateQueryType,
    @Query(TaxRateProjection) projection: TaxRateProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(TaxRateProjection) projection: TaxRateProjectionType,
    @Body(TaxRateUpdate) data: TaxRateUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(TaxRateProjection) projection: TaxRateProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
