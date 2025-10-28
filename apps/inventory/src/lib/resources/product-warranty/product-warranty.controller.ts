import type { Prisma } from '@puq/inventory-db';
import type {
  ProductWarrantyCreate,
  ProductWarrantyProjection,
  ProductWarrantyQuery,
  ProductWarrantyUpdate,
} from '@puq/inventory-db/zod';
import {
  ProductWarrantyCreateSchema,
  ProductWarrantyProjectionSchema,
  ProductWarrantyQuerySchema,
  ProductWarrantyUpdateSchema,
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
export class ProductWarrantyController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductWarrantyDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ProductWarrantyCreateSchema) data: ProductWarrantyCreate,
    @Query(ProductWarrantyProjectionSchema)
    projection: ProductWarrantyProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ProductWarrantyProjectionSchema)
    projection: ProductWarrantyProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ProductWarrantyQuerySchema) query: ProductWarrantyQuery,
    @Query(ProductWarrantyProjectionSchema)
    projection: ProductWarrantyProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ProductWarrantyProjectionSchema)
    projection: ProductWarrantyProjection,
    @Body(ProductWarrantyUpdateSchema) data: ProductWarrantyUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ProductWarrantyProjectionSchema)
    projection: ProductWarrantyProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
