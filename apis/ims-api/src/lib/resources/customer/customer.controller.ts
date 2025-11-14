import type { Prisma } from '@puq/ims-db';
import type {
  CustomerCreateType,
  CustomerProjectionType,
  CustomerQueryType,
  CustomerUpdateType,
} from '@puq/ims-db/zod';
import {
  CustomerCreate,
  CustomerProjection,
  CustomerQuery,
  CustomerUpdate,
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
export class CustomerController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CustomerDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CustomerCreate) data: CustomerCreateType,
    @Query(CustomerProjection) projection: CustomerProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CustomerProjection) projection: CustomerProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CustomerQuery) query: CustomerQueryType,
    @Query(CustomerProjection) projection: CustomerProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CustomerProjection) projection: CustomerProjectionType,
    @Body(CustomerUpdate) data: CustomerUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CustomerProjection) projection: CustomerProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
