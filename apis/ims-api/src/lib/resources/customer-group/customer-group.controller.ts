import type { Prisma } from '@puq/ims-db';
import type {
  CustomerGroupCreateType,
  CustomerGroupProjectionType,
  CustomerGroupQueryType,
  CustomerGroupUpdateType,
} from '@puq/ims-db/zod';
import {
  CustomerGroupCreate,
  CustomerGroupProjection,
  CustomerGroupQuery,
  CustomerGroupUpdate,
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
export class CustomerGroupController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CustomerGroupDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CustomerGroupCreate) data: CustomerGroupCreateType,
    @Query(CustomerGroupProjection) projection: CustomerGroupProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CustomerGroupProjection) projection: CustomerGroupProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CustomerGroupQuery) query: CustomerGroupQueryType,
    @Query(CustomerGroupProjection) projection: CustomerGroupProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CustomerGroupProjection) projection: CustomerGroupProjectionType,
    @Body(CustomerGroupUpdate) data: CustomerGroupUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CustomerGroupProjection) projection: CustomerGroupProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
