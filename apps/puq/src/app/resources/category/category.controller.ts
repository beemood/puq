import type {
  CategoryFields,
  CreateCategory,
  DeleteManyCategory,
  QueryCategory,
  UpdateCategory,
} from '@puq/models';
import {
  CategoryFieldsSchema,
  CreateCategorySchema,
  DeleteManyCategorySchema,
  QueryCategorySchema,
  UpdateCategorySchema,
} from '@puq/models';
import {
  Body,
  Controller,
  CreateOne,
  DeleteMany,
  DeleteOneById,
  FindMany,
  FindOneById,
  ParamId,
  Query,
  UpdateOne,
} from '@puq/nest';
import { InjectRepository } from '@puq/prisma';
import { Prisma } from '@puq/prisma-puq';

@Controller()
export class CategoryController {
  static readonly fields = Object.keys(Prisma.CategoryScalarFieldEnum);

  constructor(
    @InjectRepository('category')
    public readonly repo: Prisma.CategoryDelegate
  ) {}

  @CreateOne()
  createOne(
    @Body(CreateCategorySchema) data: CreateCategory,
    @Query(CategoryFieldsSchema) fields: CategoryFields
  ) {
    return this.repo.create({ data, ...fields });
  }

  @UpdateOne()
  updateOne(
    @ParamId() id: number,
    @Body(UpdateCategorySchema) data: UpdateCategory,
    @Query(CategoryFieldsSchema) fields: CategoryFields
  ) {
    return this.repo.update({ where: { id }, data, ...fields });
  }

  @FindMany()
  findMany(@Query(QueryCategorySchema) query: QueryCategory) {
    return this.repo.findMany({ ...query });
  }

  @FindOneById()
  findOneById(
    @ParamId() id: number,
    @Query(CategoryFieldsSchema) fields: CategoryFields
  ) {
    return this.repo.findUnique({ where: { id }, ...fields });
  }

  @DeleteMany()
  deleteMany(@Query(DeleteManyCategorySchema) query: DeleteManyCategory) {
    return this.repo.deleteMany({ ...query });
  }

  @DeleteOneById()
  deleteOneById(
    @ParamId() id: number,
    @Query(CategoryFieldsSchema) fields: CategoryFields
  ) {
    return this.repo.delete({ where: { id }, ...fields });
  }
}
