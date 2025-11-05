import type { Prisma } from '@puq/inventory-db';
import type {
  EmployeeCreateType,
  EmployeeProjectionType,
  EmployeeQueryType,
  EmployeeUpdateType,
} from '@puq/inventory-db/zod';
import {
  EmployeeCreate,
  EmployeeProjection,
  EmployeeQuery,
  EmployeeUpdate,
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
export class EmployeeController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.EmployeeDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(EmployeeCreate) data: EmployeeCreateType,
    @Query(EmployeeProjection) projection: EmployeeProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(EmployeeProjection) projection: EmployeeProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(EmployeeQuery) query: EmployeeQueryType,
    @Query(EmployeeProjection) projection: EmployeeProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(EmployeeProjection) projection: EmployeeProjectionType,
    @Body(EmployeeUpdate) data: EmployeeUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(EmployeeProjection) projection: EmployeeProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
