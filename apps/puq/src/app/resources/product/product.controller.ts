import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@puq/prisma';
import { Prisma } from '@puq/prisma-puq';
import {
  ProductFindManyArgsDto,
  ProductSelectorDto,
} from './dto/query-product.dto';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository('product') protected readonly repo: Prisma.ProductDelegate
  ) {}

  @Post()
  create(@Body() data: CreateProductDto, @Query() query: ProductSelectorDto) {
    return this.repo.create({ ...query, data });
  }

  @Get()
  findAll(@Query() query: ProductFindManyArgsDto) {
    return this.repo.findMany(query);
  }

  @Get(':id')
  findOneById(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: ProductSelectorDto
  ) {
    return this.repo.findUnique({ ...query, where: { id } });
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProductDto,
    @Query() query: ProductSelectorDto
  ) {
    return this.repo.update({ ...query, where: { id }, data });
  }

  @Delete(':id')
  delete(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: ProductSelectorDto
  ) {
    return this.repo.delete({ ...query, where: { id } });
  }
}
