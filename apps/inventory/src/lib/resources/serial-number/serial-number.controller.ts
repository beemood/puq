import type { Prisma } from '@puq/inventory-db';
import type {
  SerialNumberCreate,
  SerialNumberProjection,
  SerialNumberQuery,
  SerialNumberUpdate,
} from '@puq/inventory-db/zod';
import {
  SerialNumberCreateSchema,
  SerialNumberProjectionSchema,
  SerialNumberQuerySchema,
  SerialNumberUpdateSchema,
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
export class SerialNumberController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.SerialNumberDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(SerialNumberCreateSchema) data: SerialNumberCreate,
    @Query(SerialNumberProjectionSchema) projection: SerialNumberProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(SerialNumberProjectionSchema) projection: SerialNumberProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(SerialNumberQuerySchema) query: SerialNumberQuery,
    @Query(SerialNumberProjectionSchema) projection: SerialNumberProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(SerialNumberProjectionSchema) projection: SerialNumberProjection,
    @Body(SerialNumberUpdateSchema) data: SerialNumberUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(SerialNumberProjectionSchema) projection: SerialNumberProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
