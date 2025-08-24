import { Prisma } from '@puq/prisma-puq';
import {
  DateFilterDto,
  Dto,
  IntFilterDto,
  StringFilterDto,
  IntFilterProp,
  StringFilterProp,
  NumberFilterProp,
  DateFilterProp,
  NumberFilterDto,
  WhereObjectListProp,
  WhereObjectProp,
  OrderByProp,
  DistictProp,
  TakeProp,
  SkipProp,
  SelectProp,
} from '@puq/prop';
import { CategoryWhereInputDto } from '../../category/category-find-args.dto';

@Dto()
export class ProductSelectDto implements Prisma.ProductSelect {
  @SelectProp() id?: boolean;
  @SelectProp() productId?: boolean;
  @SelectProp() createdAt?: boolean;
  @SelectProp() updatedAt?: boolean;
  @SelectProp() deletedAt?: boolean;
  @SelectProp() name?: boolean;
  @SelectProp() description?: boolean;
  @SelectProp() upc?: boolean;
  @SelectProp() cost?: boolean;
  @SelectProp() price?: boolean;
  @SelectProp() categoryId?: boolean;
  @SelectProp() category?: boolean;
}

@Dto()
export class ProductOmitDto extends ProductSelectDto {}

@Dto()
export class ProductIncludeDto implements Prisma.ProductInclude {
  @SelectProp() category?: boolean;
}

@Dto()
export class ProductWhereInputDto implements Prisma.ProductWhereInput {
  @WhereObjectListProp(() => ProductWhereInputDto) AND?: ProductWhereInputDto[];
  @WhereObjectListProp(() => ProductWhereInputDto) OR?: ProductWhereInputDto[];
  @WhereObjectListProp(() => ProductWhereInputDto) NOT?: ProductWhereInputDto[];
  @IntFilterProp() id?: IntFilterDto;
  @StringFilterProp() productId?: StringFilterDto;
  @DateFilterProp() createdAt?: DateFilterDto;
  @DateFilterProp() updatedAt?: DateFilterDto;
  @DateFilterProp() deletedAt?: DateFilterDto;

  @StringFilterProp() name?: StringFilterDto;
  @StringFilterProp() description?: StringFilterDto;
  @StringFilterProp() upc?: StringFilterDto;
  @NumberFilterProp() cost?: NumberFilterDto;
  @NumberFilterProp() price?: NumberFilterDto;
  @IntFilterProp() categoryId?: IntFilterDto;

  @WhereObjectProp(() => CategoryWhereInputDto)
  category?: CategoryWhereInputDto;
}

@Dto()
export class ProductOrderByDto
  implements Prisma.ProductOrderByWithAggregationInput
{
  @OrderByProp() id?: Prisma.SortOrder;
  @OrderByProp() productId?: Prisma.SortOrder;
  @OrderByProp() createdAt?: Prisma.SortOrder;
  @OrderByProp() updatedAt?: Prisma.SortOrder;
  @OrderByProp() deletedAt?: Prisma.SortOrder | Prisma.SortOrderInput;
  @OrderByProp() name?: Prisma.SortOrder;
  @OrderByProp() description?: Prisma.SortOrder;
  @OrderByProp() upc?: Prisma.SortOrder;
  @OrderByProp() cost?: Prisma.SortOrder;
  @OrderByProp() price?: Prisma.SortOrder;
  @OrderByProp() categoryId?: Prisma.SortOrder | Prisma.SortOrderInput;
}

export class ProductSelectorDto {
  @WhereObjectProp(() => ProductSelectDto) select?: ProductSelectDto;
  @WhereObjectProp(() => ProductOmitDto) omit?: ProductOmitDto;
  @WhereObjectProp(() => ProductIncludeDto) include?: ProductIncludeDto;
}

@Dto()
export class ProductFindManyArgsDto
  extends ProductSelectorDto
  implements Prisma.ProductFindManyArgs
{
  @WhereObjectProp(() => ProductWhereInputDto) where?: ProductWhereInputDto;
  @WhereObjectProp(() => ProductOrderByDto) orderBy?: ProductOrderByDto;

  @TakeProp() take?: number;
  @SkipProp() skip?: number;

  @DistictProp(Prisma.ProductScalarFieldEnum)
  distinct?: Prisma.ProductScalarFieldEnum;
}
