import type { Prisma } from '@puq/ims-db';
import type {
  SerialNumberCreateType,
  SerialNumberProjectionType,
  SerialNumberQueryType,
  SerialNumberUpdateType,
} from '@puq/ims-db/zod';
import {
  SerialNumberCreate,
  SerialNumberProjection,
  SerialNumberQuery,
  SerialNumberUpdate,
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
export class SerialNumberController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.SerialNumberDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(SerialNumberCreate) data: SerialNumberCreateType,
    @Query(SerialNumberProjection) projection: SerialNumberProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(SerialNumberProjection) projection: SerialNumberProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(SerialNumberQuery) query: SerialNumberQueryType,
    @Query(SerialNumberProjection) projection: SerialNumberProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(SerialNumberProjection) projection: SerialNumberProjectionType,
    @Body(SerialNumberUpdate) data: SerialNumberUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(SerialNumberProjection) projection: SerialNumberProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
