import { Prisma } from '@puq/prisma-puq';
import { Dto, Prop } from '@puq/prop';

@Dto()
export class CreateProductDto implements Prisma.ProductUncheckedCreateInput {
  @Prop({ type: 'string', required: true }) name: string;
  @Prop({ type: 'string', defaultValue: '' }) description: string;
  @Prop({ type: 'string', required: true }) upc: string;
  @Prop({ type: 'number', minimum: 0, required: true }) cost: number;
  @Prop({ type: 'number', minimum: 0, required: true }) price: number;
  @Prop({ type: 'integer' }) categoryId?: number;
}

@Dto()
export class UpdateProductDto implements Prisma.ProductUncheckedUpdateInput {
  @Prop({ type: 'string' }) productId?: string;
  @Prop({ type: 'string' }) name?: string;
  @Prop({ type: 'string' }) description?: string;
  @Prop({ type: 'string' }) upc?: string;
  @Prop({ type: 'number' }) cost?: number;
  @Prop({ type: 'number' }) price?: number;
  @Prop({ type: 'integer' }) categoryId?: number;
}
