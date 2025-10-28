import type { Prisma } from '@puq/inventory-db';
import type {
  CategoryCreate,
  CategoryProjection,
  CategoryQuery,
  CategoryUpdate,
} from '@puq/inventory-db/zod';
import {
  CategoryCreateSchema,
  CategoryProjectionSchema,
  CategoryQuerySchema,
  CategoryUpdateSchema,
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
    @Body(CategoryCreateSchema) data: CategoryCreate,
    @Query(CategoryProjectionSchema) projection: CategoryProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(CategoryProjectionSchema) projection: CategoryProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(CategoryQuerySchema) query: CategoryQuery,
    @Query(CategoryProjectionSchema) projection: CategoryProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(CategoryProjectionSchema) projection: CategoryProjection,
    @Body(CategoryUpdateSchema) data: CategoryUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(CategoryProjectionSchema) projection: CategoryProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
