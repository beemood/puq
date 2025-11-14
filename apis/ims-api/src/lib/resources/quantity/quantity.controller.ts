import type { Prisma } from '@puq/ims-db';
import type {
  QuantityCreateType,
  QuantityProjectionType,
  QuantityQueryType,
  QuantityUpdateType,
} from '@puq/ims-db/zod';
import {
  QuantityCreate,
  QuantityProjection,
  QuantityQuery,
  QuantityUpdate,
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
export class QuantityController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.QuantityDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(QuantityCreate) data: QuantityCreateType,
    @Query(QuantityProjection) projection: QuantityProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(QuantityProjection) projection: QuantityProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(QuantityQuery) query: QuantityQueryType,
    @Query(QuantityProjection) projection: QuantityProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(QuantityProjection) projection: QuantityProjectionType,
    @Body(QuantityUpdate) data: QuantityUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(QuantityProjection) projection: QuantityProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
