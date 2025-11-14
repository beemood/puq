import type { Prisma } from '@puq/ims-db';
import type {
  CustomerDiscountCreateType,
  CustomerDiscountProjectionType,
  CustomerDiscountQueryType,
  CustomerDiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  CustomerDiscountCreate,
  CustomerDiscountProjection,
  CustomerDiscountQuery,
  CustomerDiscountUpdate,
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
export class CustomerDiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CustomerDiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CustomerDiscountCreate) data: CustomerDiscountCreateType,
    @Query(CustomerDiscountProjection)
    projection: CustomerDiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CustomerDiscountProjection)
    projection: CustomerDiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CustomerDiscountQuery) query: CustomerDiscountQueryType,
    @Query(CustomerDiscountProjection)
    projection: CustomerDiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CustomerDiscountProjection)
    projection: CustomerDiscountProjectionType,
    @Body(CustomerDiscountUpdate) data: CustomerDiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CustomerDiscountProjection)
    projection: CustomerDiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
