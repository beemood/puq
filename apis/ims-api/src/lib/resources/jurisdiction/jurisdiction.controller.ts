import type { Prisma } from '@puq/ims-db';
import type {
  JurisdictionCreateType,
  JurisdictionProjectionType,
  JurisdictionQueryType,
  JurisdictionUpdateType,
} from '@puq/ims-db/zod';
import {
  JurisdictionCreate,
  JurisdictionProjection,
  JurisdictionQuery,
  JurisdictionUpdate,
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
export class JurisdictionController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.JurisdictionDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(JurisdictionCreate) data: JurisdictionCreateType,
    @Query(JurisdictionProjection) projection: JurisdictionProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(JurisdictionProjection) projection: JurisdictionProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(JurisdictionQuery) query: JurisdictionQueryType,
    @Query(JurisdictionProjection) projection: JurisdictionProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(JurisdictionProjection) projection: JurisdictionProjectionType,
    @Body(JurisdictionUpdate) data: JurisdictionUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(JurisdictionProjection) projection: JurisdictionProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
