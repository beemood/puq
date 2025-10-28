import type { Prisma } from '@puq/inventory-db';
import type {
  WarrantyPolicyCreate,
  WarrantyPolicyProjection,
  WarrantyPolicyQuery,
  WarrantyPolicyUpdate,
} from '@puq/inventory-db/zod';
import {
  WarrantyPolicyCreateSchema,
  WarrantyPolicyProjectionSchema,
  WarrantyPolicyQuerySchema,
  WarrantyPolicyUpdateSchema,
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
export class WarrantyPolicyController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.WarrantyPolicyDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(WarrantyPolicyCreateSchema) data: WarrantyPolicyCreate,
    @Query(WarrantyPolicyProjectionSchema) projection: WarrantyPolicyProjection
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(WarrantyPolicyProjectionSchema) projection: WarrantyPolicyProjection
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(WarrantyPolicyQuerySchema) query: WarrantyPolicyQuery,
    @Query(WarrantyPolicyProjectionSchema) projection: WarrantyPolicyProjection
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(WarrantyPolicyProjectionSchema) projection: WarrantyPolicyProjection,
    @Body(WarrantyPolicyUpdateSchema) data: WarrantyPolicyUpdate
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(WarrantyPolicyProjectionSchema) projection: WarrantyPolicyProjection
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
