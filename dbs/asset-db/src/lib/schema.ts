/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();
export const PaginationSchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
  })
  .partial();

export const nameSchema = z.string().min(2).max(30);
export const descriptionSchema = z.string().max(1000);
export const currencySchema = z.coerce.number().positive();
export const positiveIntegerSchema = z.coerce.number().int().positive();
export const emailSchema = z.email();
export const dateSchema = z.iso.datetime();
export const slugSchema = z.string().regex(/^[a-z-]{2,}$/);

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

export const RoomAttributeOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean(),
  })
  .partial();

export const RoomAttributeOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeOwnSelectFieldsSchema
);

export const RoomAttributeDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const RoomAttributeValueOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean(),
    room: z.boolean(),
  })
  .partial();

export const RoomAttributeValueOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueOwnSelectFieldsSchema
);

export const RoomAttributeValueDistinctFieldsSchema = z
  .enum(['id', 'roomId', 'attributeId', 'value'])
  .array();

export const ItemAttributeOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean(),
  })
  .partial();

export const ItemAttributeOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeOwnSelectFieldsSchema
);

export const ItemAttributeDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const ItemAttributeValueOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    itemId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean(),
    item: z.boolean(),
  })
  .partial();

export const ItemAttributeValueOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueOwnSelectFieldsSchema
);

export const ItemAttributeValueDistinctFieldsSchema = z
  .enum(['id', 'itemId', 'attributeId', 'value'])
  .array();

export const CategoryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    parent: z.boolean(),
    children: z.boolean(),
    items: z.boolean(),
  })
  .partial();

export const CategoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnSelectFieldsSchema
);

export const CategoryDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name'])
  .array();

export const BuildingOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    rooms: z.boolean(),
  })
  .partial();

export const BuildingOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  BuildingOwnSelectFieldsSchema
);

export const BuildingDistinctFieldsSchema = z
  .enum(['id', 'name', 'code'])
  .array();

export const RoomOwnSelectFieldsSchema = z
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

export const RoomOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoomOwnSelectFieldsSchema
);

export const RoomDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'buildingId', 'name', 'code', 'floor'])
  .array();

export const ItemOwnSelectFieldsSchema = z
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

export const ItemOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ItemOwnSelectFieldsSchema
);

export const ItemDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'categoryId', 'name', 'description', 'minQuantity'])
  .array();

export const QuantityOwnSelectFieldsSchema = z
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

export const QuantityOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnSelectFieldsSchema
);

export const QuantityDistinctFieldsSchema = z
  .enum(['id', 'roomId', 'itemId', 'quantity', 'minQuantity'])
  .array();

export const SerialNumberOwnSelectFieldsSchema = z
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

export const SerialNumberOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnSelectFieldsSchema
);

export const SerialNumberDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'serialNumber', 'itemId', 'roomId'])
  .array();

export const QuantityMoveRequestOwnSelectFieldsSchema = z
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

export const QuantityMoveRequestOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestOwnSelectFieldsSchema
);

export const QuantityMoveRequestDistinctFieldsSchema = z
  .enum([
    'id',
    'sourceId',
    'targetId',
    'requestedById',
    'resolvedById',
    'quantity',
    'reason',
    'status',
    'requestedAt',
    'resolvedAt',
  ])
  .array();

export const SerialMoveRequestOwnSelectFieldsSchema = z
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

export const SerialMoveRequestOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestOwnSelectFieldsSchema
);

export const SerialMoveRequestDistinctFieldsSchema = z
  .enum([
    'id',
    'sourceId',
    'targetId',
    'requestedById',
    'resolvedById',
    'reason',
    'status',
    'requestedAt',
    'resolvedAt',
  ])
  .array();

export const EmployeeOwnSelectFieldsSchema = z
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

export const EmployeeOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnSelectFieldsSchema
);

export const EmployeeDistinctFieldsSchema = z.enum(['id', 'uuid']).array();

export const EmployeeRoomOwnSelectFieldsSchema = z
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

export const EmployeeRoomOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomOwnSelectFieldsSchema
);

export const EmployeeRoomDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'roomId', 'givenAt', 'takenAt'])
  .array();

export const EmployeeItemOwnSelectFieldsSchema = z
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

export const EmployeeItemOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemOwnSelectFieldsSchema
);

export const EmployeeItemDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'serialNumberId', 'givenAt', 'takenAt'])
  .array();

export const EmployeeRoomRequestOwnSelectFieldsSchema = z
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

export const EmployeeRoomRequestOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestOwnSelectFieldsSchema
);

export const EmployeeRoomRequestDistinctFieldsSchema = z
  .enum([
    'id',
    'roomId',
    'requestedById',
    'resolvedById',
    'requestedAt',
    'resolvedAt',
    'status',
    'note',
  ])
  .array();

export const EmployeeItemRequestOwnSelectFieldsSchema = z
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

export const EmployeeItemRequestOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestOwnSelectFieldsSchema
);

export const EmployeeItemRequestDistinctFieldsSchema = z
  .enum([
    'id',
    'requestedById',
    'resolvedById',
    'requestedAt',
    'resolvedAt',
    'serialNumberId',
    'status',
    'note',
  ])
  .array();

export const RoomAttributeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const RoomAttributeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeOwnWhereSchema
);

export const RoomAttributeValueOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    value: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const RoomAttributeValueOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueOwnWhereSchema
);

export const ItemAttributeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ItemAttributeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeOwnWhereSchema
);

export const ItemAttributeValueOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    itemId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    value: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ItemAttributeValueOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueOwnWhereSchema
);

export const CategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnWhereSchema
);

export const BuildingOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const BuildingOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  BuildingOwnWhereSchema
);

export const RoomOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    buildingId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    floor: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const RoomOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomOwnWhereSchema
);

export const ItemOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    minQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ItemOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemOwnWhereSchema
);

export const QuantityOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    itemId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    quantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    minQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const QuantityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityOwnWhereSchema
);

export const SerialNumberOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    serialNumber: z.string().or(PZ.StringFilterSchema),
    itemId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const SerialNumberOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberOwnWhereSchema
);

export const QuantityMoveRequestOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sourceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    targetId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    quantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    status: RequestStatusSchema,
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const QuantityMoveRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestOwnWhereSchema
);

export const SerialMoveRequestOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sourceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    targetId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    status: RequestStatusSchema,
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const SerialMoveRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestOwnWhereSchema
);

export const EmployeeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnWhereSchema
);

export const EmployeeRoomOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    givenAt: z.string().or(PZ.DateTimeFilterSchema),
    takenAt: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const EmployeeRoomOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomOwnWhereSchema
);

export const EmployeeItemOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    serialNumberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    givenAt: z.string().or(PZ.DateTimeFilterSchema),
    takenAt: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const EmployeeItemOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemOwnWhereSchema
);

export const EmployeeRoomRequestOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    status: RequestStatusSchema,
    note: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const EmployeeRoomRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestOwnWhereSchema
);

export const EmployeeItemRequestOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    serialNumberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    status: RequestStatusSchema,
    note: z.string().or(PZ.StringFilterSchema),
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
    distinct: RoomAttributeDistinctFieldsSchema,
  })
  .partial();

export const RoomAttributeOwnQuerySchema = z
  .object({
    where: RoomAttributeOwnWhereSchemaJson,
    distinct: RoomAttributeDistinctFieldsSchema,
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
    distinct: RoomAttributeValueDistinctFieldsSchema,
  })
  .partial();

export const RoomAttributeValueOwnQuerySchema = z
  .object({
    where: RoomAttributeValueOwnWhereSchemaJson,
    distinct: RoomAttributeValueDistinctFieldsSchema,
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
    distinct: ItemAttributeDistinctFieldsSchema,
  })
  .partial();

export const ItemAttributeOwnQuerySchema = z
  .object({
    where: ItemAttributeOwnWhereSchemaJson,
    distinct: ItemAttributeDistinctFieldsSchema,
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
    distinct: ItemAttributeValueDistinctFieldsSchema,
  })
  .partial();

export const ItemAttributeValueOwnQuerySchema = z
  .object({
    where: ItemAttributeValueOwnWhereSchemaJson,
    distinct: ItemAttributeValueDistinctFieldsSchema,
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
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    where: CategoryOwnWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
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
    distinct: BuildingDistinctFieldsSchema,
  })
  .partial();

export const BuildingOwnQuerySchema = z
  .object({
    where: BuildingOwnWhereSchemaJson,
    distinct: BuildingDistinctFieldsSchema,
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
    distinct: RoomDistinctFieldsSchema,
  })
  .partial();

export const RoomOwnQuerySchema = z
  .object({
    where: RoomOwnWhereSchemaJson,
    distinct: RoomDistinctFieldsSchema,
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
    distinct: ItemDistinctFieldsSchema,
  })
  .partial();

export const ItemOwnQuerySchema = z
  .object({
    where: ItemOwnWhereSchemaJson,
    distinct: ItemDistinctFieldsSchema,
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
    distinct: QuantityDistinctFieldsSchema,
  })
  .partial();

export const QuantityOwnQuerySchema = z
  .object({
    where: QuantityOwnWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
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
    distinct: SerialNumberDistinctFieldsSchema,
  })
  .partial();

export const SerialNumberOwnQuerySchema = z
  .object({
    where: SerialNumberOwnWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
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
    distinct: QuantityMoveRequestDistinctFieldsSchema,
  })
  .partial();

export const QuantityMoveRequestOwnQuerySchema = z
  .object({
    where: QuantityMoveRequestOwnWhereSchemaJson,
    distinct: QuantityMoveRequestDistinctFieldsSchema,
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
    distinct: SerialMoveRequestDistinctFieldsSchema,
  })
  .partial();

export const SerialMoveRequestOwnQuerySchema = z
  .object({
    where: SerialMoveRequestOwnWhereSchemaJson,
    distinct: SerialMoveRequestDistinctFieldsSchema,
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
    distinct: EmployeeDistinctFieldsSchema,
  })
  .partial();

export const EmployeeOwnQuerySchema = z
  .object({
    where: EmployeeOwnWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
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
    distinct: EmployeeRoomDistinctFieldsSchema,
  })
  .partial();

export const EmployeeRoomOwnQuerySchema = z
  .object({
    where: EmployeeRoomOwnWhereSchemaJson,
    distinct: EmployeeRoomDistinctFieldsSchema,
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
    distinct: EmployeeItemDistinctFieldsSchema,
  })
  .partial();

export const EmployeeItemOwnQuerySchema = z
  .object({
    where: EmployeeItemOwnWhereSchemaJson,
    distinct: EmployeeItemDistinctFieldsSchema,
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
    distinct: EmployeeRoomRequestDistinctFieldsSchema,
  })
  .partial();

export const EmployeeRoomRequestOwnQuerySchema = z
  .object({
    where: EmployeeRoomRequestOwnWhereSchemaJson,
    distinct: EmployeeRoomRequestDistinctFieldsSchema,
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
    distinct: EmployeeItemRequestDistinctFieldsSchema,
  })
  .partial();

export const EmployeeItemRequestOwnQuerySchema = z
  .object({
    where: EmployeeItemRequestOwnWhereSchemaJson,
    distinct: EmployeeItemRequestDistinctFieldsSchema,
  })
  .partial();

export const RoomAttributeCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const RoomAttributeUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
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

export const RoomAttributeSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean().or(RoomAttributeValueOwnQuerySchema),
  })
  .partial();

export const RoomAttributeSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeSelectFieldsSchema
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

export const RoomAttributeProjectionSchema = z
  .union([
    z
      .object({
        omit: RoomAttributeSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: RoomAttributeSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: RoomAttributeIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const RoomAttributeValueCreateSchema = z.object({
  roomId: z.coerce.number().int(),
  attributeId: z.coerce.number().int(),
  value: z.string(),
});

export const RoomAttributeValueUpdateSchema = z.object({
  roomId: z.coerce.number().int().optional(),
  attributeId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    value: z.string().or(PZ.StringFilterSchema),
    attribute: RoomAttributeOwnWhereSchema,
    room: RoomOwnWhereSchema,
  })
  .partial();

export const RoomAttributeValueWhereSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueWhereSchema
);

export const RoomAttributeValueSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean().or(RoomAttributeOwnQueryOneSchema),
    room: z.boolean().or(RoomOwnQueryOneSchema),
  })
  .partial();

export const RoomAttributeValueSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoomAttributeValueSelectFieldsSchema
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

export const RoomAttributeValueProjectionSchema = z
  .union([
    z
      .object({
        omit: RoomAttributeValueSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: RoomAttributeValueSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: RoomAttributeValueIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ItemAttributeCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const ItemAttributeUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
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

export const ItemAttributeSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean().or(ItemAttributeValueOwnQuerySchema),
  })
  .partial();

export const ItemAttributeSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeSelectFieldsSchema
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

export const ItemAttributeProjectionSchema = z
  .union([
    z
      .object({
        omit: ItemAttributeSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ItemAttributeSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ItemAttributeIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ItemAttributeValueCreateSchema = z.object({
  itemId: z.coerce.number().int(),
  attributeId: z.coerce.number().int(),
  value: z.string(),
});

export const ItemAttributeValueUpdateSchema = z.object({
  itemId: z.coerce.number().int().optional(),
  attributeId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    itemId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    attributeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    value: z.string().or(PZ.StringFilterSchema),
    attribute: ItemAttributeOwnWhereSchema,
    item: ItemOwnWhereSchema,
  })
  .partial();

export const ItemAttributeValueWhereSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueWhereSchema
);

export const ItemAttributeValueSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    itemId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: z.boolean().or(ItemAttributeOwnQueryOneSchema),
    item: z.boolean().or(ItemOwnQueryOneSchema),
  })
  .partial();

export const ItemAttributeValueSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ItemAttributeValueSelectFieldsSchema
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

export const ItemAttributeValueProjectionSchema = z
  .union([
    z
      .object({
        omit: ItemAttributeValueSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ItemAttributeValueSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ItemAttributeValueIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const CategoryCreateSchema = z.object({
  parentId: z.coerce.number().int().optional(),
  name: nameSchema.clone(),
});

export const CategoryUpdateSchema = z.object({
  parentId: z.coerce.number().int().optional().optional(),
  name: nameSchema.clone().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    parent: CategoryOwnWhereSchema,
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

export const CategorySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    children: z.boolean().or(CategoryOwnQuerySchema),
    items: z.boolean().or(ItemOwnQuerySchema),
  })
  .partial();

export const CategorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CategorySelectFieldsSchema
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

export const CategoryProjectionSchema = z
  .union([
    z
      .object({
        omit: CategorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: CategorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: CategoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const BuildingCreateSchema = z.object({
  name: nameSchema.clone(),
  code: z.string(),
});

export const BuildingUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
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

export const BuildingSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    rooms: z.boolean().or(RoomOwnQuerySchema),
  })
  .partial();

export const BuildingSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  BuildingSelectFieldsSchema
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

export const BuildingProjectionSchema = z
  .union([
    z
      .object({
        omit: BuildingSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: BuildingSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: BuildingIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const RoomCreateSchema = z.object({
  buildingId: z.coerce.number().int(),
  name: nameSchema.clone(),
  code: z.string(),
  floor: z.coerce.number().int().optional(),
});

export const RoomUpdateSchema = z.object({
  buildingId: z.coerce.number().int().optional(),
  name: nameSchema.clone().optional(),
  code: z.string().optional(),
  floor: z.coerce.number().int().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    buildingId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    floor: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    building: BuildingOwnWhereSchema,
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

export const RoomSelectFieldsSchema = z
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

export const RoomSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  RoomSelectFieldsSchema
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

export const RoomProjectionSchema = z
  .union([
    z
      .object({
        omit: RoomSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: RoomSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: RoomIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ItemCreateSchema = z.object({
  categoryId: z.coerce.number().int().optional(),
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  minQuantity: z.coerce.number().int().optional(),
});

export const ItemUpdateSchema = z.object({
  categoryId: z.coerce.number().int().optional().optional(),
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
  minQuantity: z.coerce.number().int().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    minQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    category: CategoryOwnWhereSchema,
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

export const ItemSelectFieldsSchema = z
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

export const ItemSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ItemSelectFieldsSchema
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

export const ItemProjectionSchema = z
  .union([
    z
      .object({
        omit: ItemSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ItemSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ItemIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const QuantityCreateSchema = z.object({
  roomId: z.coerce.number().int(),
  itemId: z.coerce.number().int(),
  quantity: positiveIntegerSchema.clone().optional(),
  minQuantity: z.coerce.number().int().optional(),
});

export const QuantityUpdateSchema = z.object({
  roomId: z.coerce.number().int().optional(),
  itemId: z.coerce.number().int().optional(),
  quantity: positiveIntegerSchema.clone().optional().optional(),
  minQuantity: z.coerce.number().int().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    itemId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    quantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    minQuantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    item: ItemOwnWhereSchema,
    room: RoomOwnWhereSchema,
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

export const QuantitySelectFieldsSchema = z
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

export const QuantitySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  QuantitySelectFieldsSchema
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

export const QuantityProjectionSchema = z
  .union([
    z
      .object({
        omit: QuantitySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: QuantitySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: QuantityIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const SerialNumberCreateSchema = z.object({
  serialNumber: z.string(),
  itemId: z.coerce.number().int(),
  roomId: z.coerce.number().int(),
});

export const SerialNumberUpdateSchema = z.object({
  serialNumber: z.string().optional(),
  itemId: z.coerce.number().int().optional(),
  roomId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    serialNumber: z.string().or(PZ.StringFilterSchema),
    itemId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    item: ItemOwnWhereSchema,
    room: RoomOwnWhereSchema,
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

export const SerialNumberSelectFieldsSchema = z
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

export const SerialNumberSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SerialNumberSelectFieldsSchema
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

export const SerialNumberProjectionSchema = z
  .union([
    z
      .object({
        omit: SerialNumberSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: SerialNumberSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: SerialNumberIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const QuantityMoveRequestCreateSchema = z.object({
  sourceId: z.coerce.number().int(),
  targetId: z.coerce.number().int(),
  requestedById: z.coerce.number().int(),
  resolvedById: z.coerce.number().int().optional(),
  quantity: positiveIntegerSchema.clone(),
  reason: z.string().optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: dateSchema.clone().optional(),
});

export const QuantityMoveRequestUpdateSchema = z.object({
  sourceId: z.coerce.number().int().optional(),
  targetId: z.coerce.number().int().optional(),
  requestedById: z.coerce.number().int().optional(),
  resolvedById: z.coerce.number().int().optional().optional(),
  quantity: positiveIntegerSchema.clone().optional(),
  reason: z.string().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  resolvedAt: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sourceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    targetId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    quantity: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    status: RequestStatusSchema,
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    source: QuantityOwnWhereSchema,
    target: QuantityOwnWhereSchema,
    requestedBy: EmployeeOwnWhereSchema,
    resolvedBy: EmployeeOwnWhereSchema,
  })
  .partial();

export const QuantityMoveRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestWhereSchema
);

export const QuantityMoveRequestSelectFieldsSchema = z
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

export const QuantityMoveRequestSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  QuantityMoveRequestSelectFieldsSchema
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

export const QuantityMoveRequestProjectionSchema = z
  .union([
    z
      .object({
        omit: QuantityMoveRequestSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: QuantityMoveRequestSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: QuantityMoveRequestIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const SerialMoveRequestCreateSchema = z.object({
  sourceId: z.coerce.number().int(),
  targetId: z.coerce.number().int(),
  requestedById: z.coerce.number().int(),
  resolvedById: z.coerce.number().int().optional(),
  reason: z.string().optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: dateSchema.clone().optional(),
});

export const SerialMoveRequestUpdateSchema = z.object({
  sourceId: z.coerce.number().int().optional(),
  targetId: z.coerce.number().int().optional(),
  requestedById: z.coerce.number().int().optional(),
  resolvedById: z.coerce.number().int().optional().optional(),
  reason: z.string().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  resolvedAt: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sourceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    targetId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    status: RequestStatusSchema,
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    source: SerialNumberOwnWhereSchema,
    target: SerialNumberOwnWhereSchema,
    requestedBy: EmployeeOwnWhereSchema,
    resolvedBy: EmployeeOwnWhereSchema,
  })
  .partial();

export const SerialMoveRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestWhereSchema
);

export const SerialMoveRequestSelectFieldsSchema = z
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

export const SerialMoveRequestSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SerialMoveRequestSelectFieldsSchema
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

export const SerialMoveRequestProjectionSchema = z
  .union([
    z
      .object({
        omit: SerialMoveRequestSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: SerialMoveRequestSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: SerialMoveRequestIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
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

export const EmployeeSelectFieldsSchema = z
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

export const EmployeeSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeSelectFieldsSchema
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

export const EmployeeProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: EmployeeSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: EmployeeIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const EmployeeRoomCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  roomId: z.coerce.number().int(),
  takenAt: dateSchema.clone().optional(),
});

export const EmployeeRoomUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  roomId: z.coerce.number().int().optional(),
  takenAt: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    givenAt: z.string().or(PZ.DateTimeFilterSchema),
    takenAt: z.string().or(PZ.DateTimeFilterSchema),
    room: RoomOwnWhereSchema,
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const EmployeeRoomWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomWhereSchema
);

export const EmployeeRoomSelectFieldsSchema = z
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

export const EmployeeRoomSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomSelectFieldsSchema
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

export const EmployeeRoomProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeRoomSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: EmployeeRoomSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: EmployeeRoomIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const EmployeeItemCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  serialNumberId: z.coerce.number().int(),
  takenAt: dateSchema.clone().optional(),
});

export const EmployeeItemUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  serialNumberId: z.coerce.number().int().optional(),
  takenAt: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    serialNumberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    givenAt: z.string().or(PZ.DateTimeFilterSchema),
    takenAt: z.string().or(PZ.DateTimeFilterSchema),
    serialNumber: SerialNumberOwnWhereSchema,
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const EmployeeItemWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemWhereSchema
);

export const EmployeeItemSelectFieldsSchema = z
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

export const EmployeeItemSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemSelectFieldsSchema
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

export const EmployeeItemProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeItemSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: EmployeeItemSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: EmployeeItemIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const EmployeeRoomRequestCreateSchema = z.object({
  roomId: z.coerce.number().int().optional(),
  requestedById: z.coerce.number().int(),
  resolvedById: z.coerce.number().int().optional(),
  resolvedAt: dateSchema.clone().optional(),
  status: RequestStatusSchema.optional(),
  note: z.string().optional(),
});

export const EmployeeRoomRequestUpdateSchema = z.object({
  roomId: z.coerce.number().int().optional().optional(),
  requestedById: z.coerce.number().int().optional(),
  resolvedById: z.coerce.number().int().optional().optional(),
  resolvedAt: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    roomId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    status: RequestStatusSchema,
    note: z.string().or(PZ.StringFilterSchema),
    room: RoomOwnWhereSchema,
    requestedBy: EmployeeOwnWhereSchema,
    resolvedBy: EmployeeOwnWhereSchema,
  })
  .partial();

export const EmployeeRoomRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestWhereSchema
);

export const EmployeeRoomRequestSelectFieldsSchema = z
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

export const EmployeeRoomRequestSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeRoomRequestSelectFieldsSchema
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

export const EmployeeRoomRequestProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeRoomRequestSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: EmployeeRoomRequestSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: EmployeeRoomRequestIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const EmployeeItemRequestCreateSchema = z.object({
  requestedById: z.coerce.number().int(),
  resolvedById: z.coerce.number().int().optional(),
  resolvedAt: dateSchema.clone().optional(),
  serialNumberId: z.coerce.number().int().optional(),
  status: RequestStatusSchema.optional(),
  note: z.string().optional(),
});

export const EmployeeItemRequestUpdateSchema = z.object({
  requestedById: z.coerce.number().int().optional(),
  resolvedById: z.coerce.number().int().optional().optional(),
  resolvedAt: dateSchema.clone().optional().optional(),
  serialNumberId: z.coerce.number().int().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolvedById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestedAt: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    serialNumberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    status: RequestStatusSchema,
    note: z.string().or(PZ.StringFilterSchema),
    serialNumber: SerialNumberOwnWhereSchema,
    requestedBy: EmployeeOwnWhereSchema,
    resolvedBy: EmployeeOwnWhereSchema,
  })
  .partial();

export const EmployeeItemRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestWhereSchema
);

export const EmployeeItemRequestSelectFieldsSchema = z
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

export const EmployeeItemRequestSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeItemRequestSelectFieldsSchema
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

export const EmployeeItemRequestProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeItemRequestSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: EmployeeItemRequestSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: EmployeeItemRequestIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const RoomAttributeQueryOneSchema = z
  .object({
    where: RoomAttributeWhereSchemaJson,
    distinct: RoomAttributeDistinctFieldsSchema,
  })
  .partial();

export const RoomAttributeQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: RoomAttributeWhereSchemaJson,
    distinct: RoomAttributeDistinctFieldsSchema,
    orderBy: RoomAttributeOrderBySchemaJson,
  })
  .partial();

export type RoomAttributeCreate = z.infer<typeof RoomAttributeCreateSchema>;

export type RoomAttributeUpdate = z.infer<typeof RoomAttributeUpdateSchema>;

export type RoomAttributeOrderBy = z.infer<typeof RoomAttributeOrderBySchema>;

export type RoomAttributeOwnSelectFields = z.infer<
  typeof RoomAttributeOwnSelectFieldsSchema
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

export type RoomAttributeSelectFields = z.infer<
  typeof RoomAttributeSelectFieldsSchema
>;

export type RoomAttributeProjection = z.infer<
  typeof RoomAttributeProjectionSchema
>;

export const RoomAttributeValueQueryOneSchema = z
  .object({
    where: RoomAttributeValueWhereSchemaJson,
    distinct: RoomAttributeValueDistinctFieldsSchema,
  })
  .partial();

export const RoomAttributeValueQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: RoomAttributeValueWhereSchemaJson,
    distinct: RoomAttributeValueDistinctFieldsSchema,
    orderBy: RoomAttributeValueOrderBySchemaJson,
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

export type RoomAttributeValueOwnSelectFields = z.infer<
  typeof RoomAttributeValueOwnSelectFieldsSchema
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

export type RoomAttributeValueSelectFields = z.infer<
  typeof RoomAttributeValueSelectFieldsSchema
>;

export type RoomAttributeValueProjection = z.infer<
  typeof RoomAttributeValueProjectionSchema
>;

export const ItemAttributeQueryOneSchema = z
  .object({
    where: ItemAttributeWhereSchemaJson,
    distinct: ItemAttributeDistinctFieldsSchema,
  })
  .partial();

export const ItemAttributeQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ItemAttributeWhereSchemaJson,
    distinct: ItemAttributeDistinctFieldsSchema,
    orderBy: ItemAttributeOrderBySchemaJson,
  })
  .partial();

export type ItemAttributeCreate = z.infer<typeof ItemAttributeCreateSchema>;

export type ItemAttributeUpdate = z.infer<typeof ItemAttributeUpdateSchema>;

export type ItemAttributeOrderBy = z.infer<typeof ItemAttributeOrderBySchema>;

export type ItemAttributeOwnSelectFields = z.infer<
  typeof ItemAttributeOwnSelectFieldsSchema
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

export type ItemAttributeSelectFields = z.infer<
  typeof ItemAttributeSelectFieldsSchema
>;

export type ItemAttributeProjection = z.infer<
  typeof ItemAttributeProjectionSchema
>;

export const ItemAttributeValueQueryOneSchema = z
  .object({
    where: ItemAttributeValueWhereSchemaJson,
    distinct: ItemAttributeValueDistinctFieldsSchema,
  })
  .partial();

export const ItemAttributeValueQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ItemAttributeValueWhereSchemaJson,
    distinct: ItemAttributeValueDistinctFieldsSchema,
    orderBy: ItemAttributeValueOrderBySchemaJson,
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

export type ItemAttributeValueOwnSelectFields = z.infer<
  typeof ItemAttributeValueOwnSelectFieldsSchema
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

export type ItemAttributeValueSelectFields = z.infer<
  typeof ItemAttributeValueSelectFieldsSchema
>;

export type ItemAttributeValueProjection = z.infer<
  typeof ItemAttributeValueProjectionSchema
>;

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
    orderBy: CategoryOrderBySchemaJson,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnSelectFields = z.infer<
  typeof CategoryOwnSelectFieldsSchema
>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategorySelectFields = z.infer<typeof CategorySelectFieldsSchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export const BuildingQueryOneSchema = z
  .object({
    where: BuildingWhereSchemaJson,
    distinct: BuildingDistinctFieldsSchema,
  })
  .partial();

export const BuildingQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: BuildingWhereSchemaJson,
    distinct: BuildingDistinctFieldsSchema,
    orderBy: BuildingOrderBySchemaJson,
  })
  .partial();

export type BuildingCreate = z.infer<typeof BuildingCreateSchema>;

export type BuildingUpdate = z.infer<typeof BuildingUpdateSchema>;

export type BuildingOrderBy = z.infer<typeof BuildingOrderBySchema>;

export type BuildingOwnSelectFields = z.infer<
  typeof BuildingOwnSelectFieldsSchema
>;

export type BuildingOwnWhere = z.infer<typeof BuildingOwnWhereSchema>;

export type BuildingOwnQuery = z.infer<typeof BuildingOwnQuerySchema>;

export type BuildingOwnQueryOne = z.infer<typeof BuildingOwnQueryOneSchema>;

export type BuildingWhere = z.infer<typeof BuildingWhereSchema>;

export type BuildingInclude = z.infer<typeof BuildingIncludeSchema>;

export type BuildingQueryOne = z.infer<typeof BuildingQueryOneSchema>;

export type BuildingQuery = z.infer<typeof BuildingQuerySchema>;

export type BuildingSelectFields = z.infer<typeof BuildingSelectFieldsSchema>;

export type BuildingProjection = z.infer<typeof BuildingProjectionSchema>;

export const RoomQueryOneSchema = z
  .object({
    where: RoomWhereSchemaJson,
    distinct: RoomDistinctFieldsSchema,
  })
  .partial();

export const RoomQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: RoomWhereSchemaJson,
    distinct: RoomDistinctFieldsSchema,
    orderBy: RoomOrderBySchemaJson,
  })
  .partial();

export type RoomCreate = z.infer<typeof RoomCreateSchema>;

export type RoomUpdate = z.infer<typeof RoomUpdateSchema>;

export type RoomOrderBy = z.infer<typeof RoomOrderBySchema>;

export type RoomOwnSelectFields = z.infer<typeof RoomOwnSelectFieldsSchema>;

export type RoomOwnWhere = z.infer<typeof RoomOwnWhereSchema>;

export type RoomOwnQuery = z.infer<typeof RoomOwnQuerySchema>;

export type RoomOwnQueryOne = z.infer<typeof RoomOwnQueryOneSchema>;

export type RoomWhere = z.infer<typeof RoomWhereSchema>;

export type RoomInclude = z.infer<typeof RoomIncludeSchema>;

export type RoomQueryOne = z.infer<typeof RoomQueryOneSchema>;

export type RoomQuery = z.infer<typeof RoomQuerySchema>;

export type RoomSelectFields = z.infer<typeof RoomSelectFieldsSchema>;

export type RoomProjection = z.infer<typeof RoomProjectionSchema>;

export const ItemQueryOneSchema = z
  .object({
    where: ItemWhereSchemaJson,
    distinct: ItemDistinctFieldsSchema,
  })
  .partial();

export const ItemQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ItemWhereSchemaJson,
    distinct: ItemDistinctFieldsSchema,
    orderBy: ItemOrderBySchemaJson,
  })
  .partial();

export type ItemCreate = z.infer<typeof ItemCreateSchema>;

export type ItemUpdate = z.infer<typeof ItemUpdateSchema>;

export type ItemOrderBy = z.infer<typeof ItemOrderBySchema>;

export type ItemOwnSelectFields = z.infer<typeof ItemOwnSelectFieldsSchema>;

export type ItemOwnWhere = z.infer<typeof ItemOwnWhereSchema>;

export type ItemOwnQuery = z.infer<typeof ItemOwnQuerySchema>;

export type ItemOwnQueryOne = z.infer<typeof ItemOwnQueryOneSchema>;

export type ItemWhere = z.infer<typeof ItemWhereSchema>;

export type ItemInclude = z.infer<typeof ItemIncludeSchema>;

export type ItemQueryOne = z.infer<typeof ItemQueryOneSchema>;

export type ItemQuery = z.infer<typeof ItemQuerySchema>;

export type ItemSelectFields = z.infer<typeof ItemSelectFieldsSchema>;

export type ItemProjection = z.infer<typeof ItemProjectionSchema>;

export const QuantityQueryOneSchema = z
  .object({
    where: QuantityWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
  })
  .partial();

export const QuantityQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: QuantityWhereSchemaJson,
    distinct: QuantityDistinctFieldsSchema,
    orderBy: QuantityOrderBySchemaJson,
  })
  .partial();

export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>;

export type QuantityOwnSelectFields = z.infer<
  typeof QuantityOwnSelectFieldsSchema
>;

export type QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>;

export type QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>;

export type QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>;

export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;

export type QuantityInclude = z.infer<typeof QuantityIncludeSchema>;

export type QuantityQueryOne = z.infer<typeof QuantityQueryOneSchema>;

export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;

export type QuantitySelectFields = z.infer<typeof QuantitySelectFieldsSchema>;

export type QuantityProjection = z.infer<typeof QuantityProjectionSchema>;

export const SerialNumberQueryOneSchema = z
  .object({
    where: SerialNumberWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
  })
  .partial();

export const SerialNumberQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SerialNumberWhereSchemaJson,
    distinct: SerialNumberDistinctFieldsSchema,
    orderBy: SerialNumberOrderBySchemaJson,
  })
  .partial();

export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;

export type SerialNumberOrderBy = z.infer<typeof SerialNumberOrderBySchema>;

export type SerialNumberOwnSelectFields = z.infer<
  typeof SerialNumberOwnSelectFieldsSchema
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

export type SerialNumberSelectFields = z.infer<
  typeof SerialNumberSelectFieldsSchema
>;

export type SerialNumberProjection = z.infer<
  typeof SerialNumberProjectionSchema
>;

export const QuantityMoveRequestQueryOneSchema = z
  .object({
    where: QuantityMoveRequestWhereSchemaJson,
    distinct: QuantityMoveRequestDistinctFieldsSchema,
  })
  .partial();

export const QuantityMoveRequestQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: QuantityMoveRequestWhereSchemaJson,
    distinct: QuantityMoveRequestDistinctFieldsSchema,
    orderBy: QuantityMoveRequestOrderBySchemaJson,
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

export type QuantityMoveRequestOwnSelectFields = z.infer<
  typeof QuantityMoveRequestOwnSelectFieldsSchema
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

export type QuantityMoveRequestSelectFields = z.infer<
  typeof QuantityMoveRequestSelectFieldsSchema
>;

export type QuantityMoveRequestProjection = z.infer<
  typeof QuantityMoveRequestProjectionSchema
>;

export const SerialMoveRequestQueryOneSchema = z
  .object({
    where: SerialMoveRequestWhereSchemaJson,
    distinct: SerialMoveRequestDistinctFieldsSchema,
  })
  .partial();

export const SerialMoveRequestQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SerialMoveRequestWhereSchemaJson,
    distinct: SerialMoveRequestDistinctFieldsSchema,
    orderBy: SerialMoveRequestOrderBySchemaJson,
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

export type SerialMoveRequestOwnSelectFields = z.infer<
  typeof SerialMoveRequestOwnSelectFieldsSchema
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

export type SerialMoveRequestSelectFields = z.infer<
  typeof SerialMoveRequestSelectFieldsSchema
>;

export type SerialMoveRequestProjection = z.infer<
  typeof SerialMoveRequestProjectionSchema
>;

export const EmployeeQueryOneSchema = z
  .object({
    where: EmployeeWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
  })
  .partial();

export const EmployeeQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
    orderBy: EmployeeOrderBySchemaJson,
  })
  .partial();

export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type EmployeeOrderBy = z.infer<typeof EmployeeOrderBySchema>;

export type EmployeeOwnSelectFields = z.infer<
  typeof EmployeeOwnSelectFieldsSchema
>;

export type EmployeeOwnWhere = z.infer<typeof EmployeeOwnWhereSchema>;

export type EmployeeOwnQuery = z.infer<typeof EmployeeOwnQuerySchema>;

export type EmployeeOwnQueryOne = z.infer<typeof EmployeeOwnQueryOneSchema>;

export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;

export type EmployeeInclude = z.infer<typeof EmployeeIncludeSchema>;

export type EmployeeQueryOne = z.infer<typeof EmployeeQueryOneSchema>;

export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

export type EmployeeSelectFields = z.infer<typeof EmployeeSelectFieldsSchema>;

export type EmployeeProjection = z.infer<typeof EmployeeProjectionSchema>;

export const EmployeeRoomQueryOneSchema = z
  .object({
    where: EmployeeRoomWhereSchemaJson,
    distinct: EmployeeRoomDistinctFieldsSchema,
  })
  .partial();

export const EmployeeRoomQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeRoomWhereSchemaJson,
    distinct: EmployeeRoomDistinctFieldsSchema,
    orderBy: EmployeeRoomOrderBySchemaJson,
  })
  .partial();

export type EmployeeRoomCreate = z.infer<typeof EmployeeRoomCreateSchema>;

export type EmployeeRoomUpdate = z.infer<typeof EmployeeRoomUpdateSchema>;

export type EmployeeRoomOrderBy = z.infer<typeof EmployeeRoomOrderBySchema>;

export type EmployeeRoomOwnSelectFields = z.infer<
  typeof EmployeeRoomOwnSelectFieldsSchema
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

export type EmployeeRoomSelectFields = z.infer<
  typeof EmployeeRoomSelectFieldsSchema
>;

export type EmployeeRoomProjection = z.infer<
  typeof EmployeeRoomProjectionSchema
>;

export const EmployeeItemQueryOneSchema = z
  .object({
    where: EmployeeItemWhereSchemaJson,
    distinct: EmployeeItemDistinctFieldsSchema,
  })
  .partial();

export const EmployeeItemQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeItemWhereSchemaJson,
    distinct: EmployeeItemDistinctFieldsSchema,
    orderBy: EmployeeItemOrderBySchemaJson,
  })
  .partial();

export type EmployeeItemCreate = z.infer<typeof EmployeeItemCreateSchema>;

export type EmployeeItemUpdate = z.infer<typeof EmployeeItemUpdateSchema>;

export type EmployeeItemOrderBy = z.infer<typeof EmployeeItemOrderBySchema>;

export type EmployeeItemOwnSelectFields = z.infer<
  typeof EmployeeItemOwnSelectFieldsSchema
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

export type EmployeeItemSelectFields = z.infer<
  typeof EmployeeItemSelectFieldsSchema
>;

export type EmployeeItemProjection = z.infer<
  typeof EmployeeItemProjectionSchema
>;

export const EmployeeRoomRequestQueryOneSchema = z
  .object({
    where: EmployeeRoomRequestWhereSchemaJson,
    distinct: EmployeeRoomRequestDistinctFieldsSchema,
  })
  .partial();

export const EmployeeRoomRequestQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeRoomRequestWhereSchemaJson,
    distinct: EmployeeRoomRequestDistinctFieldsSchema,
    orderBy: EmployeeRoomRequestOrderBySchemaJson,
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

export type EmployeeRoomRequestOwnSelectFields = z.infer<
  typeof EmployeeRoomRequestOwnSelectFieldsSchema
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

export type EmployeeRoomRequestSelectFields = z.infer<
  typeof EmployeeRoomRequestSelectFieldsSchema
>;

export type EmployeeRoomRequestProjection = z.infer<
  typeof EmployeeRoomRequestProjectionSchema
>;

export const EmployeeItemRequestQueryOneSchema = z
  .object({
    where: EmployeeItemRequestWhereSchemaJson,
    distinct: EmployeeItemRequestDistinctFieldsSchema,
  })
  .partial();

export const EmployeeItemRequestQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeItemRequestWhereSchemaJson,
    distinct: EmployeeItemRequestDistinctFieldsSchema,
    orderBy: EmployeeItemRequestOrderBySchemaJson,
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

export type EmployeeItemRequestOwnSelectFields = z.infer<
  typeof EmployeeItemRequestOwnSelectFieldsSchema
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

export type EmployeeItemRequestSelectFields = z.infer<
  typeof EmployeeItemRequestSelectFieldsSchema
>;

export type EmployeeItemRequestProjection = z.infer<
  typeof EmployeeItemRequestProjectionSchema
>;
