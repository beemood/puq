import type * as T from '@puq/models';
import { ProductSchema as S } from '@puq/models';
import * as N from '@puq/nest';
import { InjectRepository as Inject } from '@puq/prisma';
import { Prisma as P } from '@puq/prisma-puq';

@N.Controller()
export class ProductController {
  static readonly fields = Object.keys(P.ProductScalarFieldEnum);

  constructor(@Inject() protected readonly repo: P.ProductDelegate) {}

  @N.CreateOne()
  async createOne(
    @N.Body(S.Create) data: T.CreateProduct,
    @N.Query(S.QuerySelect) select: T.SelectProduct
  ) {
    return await this.repo.create({ data, ...select });
  }

  @N.FindMany()
  async findMany(@N.Query(S.QueryMany) query: T.QueryManyProduct) {
    return await this.repo.findMany(query);
  }

  @N.FindOneById()
  async findOneById(
    @N.ParamId() id: number,
    @N.Query(S.Select) select: T.SelectProduct
  ) {
    return await this.repo.findUnique({ where: { id }, ...select });
  }

  @N.UpdateOne()
  async updateOne(
    @N.ParamId() id: number,
    @N.Body(S.Update) data: T.UpdateProduct,
    @N.Query(S.Select) select: T.SelectProduct
  ) {
    return await this.repo.update({ where: { id }, data, ...select });
  }

  @N.DeleteOneById()
  async deleteOneById(
    @N.ParamId() id: number,
    @N.Query(S.Select) select: T.SelectProduct
  ) {
    return await this.repo.delete({ where: { id }, ...select });
  }

  @N.DeleteMany()
  async deleteMany(@N.Query(S.DeleteMany) query: T.DeleteManyProduct) {
    return await this.repo.deleteMany(query);
  }
}
