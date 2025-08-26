/* eslint-disable @nx/enforce-module-boundaries */

import { Body, Param, Query } from '@nestjs/common';

import {
  CreateCategorySchema,
  UpdateCategorySchema,
  WhereCategorySchema,
} from '@puq/models';
import {
  Controller,
  CreateOne,
  DeleteMany,
  DeleteOneById,
  FindMany,
  FindOneById,
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
  createOne(@Body() data: any) {
    data = CreateCategorySchema.parse(data);
    return this.repo.create({ data });
  }

  @UpdateOne()
  updateOne(@Param('id') id: number, @Body() data: any) {
    data = UpdateCategorySchema.parse(data);
    return this.repo.update({ where: { id }, data });
  }

  @FindMany()
  findMany(@Query() query: any) {
    const where = WhereCategorySchema.parse(query);
    return this.repo.findMany({ where });
  }

  @FindOneById()
  findOneById(@Param('id') id: number) {
    return this.repo.findUnique({ where: { id } });
  }

  @DeleteMany()
  deleteMany(@Query() query: any) {
    const where = WhereCategorySchema.parse(query);

    return this.repo.deleteMany({ where });
  }

  @DeleteOneById()
  deleteOneById(@Param('id') id: number) {
    return this.repo.delete({ where: { id } });
  }
}
