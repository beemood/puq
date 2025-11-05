import type { Prisma } from '@puq/inventory-db';
import type {
  SupplierCreateType,
  SupplierProjectionType,
  SupplierQueryType,
  SupplierUpdateType,
} from '@puq/inventory-db/zod';
import {
  SupplierCreate,
  SupplierProjection,
  SupplierQuery,
  SupplierUpdate,
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
export class SupplierController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.SupplierDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(SupplierCreate) data: SupplierCreateType,
    @Query(SupplierProjection) projection: SupplierProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(SupplierProjection) projection: SupplierProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(SupplierQuery) query: SupplierQueryType,
    @Query(SupplierProjection) projection: SupplierProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(SupplierProjection) projection: SupplierProjectionType,
    @Body(SupplierUpdate) data: SupplierUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(SupplierProjection) projection: SupplierProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
