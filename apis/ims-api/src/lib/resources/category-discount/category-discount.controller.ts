import type { Prisma } from '@puq/ims-db';
import type {
  CategoryDiscountCreateType,
  CategoryDiscountProjectionType,
  CategoryDiscountQueryType,
  CategoryDiscountUpdateType,
} from '@puq/ims-db/zod';
import {
  CategoryDiscountCreate,
  CategoryDiscountProjection,
  CategoryDiscountQuery,
  CategoryDiscountUpdate,
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
export class CategoryDiscountController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CategoryDiscountDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CategoryDiscountCreate) data: CategoryDiscountCreateType,
    @Query(CategoryDiscountProjection)
    projection: CategoryDiscountProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CategoryDiscountProjection)
    projection: CategoryDiscountProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CategoryDiscountQuery) query: CategoryDiscountQueryType,
    @Query(CategoryDiscountProjection)
    projection: CategoryDiscountProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CategoryDiscountProjection)
    projection: CategoryDiscountProjectionType,
    @Body(CategoryDiscountUpdate) data: CategoryDiscountUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CategoryDiscountProjection)
    projection: CategoryDiscountProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
