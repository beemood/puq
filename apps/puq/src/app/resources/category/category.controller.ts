import type * as T from '@puq/models';
import { CategorySchema as S } from '@puq/models';
import * as N from '@puq/nest';
import { InjectRepository as Inject } from '@puq/prisma';
import { Prisma as P } from '@puq/prisma-puq';

@N.Controller()
export class CategoryController {
  static readonly fields = Object.keys(P.CategoryScalarFieldEnum);

  constructor(@Inject() protected readonly repo: P.CategoryDelegate) {}

  @N.CreateOne()
  async createOne(
    @N.Body(S.Create) data: T.CreateCategory,
    @N.Query(S.Select) select: T.SelectCategory
  ) {
    return await this.repo.create({
      data,
      ...select,
    });
  }

  @N.UpdateOne()
  async updateOne(
    @N.ParamId() id: number,
    @N.Body(S.Update) data: T.UpdateCategory,
    @N.Query(S.Select) select: T.SelectCategory
  ) {
    return await this.repo.update({ where: { id }, data, ...select });
  }

  @N.FindMany()
  async findMany(
    @N.Query(S.Query) query: T.QueryCategory,
    @N.Query(S.Select) select: T.SelectCategory
  ) {
    return await this.repo.findMany({ ...query, ...select });
  }

  @N.FindOneById()
  async findOneById(
    @N.ParamId() id: number,
    @N.Query(S.Select) select: T.SelectCategory
  ) {
    return await this.repo.findUnique({ where: { id }, ...select });
  }

  @N.DeleteMany()
  async deleteMany(@N.Query(S.DeleteMany) query: T.DeleteManyCategory) {
    return await this.repo.deleteMany(query);
  }

  @N.DeleteOneById()
  async deleteOneById(
    @N.ParamId() id: number,
    @N.Query(S.Select) select: T.SelectCategory
  ) {
    return await this.repo.delete({ where: { id }, ...select });
  }
}
