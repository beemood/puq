import type { Prisma } from '@puq/inventory-db';
import type {
  ImageCreateType,
  ImageProjectionType,
  ImageQueryType,
  ImageUpdateType,
} from '@puq/inventory-db/zod';
import {
  ImageCreate,
  ImageProjection,
  ImageQuery,
  ImageUpdate,
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
export class ImageController extends AbstractResourceController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ImageDelegate
  ) {
    super();
  }

  override async saveOne(
    @Body(ImageCreate) data: ImageCreateType,
    @Query(ImageProjection) projection: ImageProjectionType
  ) {
    return await this.repo.create({ ...projection, data });
  }

  override async findOneById(
    @ParamId() id: number,
    @Query(ImageProjection) projection: ImageProjectionType
  ) {
    return await this.repo.findFirstOrThrow({ ...projection, where: { id } });
  }

  override async findMany(
    @Query(ImageQuery) query: ImageQueryType,
    @Query(ImageProjection) projection: ImageProjectionType
  ) {
    return await this.repo.findMany({ ...query, ...projection });
  }

  override updateOneById(
    @ParamId() id: number,
    @Query(ImageProjection) projection: ImageProjectionType,
    @Body(ImageUpdate) data: ImageUpdateType
  ) {
    return this.repo.update({ ...projection, where: { id }, data });
  }

  override async deleteOneById(
    @ParamId() id: number,
    @Query(ImageProjection) projection: ImageProjectionType
  ) {
    return await this.repo.delete({ ...projection, where: { id } });
  }
}
