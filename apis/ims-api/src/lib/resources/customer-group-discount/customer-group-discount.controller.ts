import type { Prisma } from '@puq/ims-db';
import type {
  CustomerGroupDiscountCreateType,
  CustomerGroupDiscountProjectionType,
  CustomerGroupDiscountQueryType,
  CustomerGroupDiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  CustomerGroupDiscountCreate,
  CustomerGroupDiscountProjection,
  CustomerGroupDiscountQuery,
  CustomerGroupDiscountUpdate,
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
export class CustomerGroupDiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository()
    protected readonly repo: Prisma.CustomerGroupDiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CustomerGroupDiscountCreate) data: CustomerGroupDiscountCreateType,
    @Query(CustomerGroupDiscountProjection)
    projection: CustomerGroupDiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CustomerGroupDiscountProjection)
    projection: CustomerGroupDiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CustomerGroupDiscountQuery) query: CustomerGroupDiscountQueryType,
    @Query(CustomerGroupDiscountProjection)
    projection: CustomerGroupDiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CustomerGroupDiscountProjection)
    projection: CustomerGroupDiscountProjectionType,
    @Body(CustomerGroupDiscountUpdate) data: CustomerGroupDiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CustomerGroupDiscountProjection)
    projection: CustomerGroupDiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
