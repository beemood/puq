import type { Prisma } from '@puq/inventory-db';
import type {
  CategoryCreateType,
  CategoryProjectionType,
  CategoryQueryType,
  CategoryUpdateType,
} from '@puq/inventory-db/zod';
import {
  CategoryCreate,
  CategoryProjection,
  CategoryQuery,
  CategoryUpdate,
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
export class CategoryController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CategoryDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(CategoryCreate) data: CategoryCreateType,
    @Query(CategoryProjection) projection: CategoryProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CategoryProjection) projection: CategoryProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CategoryQuery) query: CategoryQueryType,
    @Query(CategoryProjection) projection: CategoryProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CategoryProjection) projection: CategoryProjectionType,
    @Body(CategoryUpdate) data: CategoryUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CategoryProjection) projection: CategoryProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
