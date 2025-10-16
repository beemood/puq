/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();

export const PaginationSchema = z
  .object({
    take: takeSchema,
    skip: skipSchema,
  })
  .partial();

export function jsonParser<T>(value: T) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
  return value;
}

export function slugTransformer(key: string) {
  return (value: any) => {
    if (value.slug == undefined && value[key] != undefined) {
      return {
        ...value,
        slug: value[key] ? slugify(value[key].toString()) : null,
      };
    }
    return value;
  };
}

export const RequestStatusSchema = z.enum([
  'PENDING',
  'APPROVED',
  'REJECTED',
  'CANCELED',
]);

export const RoomAttributeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean(),
  })
  .partial();

export const RoomAttributeOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeOwnProjectionSchema
);

export const RoomAttributeValueOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean(),
    room: z.boolean(),
  })
  .partial();

export const RoomAttributeValueOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueOwnProjectionSchema
);

export const ItemAttributeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean(),
  })
  .partial();

export const ItemAttributeOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeOwnProjectionSchema
);

export const ItemAttributeValueOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    itemId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean(),
    item: z.boolean(),
  })
  .partial();

export const ItemAttributeValueOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueOwnProjectionSchema
);

export const CategoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    parent: z.boolean(),
    children: z.boolean(),
    items: z.boolean(),
  })
  .partial();

export const CategoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnProjectionSchema
);

export const BuildingOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    rooms: z.boolean(),
  })
  .partial();

export const BuildingOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  BuildingOwnProjectionSchema
);

export const RoomOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    buildingId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    floor: z.boolean(),
    building: z.boolean(),
    attributes: z.boolean(),
    quantities: z.boolean(),
    serials: z.boolean(),
    employeeRooms: z.boolean(),
    employeeRoomRequests: z.boolean(),
  })
  .partial();

export const RoomOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoomOwnProjectionSchema
);

export const ItemOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    categoryId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    minQuantity: z.boolean(),
    category: z.boolean(),
    attributes: z.boolean(),
    quantities: z.boolean(),
    serials: z.boolean(),
  })
  .partial();

export const ItemOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ItemOwnProjectionSchema
);

export const QuantityOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    itemId: z.boolean(),
    quantity: z.boolean(),
    minQuantity: z.boolean(),
    item: z.boolean(),
    room: z.boolean(),
    quantityMoveSources: z.boolean(),
    quantityMoveTargets: z.boolean(),
  })
  .partial();

export const QuantityOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnProjectionSchema
);

export const SerialNumberOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    serialNumber: z.boolean(),
    itemId: z.boolean(),
    roomId: z.boolean(),
    item: z.boolean(),
    room: z.boolean(),
    serialMoveSources: z.boolean(),
    serialMoveTargets: z.boolean(),
    employeeItemRequests: z.boolean(),
    employeeItems: z.boolean(),
  })
  .partial();

export const SerialNumberOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnProjectionSchema
);

export const QuantityMoveRequestOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    sourceId: z.boolean(),
    targetId: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    quantity: z.boolean(),
    reason: z.boolean(),
    status: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    source: z.boolean(),
    target: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const QuantityMoveRequestOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestOwnProjectionSchema
);

export const SerialMoveRequestOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    sourceId: z.boolean(),
    targetId: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    reason: z.boolean(),
    status: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    source: z.boolean(),
    target: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const SerialMoveRequestOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestOwnProjectionSchema
);

export const EmployeeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    rooms: z.boolean(),
    items: z.boolean(),
    itemRequesters: z.boolean(),
    itemResolvers: z.boolean(),
    roomRequesters: z.boolean(),
    roomResolvers: z.boolean(),
    serialMoveRequesters: z.boolean(),
    serialMoveResolvers: z.boolean(),
    quantityMoveRequesters: z.boolean(),
    quantityMoveResolvers: z.boolean(),
  })
  .partial();

export const EmployeeOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnProjectionSchema
);

export const EmployeeRoomOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    roomId: z.boolean(),
    givenAt: z.boolean(),
    takenAt: z.boolean(),
    room: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const EmployeeRoomOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomOwnProjectionSchema
);

export const EmployeeItemOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    serialNumberId: z.boolean(),
    givenAt: z.boolean(),
    takenAt: z.boolean(),
    serialNumber: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const EmployeeItemOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemOwnProjectionSchema
);

export const EmployeeRoomRequestOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    status: z.boolean(),
    note: z.boolean(),
    room: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const EmployeeRoomRequestOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestOwnProjectionSchema
);

export const EmployeeItemRequestOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    serialNumberId: z.boolean(),
    status: z.boolean(),
    note: z.boolean(),
    serialNumber: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const EmployeeItemRequestOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestOwnProjectionSchema
);

export const RoomAttributeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const RoomAttributeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeOwnWhereSchema
);

export const RoomAttributeValueOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    value: PZ.StringFilterSchema,
  })
  .partial();

export const RoomAttributeValueOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueOwnWhereSchema
);

export const ItemAttributeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const ItemAttributeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeOwnWhereSchema
);

export const ItemAttributeValueOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    value: PZ.StringFilterSchema,
  })
  .partial();

export const ItemAttributeValueOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueOwnWhereSchema
);

export const CategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnWhereSchema
);

export const BuildingOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const BuildingOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  BuildingOwnWhereSchema
);

export const RoomOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    buildingId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    floor: PZ.IntegerFilterSchema,
  })
  .partial();

export const RoomOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomOwnWhereSchema
);

export const ItemOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
  })
  .partial();

export const ItemOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemOwnWhereSchema
);

export const QuantityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
  })
  .partial();

export const QuantityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnWhereSchema
);

export const SerialNumberOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    serialNumber: PZ.StringFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
  })
  .partial();

export const SerialNumberOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnWhereSchema
);

export const QuantityMoveRequestOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sourceId: PZ.IntegerFilterSchema,
    targetId: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    reason: PZ.StringFilterSchema,
    status: RequestStatusSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const QuantityMoveRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestOwnWhereSchema
);

export const SerialMoveRequestOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sourceId: PZ.IntegerFilterSchema,
    targetId: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    reason: PZ.StringFilterSchema,
    status: RequestStatusSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const SerialMoveRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestOwnWhereSchema
);

export const EmployeeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
  })
  .partial();

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnWhereSchema
);

export const EmployeeRoomOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    givenAt: PZ.DateTimeFilterSchema,
    takenAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const EmployeeRoomOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomOwnWhereSchema
);

export const EmployeeItemOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    serialNumberId: PZ.IntegerFilterSchema,
    givenAt: PZ.DateTimeFilterSchema,
    takenAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const EmployeeItemOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemOwnWhereSchema
);

export const EmployeeRoomRequestOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    status: RequestStatusSchema,
    note: PZ.StringFilterSchema,
  })
  .partial();

export const EmployeeRoomRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestOwnWhereSchema
);

export const EmployeeItemRequestOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    serialNumberId: PZ.IntegerFilterSchema,
    status: RequestStatusSchema,
    note: PZ.StringFilterSchema,
  })
  .partial();

export const EmployeeItemRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestOwnWhereSchema
);

export const RoomAttributeOwnIncludeSchema = z
  .object({
    values: z.boolean(),
  })
  .partial();

export const RoomAttributeOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeOwnIncludeSchema
);

export const RoomAttributeOwnQueryOneSchema = z
  .object({
    where: RoomAttributeOwnWhereSchemaJson,
    select: RoomAttributeOwnProjectionSchemaJson,
    omit: RoomAttributeOwnProjectionSchemaJson,
    include: RoomAttributeOwnIncludeSchemaJson,
  })
  .partial();

export const RoomAttributeOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoomAttributeOwnWhereSchemaJson,
    select: RoomAttributeOwnProjectionSchemaJson,
    omit: RoomAttributeOwnProjectionSchemaJson,
    include: RoomAttributeOwnIncludeSchemaJson,
  })
  .partial();

export const RoomAttributeValueOwnIncludeSchema = z
  .object({
    attribute: z.boolean(),
    room: z.boolean(),
  })
  .partial();

export const RoomAttributeValueOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueOwnIncludeSchema
);

export const RoomAttributeValueOwnQueryOneSchema = z
  .object({
    where: RoomAttributeValueOwnWhereSchemaJson,
    select: RoomAttributeValueOwnProjectionSchemaJson,
    omit: RoomAttributeValueOwnProjectionSchemaJson,
    include: RoomAttributeValueOwnIncludeSchemaJson,
  })
  .partial();

export const RoomAttributeValueOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoomAttributeValueOwnWhereSchemaJson,
    select: RoomAttributeValueOwnProjectionSchemaJson,
    omit: RoomAttributeValueOwnProjectionSchemaJson,
    include: RoomAttributeValueOwnIncludeSchemaJson,
  })
  .partial();

export const ItemAttributeOwnIncludeSchema = z
  .object({
    values: z.boolean(),
  })
  .partial();

export const ItemAttributeOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeOwnIncludeSchema
);

export const ItemAttributeOwnQueryOneSchema = z
  .object({
    where: ItemAttributeOwnWhereSchemaJson,
    select: ItemAttributeOwnProjectionSchemaJson,
    omit: ItemAttributeOwnProjectionSchemaJson,
    include: ItemAttributeOwnIncludeSchemaJson,
  })
  .partial();

export const ItemAttributeOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ItemAttributeOwnWhereSchemaJson,
    select: ItemAttributeOwnProjectionSchemaJson,
    omit: ItemAttributeOwnProjectionSchemaJson,
    include: ItemAttributeOwnIncludeSchemaJson,
  })
  .partial();

export const ItemAttributeValueOwnIncludeSchema = z
  .object({
    attribute: z.boolean(),
    item: z.boolean(),
  })
  .partial();

export const ItemAttributeValueOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueOwnIncludeSchema
);

export const ItemAttributeValueOwnQueryOneSchema = z
  .object({
    where: ItemAttributeValueOwnWhereSchemaJson,
    select: ItemAttributeValueOwnProjectionSchemaJson,
    omit: ItemAttributeValueOwnProjectionSchemaJson,
    include: ItemAttributeValueOwnIncludeSchemaJson,
  })
  .partial();

export const ItemAttributeValueOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ItemAttributeValueOwnWhereSchemaJson,
    select: ItemAttributeValueOwnProjectionSchemaJson,
    omit: ItemAttributeValueOwnProjectionSchemaJson,
    include: ItemAttributeValueOwnIncludeSchemaJson,
  })
  .partial();

export const CategoryOwnIncludeSchema = z
  .object({
    parent: z.boolean(),
    children: z.boolean(),
    items: z.boolean(),
  })
  .partial();

export const CategoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnIncludeSchema
);

export const CategoryOwnQueryOneSchema = z
  .object({
    where: CategoryOwnWhereSchemaJson,
    select: CategoryOwnProjectionSchemaJson,
    omit: CategoryOwnProjectionSchemaJson,
    include: CategoryOwnIncludeSchemaJson,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CategoryOwnWhereSchemaJson,
    select: CategoryOwnProjectionSchemaJson,
    omit: CategoryOwnProjectionSchemaJson,
    include: CategoryOwnIncludeSchemaJson,
  })
  .partial();

export const BuildingOwnIncludeSchema = z
  .object({
    rooms: z.boolean(),
  })
  .partial();

export const BuildingOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  BuildingOwnIncludeSchema
);

export const BuildingOwnQueryOneSchema = z
  .object({
    where: BuildingOwnWhereSchemaJson,
    select: BuildingOwnProjectionSchemaJson,
    omit: BuildingOwnProjectionSchemaJson,
    include: BuildingOwnIncludeSchemaJson,
  })
  .partial();

export const BuildingOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: BuildingOwnWhereSchemaJson,
    select: BuildingOwnProjectionSchemaJson,
    omit: BuildingOwnProjectionSchemaJson,
    include: BuildingOwnIncludeSchemaJson,
  })
  .partial();

export const RoomOwnIncludeSchema = z
  .object({
    building: z.boolean(),
    attributes: z.boolean(),
    quantities: z.boolean(),
    serials: z.boolean(),
    employeeRooms: z.boolean(),
    employeeRoomRequests: z.boolean(),
  })
  .partial();

export const RoomOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoomOwnIncludeSchema
);

export const RoomOwnQueryOneSchema = z
  .object({
    where: RoomOwnWhereSchemaJson,
    select: RoomOwnProjectionSchemaJson,
    omit: RoomOwnProjectionSchemaJson,
    include: RoomOwnIncludeSchemaJson,
  })
  .partial();

export const RoomOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoomOwnWhereSchemaJson,
    select: RoomOwnProjectionSchemaJson,
    omit: RoomOwnProjectionSchemaJson,
    include: RoomOwnIncludeSchemaJson,
  })
  .partial();

export const ItemOwnIncludeSchema = z
  .object({
    category: z.boolean(),
    attributes: z.boolean(),
    quantities: z.boolean(),
    serials: z.boolean(),
  })
  .partial();

export const ItemOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ItemOwnIncludeSchema
);

export const ItemOwnQueryOneSchema = z
  .object({
    where: ItemOwnWhereSchemaJson,
    select: ItemOwnProjectionSchemaJson,
    omit: ItemOwnProjectionSchemaJson,
    include: ItemOwnIncludeSchemaJson,
  })
  .partial();

export const ItemOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ItemOwnWhereSchemaJson,
    select: ItemOwnProjectionSchemaJson,
    omit: ItemOwnProjectionSchemaJson,
    include: ItemOwnIncludeSchemaJson,
  })
  .partial();

export const QuantityOwnIncludeSchema = z
  .object({
    item: z.boolean(),
    room: z.boolean(),
    quantityMoveSources: z.boolean(),
    quantityMoveTargets: z.boolean(),
  })
  .partial();

export const QuantityOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnIncludeSchema
);

export const QuantityOwnQueryOneSchema = z
  .object({
    where: QuantityOwnWhereSchemaJson,
    select: QuantityOwnProjectionSchemaJson,
    omit: QuantityOwnProjectionSchemaJson,
    include: QuantityOwnIncludeSchemaJson,
  })
  .partial();

export const QuantityOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: QuantityOwnWhereSchemaJson,
    select: QuantityOwnProjectionSchemaJson,
    omit: QuantityOwnProjectionSchemaJson,
    include: QuantityOwnIncludeSchemaJson,
  })
  .partial();

export const SerialNumberOwnIncludeSchema = z
  .object({
    item: z.boolean(),
    room: z.boolean(),
    serialMoveSources: z.boolean(),
    serialMoveTargets: z.boolean(),
    employeeItemRequests: z.boolean(),
    employeeItems: z.boolean(),
  })
  .partial();

export const SerialNumberOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnIncludeSchema
);

export const SerialNumberOwnQueryOneSchema = z
  .object({
    where: SerialNumberOwnWhereSchemaJson,
    select: SerialNumberOwnProjectionSchemaJson,
    omit: SerialNumberOwnProjectionSchemaJson,
    include: SerialNumberOwnIncludeSchemaJson,
  })
  .partial();

export const SerialNumberOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SerialNumberOwnWhereSchemaJson,
    select: SerialNumberOwnProjectionSchemaJson,
    omit: SerialNumberOwnProjectionSchemaJson,
    include: SerialNumberOwnIncludeSchemaJson,
  })
  .partial();

export const QuantityMoveRequestOwnIncludeSchema = z
  .object({
    source: z.boolean(),
    target: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const QuantityMoveRequestOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestOwnIncludeSchema
);

export const QuantityMoveRequestOwnQueryOneSchema = z
  .object({
    where: QuantityMoveRequestOwnWhereSchemaJson,
    select: QuantityMoveRequestOwnProjectionSchemaJson,
    omit: QuantityMoveRequestOwnProjectionSchemaJson,
    include: QuantityMoveRequestOwnIncludeSchemaJson,
  })
  .partial();

export const QuantityMoveRequestOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: QuantityMoveRequestOwnWhereSchemaJson,
    select: QuantityMoveRequestOwnProjectionSchemaJson,
    omit: QuantityMoveRequestOwnProjectionSchemaJson,
    include: QuantityMoveRequestOwnIncludeSchemaJson,
  })
  .partial();

export const SerialMoveRequestOwnIncludeSchema = z
  .object({
    source: z.boolean(),
    target: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const SerialMoveRequestOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestOwnIncludeSchema
);

export const SerialMoveRequestOwnQueryOneSchema = z
  .object({
    where: SerialMoveRequestOwnWhereSchemaJson,
    select: SerialMoveRequestOwnProjectionSchemaJson,
    omit: SerialMoveRequestOwnProjectionSchemaJson,
    include: SerialMoveRequestOwnIncludeSchemaJson,
  })
  .partial();

export const SerialMoveRequestOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SerialMoveRequestOwnWhereSchemaJson,
    select: SerialMoveRequestOwnProjectionSchemaJson,
    omit: SerialMoveRequestOwnProjectionSchemaJson,
    include: SerialMoveRequestOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeOwnIncludeSchema = z
  .object({
    rooms: z.boolean(),
    items: z.boolean(),
    itemRequesters: z.boolean(),
    itemResolvers: z.boolean(),
    roomRequesters: z.boolean(),
    roomResolvers: z.boolean(),
    serialMoveRequesters: z.boolean(),
    serialMoveResolvers: z.boolean(),
    quantityMoveRequesters: z.boolean(),
    quantityMoveResolvers: z.boolean(),
  })
  .partial();

export const EmployeeOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnIncludeSchema
);

export const EmployeeOwnQueryOneSchema = z
  .object({
    where: EmployeeOwnWhereSchemaJson,
    select: EmployeeOwnProjectionSchemaJson,
    omit: EmployeeOwnProjectionSchemaJson,
    include: EmployeeOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeOwnWhereSchemaJson,
    select: EmployeeOwnProjectionSchemaJson,
    omit: EmployeeOwnProjectionSchemaJson,
    include: EmployeeOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeRoomOwnIncludeSchema = z
  .object({
    room: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const EmployeeRoomOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomOwnIncludeSchema
);

export const EmployeeRoomOwnQueryOneSchema = z
  .object({
    where: EmployeeRoomOwnWhereSchemaJson,
    select: EmployeeRoomOwnProjectionSchemaJson,
    omit: EmployeeRoomOwnProjectionSchemaJson,
    include: EmployeeRoomOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeRoomOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeRoomOwnWhereSchemaJson,
    select: EmployeeRoomOwnProjectionSchemaJson,
    omit: EmployeeRoomOwnProjectionSchemaJson,
    include: EmployeeRoomOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeItemOwnIncludeSchema = z
  .object({
    serialNumber: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const EmployeeItemOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemOwnIncludeSchema
);

export const EmployeeItemOwnQueryOneSchema = z
  .object({
    where: EmployeeItemOwnWhereSchemaJson,
    select: EmployeeItemOwnProjectionSchemaJson,
    omit: EmployeeItemOwnProjectionSchemaJson,
    include: EmployeeItemOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeItemOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeItemOwnWhereSchemaJson,
    select: EmployeeItemOwnProjectionSchemaJson,
    omit: EmployeeItemOwnProjectionSchemaJson,
    include: EmployeeItemOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeRoomRequestOwnIncludeSchema = z
  .object({
    room: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const EmployeeRoomRequestOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestOwnIncludeSchema
);

export const EmployeeRoomRequestOwnQueryOneSchema = z
  .object({
    where: EmployeeRoomRequestOwnWhereSchemaJson,
    select: EmployeeRoomRequestOwnProjectionSchemaJson,
    omit: EmployeeRoomRequestOwnProjectionSchemaJson,
    include: EmployeeRoomRequestOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeRoomRequestOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeRoomRequestOwnWhereSchemaJson,
    select: EmployeeRoomRequestOwnProjectionSchemaJson,
    omit: EmployeeRoomRequestOwnProjectionSchemaJson,
    include: EmployeeRoomRequestOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeItemRequestOwnIncludeSchema = z
  .object({
    serialNumber: z.boolean(),
    requestedBy: z.boolean(),
    resolvedBy: z.boolean(),
  })
  .partial();

export const EmployeeItemRequestOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestOwnIncludeSchema
);

export const EmployeeItemRequestOwnQueryOneSchema = z
  .object({
    where: EmployeeItemRequestOwnWhereSchemaJson,
    select: EmployeeItemRequestOwnProjectionSchemaJson,
    omit: EmployeeItemRequestOwnProjectionSchemaJson,
    include: EmployeeItemRequestOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeItemRequestOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeItemRequestOwnWhereSchemaJson,
    select: EmployeeItemRequestOwnProjectionSchemaJson,
    omit: EmployeeItemRequestOwnProjectionSchemaJson,
    include: EmployeeItemRequestOwnIncludeSchemaJson,
  })
  .partial();

export const RoomAttributeCreateSchema = z.object({
  name: z.string(),
});

export const RoomAttributeUpdateSchema = z.object({
  name: z.string().optional(),
});

export const RoomAttributeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const RoomAttributeOrderBySchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeOrderBySchema
);

export const RoomAttributeWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    values: z
      .object({
        some: RoomAttributeValueOwnWhereSchema,
        every: RoomAttributeValueOwnWhereSchema,
        none: RoomAttributeValueOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const RoomAttributeWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeWhereSchema
);

export const RoomAttributeProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean().or(RoomAttributeValueOwnQuerySchema),
  })
  .partial();

export const RoomAttributeProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeProjectionSchema
);

export const RoomAttributeIncludeSchema = z
  .object({
    values: z.boolean().or(RoomAttributeValueOwnQuerySchema),
  })
  .partial();

export const RoomAttributeIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeIncludeSchema
);

export const RoomAttributeValueCreateSchema = z.object({
  roomId: z.int(),
  attributeId: z.int(),
  value: z.string(),
});

export const RoomAttributeValueUpdateSchema = z.object({
  roomId: z.int().optional(),
  attributeId: z.int().optional(),
  value: z.string().optional(),
});

export const RoomAttributeValueOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    value: PZ.OrderDirectionSchema,
  })
  .partial();

export const RoomAttributeValueOrderBySchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueOrderBySchema
);

export const RoomAttributeValueWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    value: PZ.StringFilterSchema,
    attribute: z
      .object({
        some: RoomAttributeOwnWhereSchema,
        every: RoomAttributeOwnWhereSchema,
        none: RoomAttributeOwnWhereSchema,
      })
      .partial(),
    room: z
      .object({
        some: RoomOwnWhereSchema,
        every: RoomOwnWhereSchema,
        none: RoomOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const RoomAttributeValueWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueWhereSchema
);

export const RoomAttributeValueProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean().or(RoomAttributeOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
  })
  .partial();

export const RoomAttributeValueProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueProjectionSchema
);

export const RoomAttributeValueIncludeSchema = z
  .object({
    attribute: z.boolean().or(RoomAttributeOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
  })
  .partial();

export const RoomAttributeValueIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueIncludeSchema
);

export const ItemAttributeCreateSchema = z.object({
  name: z.string(),
});

export const ItemAttributeUpdateSchema = z.object({
  name: z.string().optional(),
});

export const ItemAttributeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const ItemAttributeOrderBySchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeOrderBySchema
);

export const ItemAttributeWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    values: z
      .object({
        some: ItemAttributeValueOwnWhereSchema,
        every: ItemAttributeValueOwnWhereSchema,
        none: ItemAttributeValueOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ItemAttributeWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeWhereSchema
);

export const ItemAttributeProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean().or(ItemAttributeValueOwnQuerySchema),
  })
  .partial();

export const ItemAttributeProjectionSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeProjectionSchema
);

export const ItemAttributeIncludeSchema = z
  .object({
    values: z.boolean().or(ItemAttributeValueOwnQuerySchema),
  })
  .partial();

export const ItemAttributeIncludeSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeIncludeSchema
);

export const ItemAttributeValueCreateSchema = z.object({
  itemId: z.int(),
  attributeId: z.int(),
  value: z.string(),
});

export const ItemAttributeValueUpdateSchema = z.object({
  itemId: z.int().optional(),
  attributeId: z.int().optional(),
  value: z.string().optional(),
});

export const ItemAttributeValueOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    itemId: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    value: PZ.OrderDirectionSchema,
  })
  .partial();

export const ItemAttributeValueOrderBySchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueOrderBySchema
);

export const ItemAttributeValueWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    value: PZ.StringFilterSchema,
    attribute: z
      .object({
        some: ItemAttributeOwnWhereSchema,
        every: ItemAttributeOwnWhereSchema,
        none: ItemAttributeOwnWhereSchema,
      })
      .partial(),
    item: z
      .object({
        some: ItemOwnWhereSchema,
        every: ItemOwnWhereSchema,
        none: ItemOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ItemAttributeValueWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueWhereSchema
);

export const ItemAttributeValueProjectionSchema = z
  .object({
    id: z.boolean(),
    itemId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean().or(ItemAttributeOwnQueryOneSchema),
    item: z.boolean().or(ItemOwnQueryOneSchema),
  })
  .partial();

export const ItemAttributeValueProjectionSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueProjectionSchema
);

export const ItemAttributeValueIncludeSchema = z
  .object({
    attribute: z.boolean().or(ItemAttributeOwnQueryOneSchema),
    item: z.boolean().or(ItemOwnQueryOneSchema),
  })
  .partial();

export const ItemAttributeValueIncludeSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueIncludeSchema
);

export const CategoryCreateSchema = z.object({
  parentId: z.int().optional(),
  name: z.string(),
});

export const CategoryUpdateSchema = z.object({
  parentId: z.int().optional().optional(),
  name: z.string().optional(),
});

export const CategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const CategoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  CategoryOrderBySchema
);

export const CategoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    parent: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    children: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    items: z
      .object({
        some: ItemOwnWhereSchema,
        every: ItemOwnWhereSchema,
        none: ItemOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryWhereSchema
);

export const CategoryProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    children: z.boolean().or(CategoryOwnQuerySchema),
    items: z.boolean().or(ItemOwnQuerySchema),
  })
  .partial();

export const CategoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  CategoryProjectionSchema
);

export const CategoryIncludeSchema = z
  .object({
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    children: z.boolean().or(CategoryOwnQuerySchema),
    items: z.boolean().or(ItemOwnQuerySchema),
  })
  .partial();

export const CategoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  CategoryIncludeSchema
);

export const BuildingCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const BuildingUpdateSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
});

export const BuildingOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial();

export const BuildingOrderBySchemaJson = z.preprocess(
  jsonParser,
  BuildingOrderBySchema
);

export const BuildingWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    rooms: z
      .object({
        some: RoomOwnWhereSchema,
        every: RoomOwnWhereSchema,
        none: RoomOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const BuildingWhereSchemaJson = z.preprocess(
  jsonParser,
  BuildingWhereSchema
);

export const BuildingProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    rooms: z.boolean().or(RoomOwnQuerySchema),
  })
  .partial();

export const BuildingProjectionSchemaJson = z.preprocess(
  jsonParser,
  BuildingProjectionSchema
);

export const BuildingIncludeSchema = z
  .object({
    rooms: z.boolean().or(RoomOwnQuerySchema),
  })
  .partial();

export const BuildingIncludeSchemaJson = z.preprocess(
  jsonParser,
  BuildingIncludeSchema
);

export const RoomCreateSchema = z.object({
  buildingId: z.int(),
  name: z.string(),
  code: z.string(),
  floor: z.int().optional(),
});

export const RoomUpdateSchema = z.object({
  buildingId: z.int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
  floor: z.int().optional().optional(),
});

export const RoomOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    buildingId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
    floor: PZ.OrderDirectionSchema,
  })
  .partial();

export const RoomOrderBySchemaJson = z.preprocess(
  jsonParser,
  RoomOrderBySchema
);

export const RoomWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    buildingId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    floor: PZ.IntegerFilterSchema,
    building: z
      .object({
        some: BuildingOwnWhereSchema,
        every: BuildingOwnWhereSchema,
        none: BuildingOwnWhereSchema,
      })
      .partial(),
    attributes: z
      .object({
        some: RoomAttributeValueOwnWhereSchema,
        every: RoomAttributeValueOwnWhereSchema,
        none: RoomAttributeValueOwnWhereSchema,
      })
      .partial(),
    quantities: z
      .object({
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      })
      .partial(),
    serials: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
    employeeRooms: z
      .object({
        some: EmployeeRoomOwnWhereSchema,
        every: EmployeeRoomOwnWhereSchema,
        none: EmployeeRoomOwnWhereSchema,
      })
      .partial(),
    employeeRoomRequests: z
      .object({
        some: EmployeeRoomRequestOwnWhereSchema,
        every: EmployeeRoomRequestOwnWhereSchema,
        none: EmployeeRoomRequestOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const RoomWhereSchemaJson = z.preprocess(jsonParser, RoomWhereSchema);

export const RoomProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    buildingId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    floor: z.boolean(),
    building: z.boolean().or(BuildingOwnQueryOneSchema),
    attributes: z.boolean().or(RoomAttributeValueOwnQuerySchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    serials: z.boolean().or(SerialNumberOwnQuerySchema),
    employeeRooms: z.boolean().or(EmployeeRoomOwnQuerySchema),
    employeeRoomRequests: z.boolean().or(EmployeeRoomRequestOwnQuerySchema),
  })
  .partial();

export const RoomProjectionSchemaJson = z.preprocess(
  jsonParser,
  RoomProjectionSchema
);

export const RoomIncludeSchema = z
  .object({
    building: z.boolean().or(BuildingOwnQueryOneSchema),
    attributes: z.boolean().or(RoomAttributeValueOwnQuerySchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    serials: z.boolean().or(SerialNumberOwnQuerySchema),
    employeeRooms: z.boolean().or(EmployeeRoomOwnQuerySchema),
    employeeRoomRequests: z.boolean().or(EmployeeRoomRequestOwnQuerySchema),
  })
  .partial();

export const RoomIncludeSchemaJson = z.preprocess(
  jsonParser,
  RoomIncludeSchema
);

export const ItemCreateSchema = z.object({
  categoryId: z.int().optional(),
  name: z.string(),
  description: z.string().optional(),
  minQuantity: z.int().optional(),
});

export const ItemUpdateSchema = z.object({
  categoryId: z.int().optional().optional(),
  name: z.string().optional(),
  description: z.string().optional().optional(),
  minQuantity: z.int().optional().optional(),
});

export const ItemOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    minQuantity: PZ.OrderDirectionSchema,
  })
  .partial();

export const ItemOrderBySchemaJson = z.preprocess(
  jsonParser,
  ItemOrderBySchema
);

export const ItemWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
    category: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    attributes: z
      .object({
        some: ItemAttributeValueOwnWhereSchema,
        every: ItemAttributeValueOwnWhereSchema,
        none: ItemAttributeValueOwnWhereSchema,
      })
      .partial(),
    quantities: z
      .object({
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      })
      .partial(),
    serials: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ItemWhereSchemaJson = z.preprocess(jsonParser, ItemWhereSchema);

export const ItemProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    categoryId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    minQuantity: z.boolean(),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
    attributes: z.boolean().or(ItemAttributeValueOwnQuerySchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    serials: z.boolean().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const ItemProjectionSchemaJson = z.preprocess(
  jsonParser,
  ItemProjectionSchema
);

export const ItemIncludeSchema = z
  .object({
    category: z.boolean().or(CategoryOwnQueryOneSchema),
    attributes: z.boolean().or(ItemAttributeValueOwnQuerySchema),
    quantities: z.boolean().or(QuantityOwnQuerySchema),
    serials: z.boolean().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const ItemIncludeSchemaJson = z.preprocess(
  jsonParser,
  ItemIncludeSchema
);

export const QuantityCreateSchema = z.object({
  roomId: z.int(),
  itemId: z.int(),
  quantity: z.int().optional(),
  minQuantity: z.int().optional(),
});

export const QuantityUpdateSchema = z.object({
  roomId: z.int().optional(),
  itemId: z.int().optional(),
  quantity: z.int().optional().optional(),
  minQuantity: z.int().optional().optional(),
});

export const QuantityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    itemId: PZ.OrderDirectionSchema,
    quantity: PZ.OrderDirectionSchema,
    minQuantity: PZ.OrderDirectionSchema,
  })
  .partial();

export const QuantityOrderBySchemaJson = z.preprocess(
  jsonParser,
  QuantityOrderBySchema
);

export const QuantityWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
    item: z
      .object({
        some: ItemOwnWhereSchema,
        every: ItemOwnWhereSchema,
        none: ItemOwnWhereSchema,
      })
      .partial(),
    room: z
      .object({
        some: RoomOwnWhereSchema,
        every: RoomOwnWhereSchema,
        none: RoomOwnWhereSchema,
      })
      .partial(),
    quantityMoveSources: z
      .object({
        some: QuantityMoveRequestOwnWhereSchema,
        every: QuantityMoveRequestOwnWhereSchema,
        none: QuantityMoveRequestOwnWhereSchema,
      })
      .partial(),
    quantityMoveTargets: z
      .object({
        some: QuantityMoveRequestOwnWhereSchema,
        every: QuantityMoveRequestOwnWhereSchema,
        none: QuantityMoveRequestOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const QuantityWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityWhereSchema
);

export const QuantityProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    itemId: z.boolean(),
    quantity: z.boolean(),
    minQuantity: z.boolean(),
    item: z.boolean().or(ItemOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
    quantityMoveSources: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
    quantityMoveTargets: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
  })
  .partial();

export const QuantityProjectionSchemaJson = z.preprocess(
  jsonParser,
  QuantityProjectionSchema
);

export const QuantityIncludeSchema = z
  .object({
    item: z.boolean().or(ItemOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
    quantityMoveSources: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
    quantityMoveTargets: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
  })
  .partial();

export const QuantityIncludeSchemaJson = z.preprocess(
  jsonParser,
  QuantityIncludeSchema
);

export const SerialNumberCreateSchema = z.object({
  serialNumber: z.string(),
  itemId: z.int(),
  roomId: z.int(),
});

export const SerialNumberUpdateSchema = z.object({
  serialNumber: z.string().optional(),
  itemId: z.int().optional(),
  roomId: z.int().optional(),
});

export const SerialNumberOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    serialNumber: PZ.OrderDirectionSchema,
    itemId: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
  })
  .partial();

export const SerialNumberOrderBySchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOrderBySchema
);

export const SerialNumberWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    serialNumber: PZ.StringFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    item: z
      .object({
        some: ItemOwnWhereSchema,
        every: ItemOwnWhereSchema,
        none: ItemOwnWhereSchema,
      })
      .partial(),
    room: z
      .object({
        some: RoomOwnWhereSchema,
        every: RoomOwnWhereSchema,
        none: RoomOwnWhereSchema,
      })
      .partial(),
    serialMoveSources: z
      .object({
        some: SerialMoveRequestOwnWhereSchema,
        every: SerialMoveRequestOwnWhereSchema,
        none: SerialMoveRequestOwnWhereSchema,
      })
      .partial(),
    serialMoveTargets: z
      .object({
        some: SerialMoveRequestOwnWhereSchema,
        every: SerialMoveRequestOwnWhereSchema,
        none: SerialMoveRequestOwnWhereSchema,
      })
      .partial(),
    employeeItemRequests: z
      .object({
        some: EmployeeItemRequestOwnWhereSchema,
        every: EmployeeItemRequestOwnWhereSchema,
        none: EmployeeItemRequestOwnWhereSchema,
      })
      .partial(),
    employeeItems: z
      .object({
        some: EmployeeItemOwnWhereSchema,
        every: EmployeeItemOwnWhereSchema,
        none: EmployeeItemOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SerialNumberWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberWhereSchema
);

export const SerialNumberProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    serialNumber: z.boolean(),
    itemId: z.boolean(),
    roomId: z.boolean(),
    item: z.boolean().or(ItemOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
    serialMoveSources: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    serialMoveTargets: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    employeeItemRequests: z.boolean().or(EmployeeItemRequestOwnQuerySchema),
    employeeItems: z.boolean().or(EmployeeItemOwnQuerySchema),
  })
  .partial();

export const SerialNumberProjectionSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberProjectionSchema
);

export const SerialNumberIncludeSchema = z
  .object({
    item: z.boolean().or(ItemOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
    serialMoveSources: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    serialMoveTargets: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    employeeItemRequests: z.boolean().or(EmployeeItemRequestOwnQuerySchema),
    employeeItems: z.boolean().or(EmployeeItemOwnQuerySchema),
  })
  .partial();

export const SerialNumberIncludeSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberIncludeSchema
);

export const QuantityMoveRequestCreateSchema = z.object({
  sourceId: z.int(),
  targetId: z.int(),
  requestedById: z.int(),
  resolvedById: z.int().optional(),
  quantity: z.int(),
  reason: z.string().optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: z.iso.datetime().optional(),
});

export const QuantityMoveRequestUpdateSchema = z.object({
  sourceId: z.int().optional(),
  targetId: z.int().optional(),
  requestedById: z.int().optional(),
  resolvedById: z.int().optional().optional(),
  quantity: z.int().optional(),
  reason: z.string().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  resolvedAt: z.iso.datetime().optional().optional(),
});

export const QuantityMoveRequestOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    sourceId: PZ.OrderDirectionSchema,
    targetId: PZ.OrderDirectionSchema,
    requestedById: PZ.OrderDirectionSchema,
    resolvedById: PZ.OrderDirectionSchema,
    quantity: PZ.OrderDirectionSchema,
    reason: PZ.OrderDirectionSchema,
    requestedAt: PZ.OrderDirectionSchema,
    resolvedAt: PZ.OrderDirectionSchema,
  })
  .partial();

export const QuantityMoveRequestOrderBySchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestOrderBySchema
);

export const QuantityMoveRequestWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sourceId: PZ.IntegerFilterSchema,
    targetId: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    reason: PZ.StringFilterSchema,
    status: RequestStatusSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    source: z
      .object({
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      })
      .partial(),
    target: z
      .object({
        some: QuantityOwnWhereSchema,
        every: QuantityOwnWhereSchema,
        none: QuantityOwnWhereSchema,
      })
      .partial(),
    requestedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    resolvedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const QuantityMoveRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestWhereSchema
);

export const QuantityMoveRequestProjectionSchema = z
  .object({
    id: z.boolean(),
    sourceId: z.boolean(),
    targetId: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    quantity: z.boolean(),
    reason: z.boolean(),
    status: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    source: z.boolean().or(QuantityOwnQueryOneSchema),
    target: z.boolean().or(QuantityOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const QuantityMoveRequestProjectionSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestProjectionSchema
);

export const QuantityMoveRequestIncludeSchema = z
  .object({
    source: z.boolean().or(QuantityOwnQueryOneSchema),
    target: z.boolean().or(QuantityOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const QuantityMoveRequestIncludeSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestIncludeSchema
);

export const SerialMoveRequestCreateSchema = z.object({
  sourceId: z.int(),
  targetId: z.int(),
  requestedById: z.int(),
  resolvedById: z.int().optional(),
  reason: z.string().optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: z.iso.datetime().optional(),
});

export const SerialMoveRequestUpdateSchema = z.object({
  sourceId: z.int().optional(),
  targetId: z.int().optional(),
  requestedById: z.int().optional(),
  resolvedById: z.int().optional().optional(),
  reason: z.string().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  resolvedAt: z.iso.datetime().optional().optional(),
});

export const SerialMoveRequestOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    sourceId: PZ.OrderDirectionSchema,
    targetId: PZ.OrderDirectionSchema,
    requestedById: PZ.OrderDirectionSchema,
    resolvedById: PZ.OrderDirectionSchema,
    reason: PZ.OrderDirectionSchema,
    requestedAt: PZ.OrderDirectionSchema,
    resolvedAt: PZ.OrderDirectionSchema,
  })
  .partial();

export const SerialMoveRequestOrderBySchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestOrderBySchema
);

export const SerialMoveRequestWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sourceId: PZ.IntegerFilterSchema,
    targetId: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    reason: PZ.StringFilterSchema,
    status: RequestStatusSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    source: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
    target: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
    requestedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    resolvedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SerialMoveRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestWhereSchema
);

export const SerialMoveRequestProjectionSchema = z
  .object({
    id: z.boolean(),
    sourceId: z.boolean(),
    targetId: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    reason: z.boolean(),
    status: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    source: z.boolean().or(SerialNumberOwnQueryOneSchema),
    target: z.boolean().or(SerialNumberOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SerialMoveRequestProjectionSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestProjectionSchema
);

export const SerialMoveRequestIncludeSchema = z
  .object({
    source: z.boolean().or(SerialNumberOwnQueryOneSchema),
    target: z.boolean().or(SerialNumberOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SerialMoveRequestIncludeSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestIncludeSchema
);

export const EmployeeCreateSchema = z.object({
  uuid: z.string(),
});

export const EmployeeUpdateSchema = z.object({
  uuid: z.string().optional(),
});

export const EmployeeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeOrderBySchema
);

export const EmployeeWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    rooms: z
      .object({
        some: EmployeeRoomOwnWhereSchema,
        every: EmployeeRoomOwnWhereSchema,
        none: EmployeeRoomOwnWhereSchema,
      })
      .partial(),
    items: z
      .object({
        some: EmployeeItemOwnWhereSchema,
        every: EmployeeItemOwnWhereSchema,
        none: EmployeeItemOwnWhereSchema,
      })
      .partial(),
    itemRequesters: z
      .object({
        some: EmployeeItemRequestOwnWhereSchema,
        every: EmployeeItemRequestOwnWhereSchema,
        none: EmployeeItemRequestOwnWhereSchema,
      })
      .partial(),
    itemResolvers: z
      .object({
        some: EmployeeItemRequestOwnWhereSchema,
        every: EmployeeItemRequestOwnWhereSchema,
        none: EmployeeItemRequestOwnWhereSchema,
      })
      .partial(),
    roomRequesters: z
      .object({
        some: EmployeeRoomRequestOwnWhereSchema,
        every: EmployeeRoomRequestOwnWhereSchema,
        none: EmployeeRoomRequestOwnWhereSchema,
      })
      .partial(),
    roomResolvers: z
      .object({
        some: EmployeeRoomRequestOwnWhereSchema,
        every: EmployeeRoomRequestOwnWhereSchema,
        none: EmployeeRoomRequestOwnWhereSchema,
      })
      .partial(),
    serialMoveRequesters: z
      .object({
        some: SerialMoveRequestOwnWhereSchema,
        every: SerialMoveRequestOwnWhereSchema,
        none: SerialMoveRequestOwnWhereSchema,
      })
      .partial(),
    serialMoveResolvers: z
      .object({
        some: SerialMoveRequestOwnWhereSchema,
        every: SerialMoveRequestOwnWhereSchema,
        none: SerialMoveRequestOwnWhereSchema,
      })
      .partial(),
    quantityMoveRequesters: z
      .object({
        some: QuantityMoveRequestOwnWhereSchema,
        every: QuantityMoveRequestOwnWhereSchema,
        none: QuantityMoveRequestOwnWhereSchema,
      })
      .partial(),
    quantityMoveResolvers: z
      .object({
        some: QuantityMoveRequestOwnWhereSchema,
        every: QuantityMoveRequestOwnWhereSchema,
        none: QuantityMoveRequestOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeWhereSchema
);

export const EmployeeProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    rooms: z.boolean().or(EmployeeRoomOwnQuerySchema),
    items: z.boolean().or(EmployeeItemOwnQuerySchema),
    itemRequesters: z.boolean().or(EmployeeItemRequestOwnQuerySchema),
    itemResolvers: z.boolean().or(EmployeeItemRequestOwnQuerySchema),
    roomRequesters: z.boolean().or(EmployeeRoomRequestOwnQuerySchema),
    roomResolvers: z.boolean().or(EmployeeRoomRequestOwnQuerySchema),
    serialMoveRequesters: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    serialMoveResolvers: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    quantityMoveRequesters: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
    quantityMoveResolvers: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
  })
  .partial();

export const EmployeeProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeProjectionSchema
);

export const EmployeeIncludeSchema = z
  .object({
    rooms: z.boolean().or(EmployeeRoomOwnQuerySchema),
    items: z.boolean().or(EmployeeItemOwnQuerySchema),
    itemRequesters: z.boolean().or(EmployeeItemRequestOwnQuerySchema),
    itemResolvers: z.boolean().or(EmployeeItemRequestOwnQuerySchema),
    roomRequesters: z.boolean().or(EmployeeRoomRequestOwnQuerySchema),
    roomResolvers: z.boolean().or(EmployeeRoomRequestOwnQuerySchema),
    serialMoveRequesters: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    serialMoveResolvers: z.boolean().or(SerialMoveRequestOwnQuerySchema),
    quantityMoveRequesters: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
    quantityMoveResolvers: z.boolean().or(QuantityMoveRequestOwnQuerySchema),
  })
  .partial();

export const EmployeeIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeIncludeSchema
);

export const EmployeeRoomCreateSchema = z.object({
  employeeId: z.int(),
  roomId: z.int(),
  takenAt: z.iso.datetime().optional(),
});

export const EmployeeRoomUpdateSchema = z.object({
  employeeId: z.int().optional(),
  roomId: z.int().optional(),
  takenAt: z.iso.datetime().optional().optional(),
});

export const EmployeeRoomOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    givenAt: PZ.OrderDirectionSchema,
    takenAt: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeRoomOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomOrderBySchema
);

export const EmployeeRoomWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    givenAt: PZ.DateTimeFilterSchema,
    takenAt: PZ.DateTimeFilterSchema,
    room: z
      .object({
        some: RoomOwnWhereSchema,
        every: RoomOwnWhereSchema,
        none: RoomOwnWhereSchema,
      })
      .partial(),
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeRoomWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomWhereSchema
);

export const EmployeeRoomProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    roomId: z.boolean(),
    givenAt: z.boolean(),
    takenAt: z.boolean(),
    room: z.boolean().or(RoomOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomProjectionSchema
);

export const EmployeeRoomIncludeSchema = z
  .object({
    room: z.boolean().or(RoomOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomIncludeSchema
);

export const EmployeeItemCreateSchema = z.object({
  employeeId: z.int(),
  serialNumberId: z.int(),
  takenAt: z.iso.datetime().optional(),
});

export const EmployeeItemUpdateSchema = z.object({
  employeeId: z.int().optional(),
  serialNumberId: z.int().optional(),
  takenAt: z.iso.datetime().optional().optional(),
});

export const EmployeeItemOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    serialNumberId: PZ.OrderDirectionSchema,
    givenAt: PZ.OrderDirectionSchema,
    takenAt: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeItemOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemOrderBySchema
);

export const EmployeeItemWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    serialNumberId: PZ.IntegerFilterSchema,
    givenAt: PZ.DateTimeFilterSchema,
    takenAt: PZ.DateTimeFilterSchema,
    serialNumber: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeItemWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemWhereSchema
);

export const EmployeeItemProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    serialNumberId: z.boolean(),
    givenAt: z.boolean(),
    takenAt: z.boolean(),
    serialNumber: z.boolean().or(SerialNumberOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemProjectionSchema
);

export const EmployeeItemIncludeSchema = z
  .object({
    serialNumber: z.boolean().or(SerialNumberOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemIncludeSchema
);

export const EmployeeRoomRequestCreateSchema = z.object({
  roomId: z.int().optional(),
  requestedById: z.int(),
  resolvedById: z.int().optional(),
  resolvedAt: z.iso.datetime().optional(),
  status: RequestStatusSchema.optional(),
  note: z.string().optional(),
});

export const EmployeeRoomRequestUpdateSchema = z.object({
  roomId: z.int().optional().optional(),
  requestedById: z.int().optional(),
  resolvedById: z.int().optional().optional(),
  resolvedAt: z.iso.datetime().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  note: z.string().optional().optional(),
});

export const EmployeeRoomRequestOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    requestedById: PZ.OrderDirectionSchema,
    resolvedById: PZ.OrderDirectionSchema,
    requestedAt: PZ.OrderDirectionSchema,
    resolvedAt: PZ.OrderDirectionSchema,
    note: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeRoomRequestOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestOrderBySchema
);

export const EmployeeRoomRequestWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    status: RequestStatusSchema,
    note: PZ.StringFilterSchema,
    room: z
      .object({
        some: RoomOwnWhereSchema,
        every: RoomOwnWhereSchema,
        none: RoomOwnWhereSchema,
      })
      .partial(),
    requestedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    resolvedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeRoomRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestWhereSchema
);

export const EmployeeRoomRequestProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    status: z.boolean(),
    note: z.boolean(),
    room: z.boolean().or(RoomOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomRequestProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestProjectionSchema
);

export const EmployeeRoomRequestIncludeSchema = z
  .object({
    room: z.boolean().or(RoomOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomRequestIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestIncludeSchema
);

export const EmployeeItemRequestCreateSchema = z.object({
  requestedById: z.int(),
  resolvedById: z.int().optional(),
  resolvedAt: z.iso.datetime().optional(),
  serialNumberId: z.int().optional(),
  status: RequestStatusSchema.optional(),
  note: z.string().optional(),
});

export const EmployeeItemRequestUpdateSchema = z.object({
  requestedById: z.int().optional(),
  resolvedById: z.int().optional().optional(),
  resolvedAt: z.iso.datetime().optional().optional(),
  serialNumberId: z.int().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  note: z.string().optional().optional(),
});

export const EmployeeItemRequestOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    requestedById: PZ.OrderDirectionSchema,
    resolvedById: PZ.OrderDirectionSchema,
    requestedAt: PZ.OrderDirectionSchema,
    resolvedAt: PZ.OrderDirectionSchema,
    serialNumberId: PZ.OrderDirectionSchema,
    note: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeItemRequestOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestOrderBySchema
);

export const EmployeeItemRequestWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    requestedById: PZ.IntegerFilterSchema,
    resolvedById: PZ.IntegerFilterSchema,
    requestedAt: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    serialNumberId: PZ.IntegerFilterSchema,
    status: RequestStatusSchema,
    note: PZ.StringFilterSchema,
    serialNumber: z
      .object({
        some: SerialNumberOwnWhereSchema,
        every: SerialNumberOwnWhereSchema,
        none: SerialNumberOwnWhereSchema,
      })
      .partial(),
    requestedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    resolvedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeItemRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestWhereSchema
);

export const EmployeeItemRequestProjectionSchema = z
  .object({
    id: z.boolean(),
    requestedById: z.boolean(),
    resolvedById: z.boolean(),
    requestedAt: z.boolean(),
    resolvedAt: z.boolean(),
    serialNumberId: z.boolean(),
    status: z.boolean(),
    note: z.boolean(),
    serialNumber: z.boolean().or(SerialNumberOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemRequestProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestProjectionSchema
);

export const EmployeeItemRequestIncludeSchema = z
  .object({
    serialNumber: z.boolean().or(SerialNumberOwnQueryOneSchema),
    requestedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    resolvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemRequestIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestIncludeSchema
);

export const RoomAttributeQueryOneSchema = z
  .object({
    where: RoomAttributeWhereSchemaJson,
    select: RoomAttributeProjectionSchemaJson,
    omit: RoomAttributeProjectionSchemaJson,
    include: RoomAttributeIncludeSchemaJson,
  })
  .partial();

export const RoomAttributeQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoomAttributeWhereSchemaJson,
    select: RoomAttributeProjectionSchemaJson,
    omit: RoomAttributeProjectionSchemaJson,
    include: RoomAttributeIncludeSchemaJson,
  })
  .partial();

export type RoomAttributeCreate = z.infer<typeof RoomAttributeCreateSchema>;

export type RoomAttributeUpdate = z.infer<typeof RoomAttributeUpdateSchema>;

export type RoomAttributeOrderBy = z.infer<typeof RoomAttributeOrderBySchema>;

export type RoomAttributeOwnProjection = z.infer<
  typeof RoomAttributeOwnProjectionSchema
>;

export type RoomAttributeOwnWhere = z.infer<typeof RoomAttributeOwnWhereSchema>;

export type RoomAttributeOwnQuery = z.infer<typeof RoomAttributeOwnQuerySchema>;

export type RoomAttributeOwnQueryOne = z.infer<
  typeof RoomAttributeOwnQueryOneSchema
>;

export type RoomAttributeWhere = z.infer<typeof RoomAttributeWhereSchema>;

export type RoomAttributeInclude = z.infer<typeof RoomAttributeIncludeSchema>;

export type RoomAttributeQueryOne = z.infer<typeof RoomAttributeQueryOneSchema>;

export type RoomAttributeQuery = z.infer<typeof RoomAttributeQuerySchema>;

export type RoomAttributeProjection = z.infer<
  typeof RoomAttributeProjectionSchema
>;

export const RoomAttributeValueQueryOneSchema = z
  .object({
    where: RoomAttributeValueWhereSchemaJson,
    select: RoomAttributeValueProjectionSchemaJson,
    omit: RoomAttributeValueProjectionSchemaJson,
    include: RoomAttributeValueIncludeSchemaJson,
  })
  .partial();

export const RoomAttributeValueQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoomAttributeValueWhereSchemaJson,
    select: RoomAttributeValueProjectionSchemaJson,
    omit: RoomAttributeValueProjectionSchemaJson,
    include: RoomAttributeValueIncludeSchemaJson,
  })
  .partial();

export type RoomAttributeValueCreate = z.infer<
  typeof RoomAttributeValueCreateSchema
>;

export type RoomAttributeValueUpdate = z.infer<
  typeof RoomAttributeValueUpdateSchema
>;

export type RoomAttributeValueOrderBy = z.infer<
  typeof RoomAttributeValueOrderBySchema
>;

export type RoomAttributeValueOwnProjection = z.infer<
  typeof RoomAttributeValueOwnProjectionSchema
>;

export type RoomAttributeValueOwnWhere = z.infer<
  typeof RoomAttributeValueOwnWhereSchema
>;

export type RoomAttributeValueOwnQuery = z.infer<
  typeof RoomAttributeValueOwnQuerySchema
>;

export type RoomAttributeValueOwnQueryOne = z.infer<
  typeof RoomAttributeValueOwnQueryOneSchema
>;

export type RoomAttributeValueWhere = z.infer<
  typeof RoomAttributeValueWhereSchema
>;

export type RoomAttributeValueInclude = z.infer<
  typeof RoomAttributeValueIncludeSchema
>;

export type RoomAttributeValueQueryOne = z.infer<
  typeof RoomAttributeValueQueryOneSchema
>;

export type RoomAttributeValueQuery = z.infer<
  typeof RoomAttributeValueQuerySchema
>;

export type RoomAttributeValueProjection = z.infer<
  typeof RoomAttributeValueProjectionSchema
>;

export const ItemAttributeQueryOneSchema = z
  .object({
    where: ItemAttributeWhereSchemaJson,
    select: ItemAttributeProjectionSchemaJson,
    omit: ItemAttributeProjectionSchemaJson,
    include: ItemAttributeIncludeSchemaJson,
  })
  .partial();

export const ItemAttributeQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ItemAttributeWhereSchemaJson,
    select: ItemAttributeProjectionSchemaJson,
    omit: ItemAttributeProjectionSchemaJson,
    include: ItemAttributeIncludeSchemaJson,
  })
  .partial();

export type ItemAttributeCreate = z.infer<typeof ItemAttributeCreateSchema>;

export type ItemAttributeUpdate = z.infer<typeof ItemAttributeUpdateSchema>;

export type ItemAttributeOrderBy = z.infer<typeof ItemAttributeOrderBySchema>;

export type ItemAttributeOwnProjection = z.infer<
  typeof ItemAttributeOwnProjectionSchema
>;

export type ItemAttributeOwnWhere = z.infer<typeof ItemAttributeOwnWhereSchema>;

export type ItemAttributeOwnQuery = z.infer<typeof ItemAttributeOwnQuerySchema>;

export type ItemAttributeOwnQueryOne = z.infer<
  typeof ItemAttributeOwnQueryOneSchema
>;

export type ItemAttributeWhere = z.infer<typeof ItemAttributeWhereSchema>;

export type ItemAttributeInclude = z.infer<typeof ItemAttributeIncludeSchema>;

export type ItemAttributeQueryOne = z.infer<typeof ItemAttributeQueryOneSchema>;

export type ItemAttributeQuery = z.infer<typeof ItemAttributeQuerySchema>;

export type ItemAttributeProjection = z.infer<
  typeof ItemAttributeProjectionSchema
>;

export const ItemAttributeValueQueryOneSchema = z
  .object({
    where: ItemAttributeValueWhereSchemaJson,
    select: ItemAttributeValueProjectionSchemaJson,
    omit: ItemAttributeValueProjectionSchemaJson,
    include: ItemAttributeValueIncludeSchemaJson,
  })
  .partial();

export const ItemAttributeValueQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ItemAttributeValueWhereSchemaJson,
    select: ItemAttributeValueProjectionSchemaJson,
    omit: ItemAttributeValueProjectionSchemaJson,
    include: ItemAttributeValueIncludeSchemaJson,
  })
  .partial();

export type ItemAttributeValueCreate = z.infer<
  typeof ItemAttributeValueCreateSchema
>;

export type ItemAttributeValueUpdate = z.infer<
  typeof ItemAttributeValueUpdateSchema
>;

export type ItemAttributeValueOrderBy = z.infer<
  typeof ItemAttributeValueOrderBySchema
>;

export type ItemAttributeValueOwnProjection = z.infer<
  typeof ItemAttributeValueOwnProjectionSchema
>;

export type ItemAttributeValueOwnWhere = z.infer<
  typeof ItemAttributeValueOwnWhereSchema
>;

export type ItemAttributeValueOwnQuery = z.infer<
  typeof ItemAttributeValueOwnQuerySchema
>;

export type ItemAttributeValueOwnQueryOne = z.infer<
  typeof ItemAttributeValueOwnQueryOneSchema
>;

export type ItemAttributeValueWhere = z.infer<
  typeof ItemAttributeValueWhereSchema
>;

export type ItemAttributeValueInclude = z.infer<
  typeof ItemAttributeValueIncludeSchema
>;

export type ItemAttributeValueQueryOne = z.infer<
  typeof ItemAttributeValueQueryOneSchema
>;

export type ItemAttributeValueQuery = z.infer<
  typeof ItemAttributeValueQuerySchema
>;

export type ItemAttributeValueProjection = z.infer<
  typeof ItemAttributeValueProjectionSchema
>;

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    select: CategoryProjectionSchemaJson,
    omit: CategoryProjectionSchemaJson,
    include: CategoryIncludeSchemaJson,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CategoryWhereSchemaJson,
    select: CategoryProjectionSchemaJson,
    omit: CategoryProjectionSchemaJson,
    include: CategoryIncludeSchemaJson,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnProjection = z.infer<typeof CategoryOwnProjectionSchema>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export const BuildingQueryOneSchema = z
  .object({
    where: BuildingWhereSchemaJson,
    select: BuildingProjectionSchemaJson,
    omit: BuildingProjectionSchemaJson,
    include: BuildingIncludeSchemaJson,
  })
  .partial();

export const BuildingQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: BuildingWhereSchemaJson,
    select: BuildingProjectionSchemaJson,
    omit: BuildingProjectionSchemaJson,
    include: BuildingIncludeSchemaJson,
  })
  .partial();

export type BuildingCreate = z.infer<typeof BuildingCreateSchema>;

export type BuildingUpdate = z.infer<typeof BuildingUpdateSchema>;

export type BuildingOrderBy = z.infer<typeof BuildingOrderBySchema>;

export type BuildingOwnProjection = z.infer<typeof BuildingOwnProjectionSchema>;

export type BuildingOwnWhere = z.infer<typeof BuildingOwnWhereSchema>;

export type BuildingOwnQuery = z.infer<typeof BuildingOwnQuerySchema>;

export type BuildingOwnQueryOne = z.infer<typeof BuildingOwnQueryOneSchema>;

export type BuildingWhere = z.infer<typeof BuildingWhereSchema>;

export type BuildingInclude = z.infer<typeof BuildingIncludeSchema>;

export type BuildingQueryOne = z.infer<typeof BuildingQueryOneSchema>;

export type BuildingQuery = z.infer<typeof BuildingQuerySchema>;

export type BuildingProjection = z.infer<typeof BuildingProjectionSchema>;

export const RoomQueryOneSchema = z
  .object({
    where: RoomWhereSchemaJson,
    select: RoomProjectionSchemaJson,
    omit: RoomProjectionSchemaJson,
    include: RoomIncludeSchemaJson,
  })
  .partial();

export const RoomQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: RoomWhereSchemaJson,
    select: RoomProjectionSchemaJson,
    omit: RoomProjectionSchemaJson,
    include: RoomIncludeSchemaJson,
  })
  .partial();

export type RoomCreate = z.infer<typeof RoomCreateSchema>;

export type RoomUpdate = z.infer<typeof RoomUpdateSchema>;

export type RoomOrderBy = z.infer<typeof RoomOrderBySchema>;

export type RoomOwnProjection = z.infer<typeof RoomOwnProjectionSchema>;

export type RoomOwnWhere = z.infer<typeof RoomOwnWhereSchema>;

export type RoomOwnQuery = z.infer<typeof RoomOwnQuerySchema>;

export type RoomOwnQueryOne = z.infer<typeof RoomOwnQueryOneSchema>;

export type RoomWhere = z.infer<typeof RoomWhereSchema>;

export type RoomInclude = z.infer<typeof RoomIncludeSchema>;

export type RoomQueryOne = z.infer<typeof RoomQueryOneSchema>;

export type RoomQuery = z.infer<typeof RoomQuerySchema>;

export type RoomProjection = z.infer<typeof RoomProjectionSchema>;

export const ItemQueryOneSchema = z
  .object({
    where: ItemWhereSchemaJson,
    select: ItemProjectionSchemaJson,
    omit: ItemProjectionSchemaJson,
    include: ItemIncludeSchemaJson,
  })
  .partial();

export const ItemQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ItemWhereSchemaJson,
    select: ItemProjectionSchemaJson,
    omit: ItemProjectionSchemaJson,
    include: ItemIncludeSchemaJson,
  })
  .partial();

export type ItemCreate = z.infer<typeof ItemCreateSchema>;

export type ItemUpdate = z.infer<typeof ItemUpdateSchema>;

export type ItemOrderBy = z.infer<typeof ItemOrderBySchema>;

export type ItemOwnProjection = z.infer<typeof ItemOwnProjectionSchema>;

export type ItemOwnWhere = z.infer<typeof ItemOwnWhereSchema>;

export type ItemOwnQuery = z.infer<typeof ItemOwnQuerySchema>;

export type ItemOwnQueryOne = z.infer<typeof ItemOwnQueryOneSchema>;

export type ItemWhere = z.infer<typeof ItemWhereSchema>;

export type ItemInclude = z.infer<typeof ItemIncludeSchema>;

export type ItemQueryOne = z.infer<typeof ItemQueryOneSchema>;

export type ItemQuery = z.infer<typeof ItemQuerySchema>;

export type ItemProjection = z.infer<typeof ItemProjectionSchema>;

export const QuantityQueryOneSchema = z
  .object({
    where: QuantityWhereSchemaJson,
    select: QuantityProjectionSchemaJson,
    omit: QuantityProjectionSchemaJson,
    include: QuantityIncludeSchemaJson,
  })
  .partial();

export const QuantityQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: QuantityWhereSchemaJson,
    select: QuantityProjectionSchemaJson,
    omit: QuantityProjectionSchemaJson,
    include: QuantityIncludeSchemaJson,
  })
  .partial();

export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>;

export type QuantityOwnProjection = z.infer<typeof QuantityOwnProjectionSchema>;

export type QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>;

export type QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>;

export type QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>;

export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;

export type QuantityInclude = z.infer<typeof QuantityIncludeSchema>;

export type QuantityQueryOne = z.infer<typeof QuantityQueryOneSchema>;

export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;

export type QuantityProjection = z.infer<typeof QuantityProjectionSchema>;

export const SerialNumberQueryOneSchema = z
  .object({
    where: SerialNumberWhereSchemaJson,
    select: SerialNumberProjectionSchemaJson,
    omit: SerialNumberProjectionSchemaJson,
    include: SerialNumberIncludeSchemaJson,
  })
  .partial();

export const SerialNumberQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SerialNumberWhereSchemaJson,
    select: SerialNumberProjectionSchemaJson,
    omit: SerialNumberProjectionSchemaJson,
    include: SerialNumberIncludeSchemaJson,
  })
  .partial();

export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;

export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBySchema>;

export type SerialNumberOwnProjection = z.infer<
  typeof SerialNumberOwnProjectionSchema
>;

export type SerialNumberOwnWhere = z.infer<typeof SerialNumberOwnWhereSchema>;

export type SerialNumberOwnQuery = z.infer<typeof SerialNumberOwnQuerySchema>;

export type SerialNumberOwnQueryOne = z.infer<
  typeof SerialNumberOwnQueryOneSchema
>;

export type SerialNumberWhere = z.infer<typeof SerialNumberWhereSchema>;

export type SerialNumberInclude = z.infer<typeof SerialNumberIncludeSchema>;

export type SerialNumberQueryOne = z.infer<typeof SerialNumberQueryOneSchema>;

export type SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>;

export type SerialNumberProjection = z.infer<
  typeof SerialNumberProjectionSchema
>;

export const QuantityMoveRequestQueryOneSchema = z
  .object({
    where: QuantityMoveRequestWhereSchemaJson,
    select: QuantityMoveRequestProjectionSchemaJson,
    omit: QuantityMoveRequestProjectionSchemaJson,
    include: QuantityMoveRequestIncludeSchemaJson,
  })
  .partial();

export const QuantityMoveRequestQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: QuantityMoveRequestWhereSchemaJson,
    select: QuantityMoveRequestProjectionSchemaJson,
    omit: QuantityMoveRequestProjectionSchemaJson,
    include: QuantityMoveRequestIncludeSchemaJson,
  })
  .partial();

export type QuantityMoveRequestCreate = z.infer<
  typeof QuantityMoveRequestCreateSchema
>;

export type QuantityMoveRequestUpdate = z.infer<
  typeof QuantityMoveRequestUpdateSchema
>;

export type QuantityMoveRequestOrderBy = z.infer<
  typeof QuantityMoveRequestOrderBySchema
>;

export type QuantityMoveRequestOwnProjection = z.infer<
  typeof QuantityMoveRequestOwnProjectionSchema
>;

export type QuantityMoveRequestOwnWhere = z.infer<
  typeof QuantityMoveRequestOwnWhereSchema
>;

export type QuantityMoveRequestOwnQuery = z.infer<
  typeof QuantityMoveRequestOwnQuerySchema
>;

export type QuantityMoveRequestOwnQueryOne = z.infer<
  typeof QuantityMoveRequestOwnQueryOneSchema
>;

export type QuantityMoveRequestWhere = z.infer<
  typeof QuantityMoveRequestWhereSchema
>;

export type QuantityMoveRequestInclude = z.infer<
  typeof QuantityMoveRequestIncludeSchema
>;

export type QuantityMoveRequestQueryOne = z.infer<
  typeof QuantityMoveRequestQueryOneSchema
>;

export type QuantityMoveRequestQuery = z.infer<
  typeof QuantityMoveRequestQuerySchema
>;

export type QuantityMoveRequestProjection = z.infer<
  typeof QuantityMoveRequestProjectionSchema
>;

export const SerialMoveRequestQueryOneSchema = z
  .object({
    where: SerialMoveRequestWhereSchemaJson,
    select: SerialMoveRequestProjectionSchemaJson,
    omit: SerialMoveRequestProjectionSchemaJson,
    include: SerialMoveRequestIncludeSchemaJson,
  })
  .partial();

export const SerialMoveRequestQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SerialMoveRequestWhereSchemaJson,
    select: SerialMoveRequestProjectionSchemaJson,
    omit: SerialMoveRequestProjectionSchemaJson,
    include: SerialMoveRequestIncludeSchemaJson,
  })
  .partial();

export type SerialMoveRequestCreate = z.infer<
  typeof SerialMoveRequestCreateSchema
>;

export type SerialMoveRequestUpdate = z.infer<
  typeof SerialMoveRequestUpdateSchema
>;

export type SerialMoveRequestOrderBy = z.infer<
  typeof SerialMoveRequestOrderBySchema
>;

export type SerialMoveRequestOwnProjection = z.infer<
  typeof SerialMoveRequestOwnProjectionSchema
>;

export type SerialMoveRequestOwnWhere = z.infer<
  typeof SerialMoveRequestOwnWhereSchema
>;

export type SerialMoveRequestOwnQuery = z.infer<
  typeof SerialMoveRequestOwnQuerySchema
>;

export type SerialMoveRequestOwnQueryOne = z.infer<
  typeof SerialMoveRequestOwnQueryOneSchema
>;

export type SerialMoveRequestWhere = z.infer<
  typeof SerialMoveRequestWhereSchema
>;

export type SerialMoveRequestInclude = z.infer<
  typeof SerialMoveRequestIncludeSchema
>;

export type SerialMoveRequestQueryOne = z.infer<
  typeof SerialMoveRequestQueryOneSchema
>;

export type SerialMoveRequestQuery = z.infer<
  typeof SerialMoveRequestQuerySchema
>;

export type SerialMoveRequestProjection = z.infer<
  typeof SerialMoveRequestProjectionSchema
>;

export const EmployeeQueryOneSchema = z
  .object({
    where: EmployeeWhereSchemaJson,
    select: EmployeeProjectionSchemaJson,
    omit: EmployeeProjectionSchemaJson,
    include: EmployeeIncludeSchemaJson,
  })
  .partial();

export const EmployeeQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeWhereSchemaJson,
    select: EmployeeProjectionSchemaJson,
    omit: EmployeeProjectionSchemaJson,
    include: EmployeeIncludeSchemaJson,
  })
  .partial();

export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type EmployeeOrderBy = z.infer<typeof EmployeeOrderBySchema>;

export type EmployeeOwnProjection = z.infer<typeof EmployeeOwnProjectionSchema>;

export type EmployeeOwnWhere = z.infer<typeof EmployeeOwnWhereSchema>;

export type EmployeeOwnQuery = z.infer<typeof EmployeeOwnQuerySchema>;

export type EmployeeOwnQueryOne = z.infer<typeof EmployeeOwnQueryOneSchema>;

export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;

export type EmployeeInclude = z.infer<typeof EmployeeIncludeSchema>;

export type EmployeeQueryOne = z.infer<typeof EmployeeQueryOneSchema>;

export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

export type EmployeeProjection = z.infer<typeof EmployeeProjectionSchema>;

export const EmployeeRoomQueryOneSchema = z
  .object({
    where: EmployeeRoomWhereSchemaJson,
    select: EmployeeRoomProjectionSchemaJson,
    omit: EmployeeRoomProjectionSchemaJson,
    include: EmployeeRoomIncludeSchemaJson,
  })
  .partial();

export const EmployeeRoomQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeRoomWhereSchemaJson,
    select: EmployeeRoomProjectionSchemaJson,
    omit: EmployeeRoomProjectionSchemaJson,
    include: EmployeeRoomIncludeSchemaJson,
  })
  .partial();

export type EmployeeRoomCreate = z.infer<typeof EmployeeRoomCreateSchema>;

export type EmployeeRoomUpdate = z.infer<typeof EmployeeRoomUpdateSchema>;

export type EmployeeRoomOrderBy = z.infer<typeof EmployeeRoomOrderBySchema>;

export type EmployeeRoomOwnProjection = z.infer<
  typeof EmployeeRoomOwnProjectionSchema
>;

export type EmployeeRoomOwnWhere = z.infer<typeof EmployeeRoomOwnWhereSchema>;

export type EmployeeRoomOwnQuery = z.infer<typeof EmployeeRoomOwnQuerySchema>;

export type EmployeeRoomOwnQueryOne = z.infer<
  typeof EmployeeRoomOwnQueryOneSchema
>;

export type EmployeeRoomWhere = z.infer<typeof EmployeeRoomWhereSchema>;

export type EmployeeRoomInclude = z.infer<typeof EmployeeRoomIncludeSchema>;

export type EmployeeRoomQueryOne = z.infer<typeof EmployeeRoomQueryOneSchema>;

export type EmployeeRoomQuery = z.infer<typeof EmployeeRoomQuerySchema>;

export type EmployeeRoomProjection = z.infer<
  typeof EmployeeRoomProjectionSchema
>;

export const EmployeeItemQueryOneSchema = z
  .object({
    where: EmployeeItemWhereSchemaJson,
    select: EmployeeItemProjectionSchemaJson,
    omit: EmployeeItemProjectionSchemaJson,
    include: EmployeeItemIncludeSchemaJson,
  })
  .partial();

export const EmployeeItemQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeItemWhereSchemaJson,
    select: EmployeeItemProjectionSchemaJson,
    omit: EmployeeItemProjectionSchemaJson,
    include: EmployeeItemIncludeSchemaJson,
  })
  .partial();

export type EmployeeItemCreate = z.infer<typeof EmployeeItemCreateSchema>;

export type EmployeeItemUpdate = z.infer<typeof EmployeeItemUpdateSchema>;

export type EmployeeItemOrderBy = z.infer<typeof EmployeeItemOrderBySchema>;

export type EmployeeItemOwnProjection = z.infer<
  typeof EmployeeItemOwnProjectionSchema
>;

export type EmployeeItemOwnWhere = z.infer<typeof EmployeeItemOwnWhereSchema>;

export type EmployeeItemOwnQuery = z.infer<typeof EmployeeItemOwnQuerySchema>;

export type EmployeeItemOwnQueryOne = z.infer<
  typeof EmployeeItemOwnQueryOneSchema
>;

export type EmployeeItemWhere = z.infer<typeof EmployeeItemWhereSchema>;

export type EmployeeItemInclude = z.infer<typeof EmployeeItemIncludeSchema>;

export type EmployeeItemQueryOne = z.infer<typeof EmployeeItemQueryOneSchema>;

export type EmployeeItemQuery = z.infer<typeof EmployeeItemQuerySchema>;

export type EmployeeItemProjection = z.infer<
  typeof EmployeeItemProjectionSchema
>;

export const EmployeeRoomRequestQueryOneSchema = z
  .object({
    where: EmployeeRoomRequestWhereSchemaJson,
    select: EmployeeRoomRequestProjectionSchemaJson,
    omit: EmployeeRoomRequestProjectionSchemaJson,
    include: EmployeeRoomRequestIncludeSchemaJson,
  })
  .partial();

export const EmployeeRoomRequestQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeRoomRequestWhereSchemaJson,
    select: EmployeeRoomRequestProjectionSchemaJson,
    omit: EmployeeRoomRequestProjectionSchemaJson,
    include: EmployeeRoomRequestIncludeSchemaJson,
  })
  .partial();

export type EmployeeRoomRequestCreate = z.infer<
  typeof EmployeeRoomRequestCreateSchema
>;

export type EmployeeRoomRequestUpdate = z.infer<
  typeof EmployeeRoomRequestUpdateSchema
>;

export type EmployeeRoomRequestOrderBy = z.infer<
  typeof EmployeeRoomRequestOrderBySchema
>;

export type EmployeeRoomRequestOwnProjection = z.infer<
  typeof EmployeeRoomRequestOwnProjectionSchema
>;

export type EmployeeRoomRequestOwnWhere = z.infer<
  typeof EmployeeRoomRequestOwnWhereSchema
>;

export type EmployeeRoomRequestOwnQuery = z.infer<
  typeof EmployeeRoomRequestOwnQuerySchema
>;

export type EmployeeRoomRequestOwnQueryOne = z.infer<
  typeof EmployeeRoomRequestOwnQueryOneSchema
>;

export type EmployeeRoomRequestWhere = z.infer<
  typeof EmployeeRoomRequestWhereSchema
>;

export type EmployeeRoomRequestInclude = z.infer<
  typeof EmployeeRoomRequestIncludeSchema
>;

export type EmployeeRoomRequestQueryOne = z.infer<
  typeof EmployeeRoomRequestQueryOneSchema
>;

export type EmployeeRoomRequestQuery = z.infer<
  typeof EmployeeRoomRequestQuerySchema
>;

export type EmployeeRoomRequestProjection = z.infer<
  typeof EmployeeRoomRequestProjectionSchema
>;

export const EmployeeItemRequestQueryOneSchema = z
  .object({
    where: EmployeeItemRequestWhereSchemaJson,
    select: EmployeeItemRequestProjectionSchemaJson,
    omit: EmployeeItemRequestProjectionSchemaJson,
    include: EmployeeItemRequestIncludeSchemaJson,
  })
  .partial();

export const EmployeeItemRequestQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeItemRequestWhereSchemaJson,
    select: EmployeeItemRequestProjectionSchemaJson,
    omit: EmployeeItemRequestProjectionSchemaJson,
    include: EmployeeItemRequestIncludeSchemaJson,
  })
  .partial();

export type EmployeeItemRequestCreate = z.infer<
  typeof EmployeeItemRequestCreateSchema
>;

export type EmployeeItemRequestUpdate = z.infer<
  typeof EmployeeItemRequestUpdateSchema
>;

export type EmployeeItemRequestOrderBy = z.infer<
  typeof EmployeeItemRequestOrderBySchema
>;

export type EmployeeItemRequestOwnProjection = z.infer<
  typeof EmployeeItemRequestOwnProjectionSchema
>;

export type EmployeeItemRequestOwnWhere = z.infer<
  typeof EmployeeItemRequestOwnWhereSchema
>;

export type EmployeeItemRequestOwnQuery = z.infer<
  typeof EmployeeItemRequestOwnQuerySchema
>;

export type EmployeeItemRequestOwnQueryOne = z.infer<
  typeof EmployeeItemRequestOwnQueryOneSchema
>;

export type EmployeeItemRequestWhere = z.infer<
  typeof EmployeeItemRequestWhereSchema
>;

export type EmployeeItemRequestInclude = z.infer<
  typeof EmployeeItemRequestIncludeSchema
>;

export type EmployeeItemRequestQueryOne = z.infer<
  typeof EmployeeItemRequestQueryOneSchema
>;

export type EmployeeItemRequestQuery = z.infer<
  typeof EmployeeItemRequestQuerySchema
>;

export type EmployeeItemRequestProjection = z.infer<
  typeof EmployeeItemRequestProjectionSchema
>;
