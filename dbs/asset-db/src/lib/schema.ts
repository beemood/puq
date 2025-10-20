/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

export const RequestStatusSchema = z.enum([
  'PENDING',
  'APPROVED',
  'REJECTED',
  'CANCELED',
]);

export const RoomAttributeOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    values: PZ.Scalar.bool(),
  })
  .partial();

export const RoomAttributeOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeOwnSelectFieldsSchema
);

export const RoomAttributeDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const RoomAttributeValueOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
  })
  .partial();

export const RoomAttributeValueOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeValueOwnSelectFieldsSchema
);

export const RoomAttributeValueDistinctFieldsSchema = z
  .enum(['id', 'roomId', 'attributeId', 'value'])
  .array();

export const ItemAttributeOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    values: PZ.Scalar.bool(),
  })
  .partial();

export const ItemAttributeOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeOwnSelectFieldsSchema
);

export const ItemAttributeDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const ItemAttributeValueOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool(),
    item: PZ.Scalar.bool(),
  })
  .partial();

export const ItemAttributeValueOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeValueOwnSelectFieldsSchema
);

export const ItemAttributeValueDistinctFieldsSchema = z
  .enum(['id', 'itemId', 'attributeId', 'value'])
  .array();

export const CategoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    children: PZ.Scalar.bool(),
    items: PZ.Scalar.bool(),
  })
  .partial();

export const CategoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryOwnSelectFieldsSchema
);

export const CategoryDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name'])
  .array();

export const BuildingOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    rooms: PZ.Scalar.bool(),
  })
  .partial();

export const BuildingOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BuildingOwnSelectFieldsSchema
);

export const BuildingDistinctFieldsSchema = z
  .enum(['id', 'name', 'code'])
  .array();

export const RoomOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    buildingId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    floor: PZ.Scalar.bool(),
    building: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    serials: PZ.Scalar.bool(),
    employeeRooms: PZ.Scalar.bool(),
    employeeRoomRequests: PZ.Scalar.bool(),
  })
  .partial();

export const RoomOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomOwnSelectFieldsSchema
);

export const RoomDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'buildingId', 'name', 'code', 'floor'])
  .array();

export const ItemOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    serials: PZ.Scalar.bool(),
  })
  .partial();

export const ItemOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemOwnSelectFieldsSchema
);

export const ItemDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'categoryId', 'name', 'description', 'minQuantity'])
  .array();

export const QuantityOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    item: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
    quantityMoveSources: PZ.Scalar.bool(),
    quantityMoveTargets: PZ.Scalar.bool(),
  })
  .partial();

export const QuantityOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityOwnSelectFieldsSchema
);

export const QuantityDistinctFieldsSchema = z
  .enum(['id', 'roomId', 'itemId', 'quantity', 'minQuantity'])
  .array();

export const SerialNumberOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    item: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
    serialMoveSources: PZ.Scalar.bool(),
    serialMoveTargets: PZ.Scalar.bool(),
    employeeItemRequests: PZ.Scalar.bool(),
    employeeItems: PZ.Scalar.bool(),
  })
  .partial();

export const SerialNumberOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberOwnSelectFieldsSchema
);

export const SerialNumberDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'serialNumber', 'itemId', 'roomId'])
  .array();

export const QuantityMoveRequestOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sourceId: PZ.Scalar.bool(),
    targetId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    source: PZ.Scalar.bool(),
    target: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const QuantityMoveRequestOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    sourceId: PZ.Scalar.bool(),
    targetId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    source: PZ.Scalar.bool(),
    target: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const SerialMoveRequestOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    rooms: PZ.Scalar.bool(),
    items: PZ.Scalar.bool(),
    itemRequesters: PZ.Scalar.bool(),
    itemResolvers: PZ.Scalar.bool(),
    roomRequesters: PZ.Scalar.bool(),
    roomResolvers: PZ.Scalar.bool(),
    serialMoveRequesters: PZ.Scalar.bool(),
    serialMoveResolvers: PZ.Scalar.bool(),
    quantityMoveRequesters: PZ.Scalar.bool(),
    quantityMoveResolvers: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOwnSelectFieldsSchema
);

export const EmployeeDistinctFieldsSchema = z.enum(['id', 'uuid']).array();

export const EmployeeRoomOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    givenAt: PZ.Scalar.bool(),
    takenAt: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeRoomOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomOwnSelectFieldsSchema
);

export const EmployeeRoomDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'roomId', 'givenAt', 'takenAt'])
  .array();

export const EmployeeItemOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    serialNumberId: PZ.Scalar.bool(),
    givenAt: PZ.Scalar.bool(),
    takenAt: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeItemOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemOwnSelectFieldsSchema
);

export const EmployeeItemDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'serialNumberId', 'givenAt', 'takenAt'])
  .array();

export const EmployeeRoomRequestOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeRoomRequestOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    serialNumberId: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeItemRequestOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  RoomAttributeValueOwnWhereSchema
);

export const ItemAttributeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const ItemAttributeOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  SerialMoveRequestOwnWhereSchema
);

export const EmployeeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  EmployeeItemRequestOwnWhereSchema
);

export const RoomAttributeOwnIncludeSchema = z
  .object({
    values: PZ.Scalar.bool(),
  })
  .partial();

export const RoomAttributeOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    attribute: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
  })
  .partial();

export const RoomAttributeValueOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    values: PZ.Scalar.bool(),
  })
  .partial();

export const ItemAttributeOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    attribute: PZ.Scalar.bool(),
    item: PZ.Scalar.bool(),
  })
  .partial();

export const ItemAttributeValueOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    parent: PZ.Scalar.bool(),
    children: PZ.Scalar.bool(),
    items: PZ.Scalar.bool(),
  })
  .partial();

export const CategoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    rooms: PZ.Scalar.bool(),
  })
  .partial();

export const BuildingOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    building: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    serials: PZ.Scalar.bool(),
    employeeRooms: PZ.Scalar.bool(),
    employeeRoomRequests: PZ.Scalar.bool(),
  })
  .partial();

export const RoomOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    category: PZ.Scalar.bool(),
    attributes: PZ.Scalar.bool(),
    quantities: PZ.Scalar.bool(),
    serials: PZ.Scalar.bool(),
  })
  .partial();

export const ItemOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    item: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
    quantityMoveSources: PZ.Scalar.bool(),
    quantityMoveTargets: PZ.Scalar.bool(),
  })
  .partial();

export const QuantityOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    item: PZ.Scalar.bool(),
    room: PZ.Scalar.bool(),
    serialMoveSources: PZ.Scalar.bool(),
    serialMoveTargets: PZ.Scalar.bool(),
    employeeItemRequests: PZ.Scalar.bool(),
    employeeItems: PZ.Scalar.bool(),
  })
  .partial();

export const SerialNumberOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    source: PZ.Scalar.bool(),
    target: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const QuantityMoveRequestOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    source: PZ.Scalar.bool(),
    target: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const SerialMoveRequestOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    rooms: PZ.Scalar.bool(),
    items: PZ.Scalar.bool(),
    itemRequesters: PZ.Scalar.bool(),
    itemResolvers: PZ.Scalar.bool(),
    roomRequesters: PZ.Scalar.bool(),
    roomResolvers: PZ.Scalar.bool(),
    serialMoveRequesters: PZ.Scalar.bool(),
    serialMoveResolvers: PZ.Scalar.bool(),
    quantityMoveRequesters: PZ.Scalar.bool(),
    quantityMoveResolvers: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    room: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeRoomOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    serialNumber: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeItemOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    room: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeRoomRequestOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    serialNumber: PZ.Scalar.bool(),
    requestedBy: PZ.Scalar.bool(),
    resolvedBy: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeItemRequestOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const RoomAttributeRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
});

export const RoomAttributeCreateSchema = RoomAttributeRawCreateSchema.clone();

export const RoomAttributeRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const RoomAttributeUpdateSchema = RoomAttributeRawUpdateSchema.clone();

export const RoomAttributeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const RoomAttributeOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  RoomAttributeWhereSchema
);

export const RoomAttributeSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    values: PZ.Scalar.bool().or(RoomAttributeValueOwnQuerySchema),
  })
  .partial();

export const RoomAttributeSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeSelectFieldsSchema
);

export const RoomAttributeOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const RoomAttributeOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeOmitFieldsSchema
);

export const RoomAttributeIncludeSchema = z
  .object({
    values: PZ.Scalar.bool().or(RoomAttributeValueOwnQuerySchema),
  })
  .partial();

export const RoomAttributeIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeIncludeSchema
);

export const RoomAttributeProjectionSchema = z.union([
  z.object({ omit: RoomAttributeOmitFieldsSchemaJson }),
  z.object({ select: RoomAttributeSelectFieldsSchemaJson }),
  z.object({ include: RoomAttributeIncludeSchemaJson }),
  z.object({}),
]);

export const RoomAttributeValueRawCreateSchema = z.object({
  roomId: PZ.Scalar.id(),
  attributeId: PZ.Scalar.id(),
  value: PZ.Scalar.string(),
});

export const RoomAttributeValueCreateSchema =
  RoomAttributeValueRawCreateSchema.clone();

export const RoomAttributeValueRawUpdateSchema = z.object({
  roomId: PZ.Scalar.id().optional(),
  attributeId: PZ.Scalar.id().optional(),
  value: PZ.Scalar.string().optional(),
});

export const RoomAttributeValueUpdateSchema =
  RoomAttributeValueRawUpdateSchema.clone();

export const RoomAttributeValueOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    value: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const RoomAttributeValueOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  RoomAttributeValueWhereSchema
);

export const RoomAttributeValueSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool().or(RoomAttributeOwnQueryOneSchema),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
  })
  .partial();

export const RoomAttributeValueSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeValueSelectFieldsSchema
);

export const RoomAttributeValueOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'roomId', 'attributeId', 'value'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const RoomAttributeValueOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeValueOmitFieldsSchema
);

export const RoomAttributeValueIncludeSchema = z
  .object({
    attribute: PZ.Scalar.bool().or(RoomAttributeOwnQueryOneSchema),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
  })
  .partial();

export const RoomAttributeValueIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomAttributeValueIncludeSchema
);

export const RoomAttributeValueProjectionSchema = z.union([
  z.object({ omit: RoomAttributeValueOmitFieldsSchemaJson }),
  z.object({ select: RoomAttributeValueSelectFieldsSchemaJson }),
  z.object({ include: RoomAttributeValueIncludeSchemaJson }),
  z.object({}),
]);

export const ItemAttributeRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
});

export const ItemAttributeCreateSchema = ItemAttributeRawCreateSchema.clone();

export const ItemAttributeRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const ItemAttributeUpdateSchema = ItemAttributeRawUpdateSchema.clone();

export const ItemAttributeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ItemAttributeOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ItemAttributeWhereSchema
);

export const ItemAttributeSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    values: PZ.Scalar.bool().or(ItemAttributeValueOwnQuerySchema),
  })
  .partial();

export const ItemAttributeSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeSelectFieldsSchema
);

export const ItemAttributeOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const ItemAttributeOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeOmitFieldsSchema
);

export const ItemAttributeIncludeSchema = z
  .object({
    values: PZ.Scalar.bool().or(ItemAttributeValueOwnQuerySchema),
  })
  .partial();

export const ItemAttributeIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeIncludeSchema
);

export const ItemAttributeProjectionSchema = z.union([
  z.object({ omit: ItemAttributeOmitFieldsSchemaJson }),
  z.object({ select: ItemAttributeSelectFieldsSchemaJson }),
  z.object({ include: ItemAttributeIncludeSchemaJson }),
  z.object({}),
]);

export const ItemAttributeValueRawCreateSchema = z.object({
  itemId: PZ.Scalar.id(),
  attributeId: PZ.Scalar.id(),
  value: PZ.Scalar.string(),
});

export const ItemAttributeValueCreateSchema =
  ItemAttributeValueRawCreateSchema.clone();

export const ItemAttributeValueRawUpdateSchema = z.object({
  itemId: PZ.Scalar.id().optional(),
  attributeId: PZ.Scalar.id().optional(),
  value: PZ.Scalar.string().optional(),
});

export const ItemAttributeValueUpdateSchema =
  ItemAttributeValueRawUpdateSchema.clone();

export const ItemAttributeValueOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    itemId: PZ.OrderDirectionSchema,
    attributeId: PZ.OrderDirectionSchema,
    value: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ItemAttributeValueOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ItemAttributeValueWhereSchema
);

export const ItemAttributeValueSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
    attribute: PZ.Scalar.bool().or(ItemAttributeOwnQueryOneSchema),
    item: PZ.Scalar.bool().or(ItemOwnQueryOneSchema),
  })
  .partial();

export const ItemAttributeValueSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeValueSelectFieldsSchema
);

export const ItemAttributeValueOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    attributeId: PZ.Scalar.bool(),
    value: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'itemId', 'attributeId', 'value'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ItemAttributeValueOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeValueOmitFieldsSchema
);

export const ItemAttributeValueIncludeSchema = z
  .object({
    attribute: PZ.Scalar.bool().or(ItemAttributeOwnQueryOneSchema),
    item: PZ.Scalar.bool().or(ItemOwnQueryOneSchema),
  })
  .partial();

export const ItemAttributeValueIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemAttributeValueIncludeSchema
);

export const ItemAttributeValueProjectionSchema = z.union([
  z.object({ omit: ItemAttributeValueOmitFieldsSchemaJson }),
  z.object({ select: ItemAttributeValueSelectFieldsSchemaJson }),
  z.object({ include: ItemAttributeValueIncludeSchemaJson }),
  z.object({}),
]);

export const CategoryRawCreateSchema = z.object({
  parentId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name(),
});

export const CategoryCreateSchema = CategoryRawCreateSchema.clone();

export const CategoryRawUpdateSchema = z.object({
  parentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
});

export const CategoryUpdateSchema = CategoryRawUpdateSchema.clone();

export const CategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CategoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  CategoryWhereSchema
);

export const CategorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    children: PZ.Scalar.bool().or(CategoryOwnQuerySchema),
    items: PZ.Scalar.bool().or(ItemOwnQuerySchema),
  })
  .partial();

export const CategorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategorySelectFieldsSchema
);

export const CategoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'parentId', 'name'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CategoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryOmitFieldsSchema
);

export const CategoryIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    children: PZ.Scalar.bool().or(CategoryOwnQuerySchema),
    items: PZ.Scalar.bool().or(ItemOwnQuerySchema),
  })
  .partial();

export const CategoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryIncludeSchema
);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitFieldsSchemaJson }),
  z.object({ select: CategorySelectFieldsSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const BuildingRawCreateSchema = z.object({
  name: PZ.Scalar.name(),
  code: PZ.Scalar.string(),
});

export const BuildingCreateSchema = BuildingRawCreateSchema.clone();

export const BuildingRawUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  code: PZ.Scalar.string().optional(),
});

export const BuildingUpdateSchema = BuildingRawUpdateSchema.clone();

export const BuildingOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const BuildingOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  BuildingWhereSchema
);

export const BuildingSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    rooms: PZ.Scalar.bool().or(RoomOwnQuerySchema),
  })
  .partial();

export const BuildingSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BuildingSelectFieldsSchema
);

export const BuildingOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'name', 'code'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const BuildingOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BuildingOmitFieldsSchema
);

export const BuildingIncludeSchema = z
  .object({
    rooms: PZ.Scalar.bool().or(RoomOwnQuerySchema),
  })
  .partial();

export const BuildingIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BuildingIncludeSchema
);

export const BuildingProjectionSchema = z.union([
  z.object({ omit: BuildingOmitFieldsSchemaJson }),
  z.object({ select: BuildingSelectFieldsSchemaJson }),
  z.object({ include: BuildingIncludeSchemaJson }),
  z.object({}),
]);

export const RoomRawCreateSchema = z.object({
  buildingId: PZ.Scalar.id(),
  name: PZ.Scalar.name(),
  code: PZ.Scalar.string(),
  floor: PZ.Scalar.int().optional(),
});

export const RoomCreateSchema = RoomRawCreateSchema.clone();

export const RoomRawUpdateSchema = z.object({
  buildingId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name().optional(),
  code: PZ.Scalar.string().optional(),
  floor: PZ.Scalar.int().optional().optional(),
});

export const RoomUpdateSchema = RoomRawUpdateSchema.clone();

export const RoomOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    buildingId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
    floor: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const RoomOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const RoomWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomWhereSchema
);

export const RoomSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    buildingId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    floor: PZ.Scalar.bool(),
    building: PZ.Scalar.bool().or(BuildingOwnQueryOneSchema),
    attributes: PZ.Scalar.bool().or(RoomAttributeValueOwnQuerySchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    serials: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
    employeeRooms: PZ.Scalar.bool().or(EmployeeRoomOwnQuerySchema),
    employeeRoomRequests: PZ.Scalar.bool().or(
      EmployeeRoomRequestOwnQuerySchema
    ),
  })
  .partial();

export const RoomSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomSelectFieldsSchema
);

export const RoomOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    buildingId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    floor: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'buildingId', 'name', 'code', 'floor'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const RoomOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomOmitFieldsSchema
);

export const RoomIncludeSchema = z
  .object({
    building: PZ.Scalar.bool().or(BuildingOwnQueryOneSchema),
    attributes: PZ.Scalar.bool().or(RoomAttributeValueOwnQuerySchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    serials: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
    employeeRooms: PZ.Scalar.bool().or(EmployeeRoomOwnQuerySchema),
    employeeRoomRequests: PZ.Scalar.bool().or(
      EmployeeRoomRequestOwnQuerySchema
    ),
  })
  .partial();

export const RoomIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  RoomIncludeSchema
);

export const RoomProjectionSchema = z.union([
  z.object({ omit: RoomOmitFieldsSchemaJson }),
  z.object({ select: RoomSelectFieldsSchemaJson }),
  z.object({ include: RoomIncludeSchemaJson }),
  z.object({}),
]);

export const ItemRawCreateSchema = z.object({
  categoryId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name(),
  description: PZ.Scalar.description().optional(),
  minQuantity: PZ.Scalar.int().optional(),
});

export const ItemCreateSchema = ItemRawCreateSchema.clone();

export const ItemRawUpdateSchema = z.object({
  categoryId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  minQuantity: PZ.Scalar.int().optional().optional(),
});

export const ItemUpdateSchema = ItemRawUpdateSchema.clone();

export const ItemOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    minQuantity: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ItemOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const ItemWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemWhereSchema
);

export const ItemSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    attributes: PZ.Scalar.bool().or(ItemAttributeValueOwnQuerySchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    serials: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const ItemSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemSelectFieldsSchema
);

export const ItemOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'categoryId', 'name', 'description', 'minQuantity'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ItemOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemOmitFieldsSchema
);

export const ItemIncludeSchema = z
  .object({
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    attributes: PZ.Scalar.bool().or(ItemAttributeValueOwnQuerySchema),
    quantities: PZ.Scalar.bool().or(QuantityOwnQuerySchema),
    serials: PZ.Scalar.bool().or(SerialNumberOwnQuerySchema),
  })
  .partial();

export const ItemIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ItemIncludeSchema
);

export const ItemProjectionSchema = z.union([
  z.object({ omit: ItemOmitFieldsSchemaJson }),
  z.object({ select: ItemSelectFieldsSchemaJson }),
  z.object({ include: ItemIncludeSchemaJson }),
  z.object({}),
]);

export const QuantityRawCreateSchema = z.object({
  roomId: PZ.Scalar.id(),
  itemId: PZ.Scalar.id(),
  quantity: PZ.Scalar.positiveInt().optional(),
  minQuantity: PZ.Scalar.int().optional(),
});

export const QuantityCreateSchema = QuantityRawCreateSchema.clone();

export const QuantityRawUpdateSchema = z.object({
  roomId: PZ.Scalar.id().optional(),
  itemId: PZ.Scalar.id().optional(),
  quantity: PZ.Scalar.positiveInt().optional().optional(),
  minQuantity: PZ.Scalar.int().optional().optional(),
});

export const QuantityUpdateSchema = QuantityRawUpdateSchema.clone();

export const QuantityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    itemId: PZ.OrderDirectionSchema,
    quantity: PZ.OrderDirectionSchema,
    minQuantity: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const QuantityOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  QuantityWhereSchema
);

export const QuantitySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
    item: PZ.Scalar.bool().or(ItemOwnQueryOneSchema),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    quantityMoveSources: PZ.Scalar.bool().or(QuantityMoveRequestOwnQuerySchema),
    quantityMoveTargets: PZ.Scalar.bool().or(QuantityMoveRequestOwnQuerySchema),
  })
  .partial();

export const QuantitySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantitySelectFieldsSchema
);

export const QuantityOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    minQuantity: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'roomId', 'itemId', 'quantity', 'minQuantity'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const QuantityOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityOmitFieldsSchema
);

export const QuantityIncludeSchema = z
  .object({
    item: PZ.Scalar.bool().or(ItemOwnQueryOneSchema),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    quantityMoveSources: PZ.Scalar.bool().or(QuantityMoveRequestOwnQuerySchema),
    quantityMoveTargets: PZ.Scalar.bool().or(QuantityMoveRequestOwnQuerySchema),
  })
  .partial();

export const QuantityIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityIncludeSchema
);

export const QuantityProjectionSchema = z.union([
  z.object({ omit: QuantityOmitFieldsSchemaJson }),
  z.object({ select: QuantitySelectFieldsSchemaJson }),
  z.object({ include: QuantityIncludeSchemaJson }),
  z.object({}),
]);

export const SerialNumberRawCreateSchema = z.object({
  serialNumber: PZ.Scalar.string(),
  itemId: PZ.Scalar.id(),
  roomId: PZ.Scalar.id(),
});

export const SerialNumberCreateSchema = SerialNumberRawCreateSchema.clone();

export const SerialNumberRawUpdateSchema = z.object({
  serialNumber: PZ.Scalar.string().optional(),
  itemId: PZ.Scalar.id().optional(),
  roomId: PZ.Scalar.id().optional(),
});

export const SerialNumberUpdateSchema = SerialNumberRawUpdateSchema.clone();

export const SerialNumberOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    serialNumber: PZ.OrderDirectionSchema,
    itemId: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SerialNumberOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  SerialNumberWhereSchema
);

export const SerialNumberSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    item: PZ.Scalar.bool().or(ItemOwnQueryOneSchema),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    serialMoveSources: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    serialMoveTargets: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    employeeItemRequests: PZ.Scalar.bool().or(
      EmployeeItemRequestOwnQuerySchema
    ),
    employeeItems: PZ.Scalar.bool().or(EmployeeItemOwnQuerySchema),
  })
  .partial();

export const SerialNumberSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberSelectFieldsSchema
);

export const SerialNumberOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool(),
    itemId: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'serialNumber', 'itemId', 'roomId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SerialNumberOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberOmitFieldsSchema
);

export const SerialNumberIncludeSchema = z
  .object({
    item: PZ.Scalar.bool().or(ItemOwnQueryOneSchema),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    serialMoveSources: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    serialMoveTargets: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    employeeItemRequests: PZ.Scalar.bool().or(
      EmployeeItemRequestOwnQuerySchema
    ),
    employeeItems: PZ.Scalar.bool().or(EmployeeItemOwnQuerySchema),
  })
  .partial();

export const SerialNumberIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialNumberIncludeSchema
);

export const SerialNumberProjectionSchema = z.union([
  z.object({ omit: SerialNumberOmitFieldsSchemaJson }),
  z.object({ select: SerialNumberSelectFieldsSchemaJson }),
  z.object({ include: SerialNumberIncludeSchemaJson }),
  z.object({}),
]);

export const QuantityMoveRequestRawCreateSchema = z.object({
  sourceId: PZ.Scalar.id(),
  targetId: PZ.Scalar.id(),
  requestedById: PZ.Scalar.id(),
  resolvedById: PZ.Scalar.id().optional(),
  quantity: PZ.Scalar.positiveInt(),
  reason: PZ.Scalar.string().optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: PZ.Scalar.datetime().optional(),
});

export const QuantityMoveRequestCreateSchema =
  QuantityMoveRequestRawCreateSchema.clone();

export const QuantityMoveRequestRawUpdateSchema = z.object({
  sourceId: PZ.Scalar.id().optional(),
  targetId: PZ.Scalar.id().optional(),
  requestedById: PZ.Scalar.id().optional(),
  resolvedById: PZ.Scalar.id().optional().optional(),
  quantity: PZ.Scalar.positiveInt().optional(),
  reason: PZ.Scalar.string().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  resolvedAt: PZ.Scalar.datetime().optional().optional(),
});

export const QuantityMoveRequestUpdateSchema =
  QuantityMoveRequestRawUpdateSchema.clone();

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const QuantityMoveRequestOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  QuantityMoveRequestWhereSchema
);

export const QuantityMoveRequestSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sourceId: PZ.Scalar.bool(),
    targetId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    source: PZ.Scalar.bool().or(QuantityOwnQueryOneSchema),
    target: PZ.Scalar.bool().or(QuantityOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const QuantityMoveRequestSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityMoveRequestSelectFieldsSchema
);

export const QuantityMoveRequestOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sourceId: PZ.Scalar.bool(),
    targetId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    quantity: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
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
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const QuantityMoveRequestOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityMoveRequestOmitFieldsSchema
);

export const QuantityMoveRequestIncludeSchema = z
  .object({
    source: PZ.Scalar.bool().or(QuantityOwnQueryOneSchema),
    target: PZ.Scalar.bool().or(QuantityOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const QuantityMoveRequestIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  QuantityMoveRequestIncludeSchema
);

export const QuantityMoveRequestProjectionSchema = z.union([
  z.object({ omit: QuantityMoveRequestOmitFieldsSchemaJson }),
  z.object({ select: QuantityMoveRequestSelectFieldsSchemaJson }),
  z.object({ include: QuantityMoveRequestIncludeSchemaJson }),
  z.object({}),
]);

export const SerialMoveRequestRawCreateSchema = z.object({
  sourceId: PZ.Scalar.id(),
  targetId: PZ.Scalar.id(),
  requestedById: PZ.Scalar.id(),
  resolvedById: PZ.Scalar.id().optional(),
  reason: PZ.Scalar.string().optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: PZ.Scalar.datetime().optional(),
});

export const SerialMoveRequestCreateSchema =
  SerialMoveRequestRawCreateSchema.clone();

export const SerialMoveRequestRawUpdateSchema = z.object({
  sourceId: PZ.Scalar.id().optional(),
  targetId: PZ.Scalar.id().optional(),
  requestedById: PZ.Scalar.id().optional(),
  resolvedById: PZ.Scalar.id().optional().optional(),
  reason: PZ.Scalar.string().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  resolvedAt: PZ.Scalar.datetime().optional().optional(),
});

export const SerialMoveRequestUpdateSchema =
  SerialMoveRequestRawUpdateSchema.clone();

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SerialMoveRequestOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  SerialMoveRequestWhereSchema
);

export const SerialMoveRequestSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sourceId: PZ.Scalar.bool(),
    targetId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    source: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    target: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SerialMoveRequestSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialMoveRequestSelectFieldsSchema
);

export const SerialMoveRequestOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sourceId: PZ.Scalar.bool(),
    targetId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'sourceId',
        'targetId',
        'requestedById',
        'resolvedById',
        'reason',
        'status',
        'requestedAt',
        'resolvedAt',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SerialMoveRequestOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialMoveRequestOmitFieldsSchema
);

export const SerialMoveRequestIncludeSchema = z
  .object({
    source: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    target: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SerialMoveRequestIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SerialMoveRequestIncludeSchema
);

export const SerialMoveRequestProjectionSchema = z.union([
  z.object({ omit: SerialMoveRequestOmitFieldsSchemaJson }),
  z.object({ select: SerialMoveRequestSelectFieldsSchemaJson }),
  z.object({ include: SerialMoveRequestIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeRawCreateSchema = z.object({
  uuid: PZ.Scalar.string(),
});

export const EmployeeCreateSchema = EmployeeRawCreateSchema.clone();

export const EmployeeRawUpdateSchema = z.object({
  uuid: PZ.Scalar.string().optional(),
});

export const EmployeeUpdateSchema = EmployeeRawUpdateSchema.clone();

export const EmployeeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  EmployeeWhereSchema
);

export const EmployeeSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    rooms: PZ.Scalar.bool().or(EmployeeRoomOwnQuerySchema),
    items: PZ.Scalar.bool().or(EmployeeItemOwnQuerySchema),
    itemRequesters: PZ.Scalar.bool().or(EmployeeItemRequestOwnQuerySchema),
    itemResolvers: PZ.Scalar.bool().or(EmployeeItemRequestOwnQuerySchema),
    roomRequesters: PZ.Scalar.bool().or(EmployeeRoomRequestOwnQuerySchema),
    roomResolvers: PZ.Scalar.bool().or(EmployeeRoomRequestOwnQuerySchema),
    serialMoveRequesters: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    serialMoveResolvers: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    quantityMoveRequesters: PZ.Scalar.bool().or(
      QuantityMoveRequestOwnQuerySchema
    ),
    quantityMoveResolvers: PZ.Scalar.bool().or(
      QuantityMoveRequestOwnQuerySchema
    ),
  })
  .partial();

export const EmployeeSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeSelectFieldsSchema
);

export const EmployeeOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'uuid'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const EmployeeOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOmitFieldsSchema
);

export const EmployeeIncludeSchema = z
  .object({
    rooms: PZ.Scalar.bool().or(EmployeeRoomOwnQuerySchema),
    items: PZ.Scalar.bool().or(EmployeeItemOwnQuerySchema),
    itemRequesters: PZ.Scalar.bool().or(EmployeeItemRequestOwnQuerySchema),
    itemResolvers: PZ.Scalar.bool().or(EmployeeItemRequestOwnQuerySchema),
    roomRequesters: PZ.Scalar.bool().or(EmployeeRoomRequestOwnQuerySchema),
    roomResolvers: PZ.Scalar.bool().or(EmployeeRoomRequestOwnQuerySchema),
    serialMoveRequesters: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    serialMoveResolvers: PZ.Scalar.bool().or(SerialMoveRequestOwnQuerySchema),
    quantityMoveRequesters: PZ.Scalar.bool().or(
      QuantityMoveRequestOwnQuerySchema
    ),
    quantityMoveResolvers: PZ.Scalar.bool().or(
      QuantityMoveRequestOwnQuerySchema
    ),
  })
  .partial();

export const EmployeeIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeIncludeSchema
);

export const EmployeeProjectionSchema = z.union([
  z.object({ omit: EmployeeOmitFieldsSchemaJson }),
  z.object({ select: EmployeeSelectFieldsSchemaJson }),
  z.object({ include: EmployeeIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeRoomRawCreateSchema = z.object({
  employeeId: PZ.Scalar.id(),
  roomId: PZ.Scalar.id(),
  takenAt: PZ.Scalar.datetime().optional(),
});

export const EmployeeRoomCreateSchema = EmployeeRoomRawCreateSchema.clone();

export const EmployeeRoomRawUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  roomId: PZ.Scalar.id().optional(),
  takenAt: PZ.Scalar.datetime().optional().optional(),
});

export const EmployeeRoomUpdateSchema = EmployeeRoomRawUpdateSchema.clone();

export const EmployeeRoomOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    roomId: PZ.OrderDirectionSchema,
    givenAt: PZ.OrderDirectionSchema,
    takenAt: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeRoomOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  EmployeeRoomWhereSchema
);

export const EmployeeRoomSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    givenAt: PZ.Scalar.bool(),
    takenAt: PZ.Scalar.bool(),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomSelectFieldsSchema
);

export const EmployeeRoomOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    givenAt: PZ.Scalar.bool(),
    takenAt: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'employeeId', 'roomId', 'givenAt', 'takenAt'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeRoomOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomOmitFieldsSchema
);

export const EmployeeRoomIncludeSchema = z
  .object({
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomIncludeSchema
);

export const EmployeeRoomProjectionSchema = z.union([
  z.object({ omit: EmployeeRoomOmitFieldsSchemaJson }),
  z.object({ select: EmployeeRoomSelectFieldsSchemaJson }),
  z.object({ include: EmployeeRoomIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeItemRawCreateSchema = z.object({
  employeeId: PZ.Scalar.id(),
  serialNumberId: PZ.Scalar.id(),
  takenAt: PZ.Scalar.datetime().optional(),
});

export const EmployeeItemCreateSchema = EmployeeItemRawCreateSchema.clone();

export const EmployeeItemRawUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  serialNumberId: PZ.Scalar.id().optional(),
  takenAt: PZ.Scalar.datetime().optional().optional(),
});

export const EmployeeItemUpdateSchema = EmployeeItemRawUpdateSchema.clone();

export const EmployeeItemOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    serialNumberId: PZ.OrderDirectionSchema,
    givenAt: PZ.OrderDirectionSchema,
    takenAt: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeItemOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  EmployeeItemWhereSchema
);

export const EmployeeItemSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    serialNumberId: PZ.Scalar.bool(),
    givenAt: PZ.Scalar.bool(),
    takenAt: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemSelectFieldsSchema
);

export const EmployeeItemOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    serialNumberId: PZ.Scalar.bool(),
    givenAt: PZ.Scalar.bool(),
    takenAt: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'employeeId', 'serialNumberId', 'givenAt', 'takenAt'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeItemOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemOmitFieldsSchema
);

export const EmployeeItemIncludeSchema = z
  .object({
    serialNumber: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemIncludeSchema
);

export const EmployeeItemProjectionSchema = z.union([
  z.object({ omit: EmployeeItemOmitFieldsSchemaJson }),
  z.object({ select: EmployeeItemSelectFieldsSchemaJson }),
  z.object({ include: EmployeeItemIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeRoomRequestRawCreateSchema = z.object({
  roomId: PZ.Scalar.id().optional(),
  requestedById: PZ.Scalar.id(),
  resolvedById: PZ.Scalar.id().optional(),
  resolvedAt: PZ.Scalar.datetime().optional(),
  status: RequestStatusSchema.optional(),
  note: PZ.Scalar.string().optional(),
});

export const EmployeeRoomRequestCreateSchema =
  EmployeeRoomRequestRawCreateSchema.clone();

export const EmployeeRoomRequestRawUpdateSchema = z.object({
  roomId: PZ.Scalar.id().optional().optional(),
  requestedById: PZ.Scalar.id().optional(),
  resolvedById: PZ.Scalar.id().optional().optional(),
  resolvedAt: PZ.Scalar.datetime().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  note: PZ.Scalar.string().optional().optional(),
});

export const EmployeeRoomRequestUpdateSchema =
  EmployeeRoomRequestRawUpdateSchema.clone();

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeRoomRequestOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  EmployeeRoomRequestWhereSchema
);

export const EmployeeRoomRequestSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomRequestSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomRequestSelectFieldsSchema
);

export const EmployeeRoomRequestOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    roomId: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'roomId',
        'requestedById',
        'resolvedById',
        'requestedAt',
        'resolvedAt',
        'status',
        'note',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeRoomRequestOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomRequestOmitFieldsSchema
);

export const EmployeeRoomRequestIncludeSchema = z
  .object({
    room: PZ.Scalar.bool().or(RoomOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeRoomRequestIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeRoomRequestIncludeSchema
);

export const EmployeeRoomRequestProjectionSchema = z.union([
  z.object({ omit: EmployeeRoomRequestOmitFieldsSchemaJson }),
  z.object({ select: EmployeeRoomRequestSelectFieldsSchemaJson }),
  z.object({ include: EmployeeRoomRequestIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeItemRequestRawCreateSchema = z.object({
  requestedById: PZ.Scalar.id(),
  resolvedById: PZ.Scalar.id().optional(),
  resolvedAt: PZ.Scalar.datetime().optional(),
  serialNumberId: PZ.Scalar.id().optional(),
  status: RequestStatusSchema.optional(),
  note: PZ.Scalar.string().optional(),
});

export const EmployeeItemRequestCreateSchema =
  EmployeeItemRequestRawCreateSchema.clone();

export const EmployeeItemRequestRawUpdateSchema = z.object({
  requestedById: PZ.Scalar.id().optional(),
  resolvedById: PZ.Scalar.id().optional().optional(),
  resolvedAt: PZ.Scalar.datetime().optional().optional(),
  serialNumberId: PZ.Scalar.id().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  note: PZ.Scalar.string().optional().optional(),
});

export const EmployeeItemRequestUpdateSchema =
  EmployeeItemRequestRawUpdateSchema.clone();

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeItemRequestOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  EmployeeItemRequestWhereSchema
);

export const EmployeeItemRequestSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    serialNumberId: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
    serialNumber: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemRequestSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemRequestSelectFieldsSchema
);

export const EmployeeItemRequestOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    requestedById: PZ.Scalar.bool(),
    resolvedById: PZ.Scalar.bool(),
    requestedAt: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    serialNumberId: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'requestedById',
        'resolvedById',
        'requestedAt',
        'resolvedAt',
        'serialNumberId',
        'status',
        'note',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeItemRequestOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemRequestOmitFieldsSchema
);

export const EmployeeItemRequestIncludeSchema = z
  .object({
    serialNumber: PZ.Scalar.bool().or(SerialNumberOwnQueryOneSchema),
    requestedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    resolvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeItemRequestIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeItemRequestIncludeSchema
);

export const EmployeeItemRequestProjectionSchema = z.union([
  z.object({ omit: EmployeeItemRequestOmitFieldsSchemaJson }),
  z.object({ select: EmployeeItemRequestSelectFieldsSchemaJson }),
  z.object({ include: EmployeeItemRequestIncludeSchemaJson }),
  z.object({}),
]);

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

export type RoomAttributeCreate = z.infer<typeof RoomAttributeRawCreateSchema>;

export type RoomAttributeUpdate = z.infer<typeof RoomAttributeRawUpdateSchema>;

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

export type RoomAttributeOmitFields = z.infer<
  typeof RoomAttributeOmitFieldsSchema
>;

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
  typeof RoomAttributeValueRawCreateSchema
>;

export type RoomAttributeValueUpdate = z.infer<
  typeof RoomAttributeValueRawUpdateSchema
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

export type RoomAttributeValueOmitFields = z.infer<
  typeof RoomAttributeValueOmitFieldsSchema
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

export type ItemAttributeCreate = z.infer<typeof ItemAttributeRawCreateSchema>;

export type ItemAttributeUpdate = z.infer<typeof ItemAttributeRawUpdateSchema>;

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

export type ItemAttributeOmitFields = z.infer<
  typeof ItemAttributeOmitFieldsSchema
>;

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
  typeof ItemAttributeValueRawCreateSchema
>;

export type ItemAttributeValueUpdate = z.infer<
  typeof ItemAttributeValueRawUpdateSchema
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

export type ItemAttributeValueOmitFields = z.infer<
  typeof ItemAttributeValueOmitFieldsSchema
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

export type CategoryCreate = z.infer<typeof CategoryRawCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryRawUpdateSchema>;

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

export type CategoryOmitFields = z.infer<typeof CategoryOmitFieldsSchema>;

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

export type BuildingCreate = z.infer<typeof BuildingRawCreateSchema>;

export type BuildingUpdate = z.infer<typeof BuildingRawUpdateSchema>;

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

export type BuildingOmitFields = z.infer<typeof BuildingOmitFieldsSchema>;

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

export type RoomCreate = z.infer<typeof RoomRawCreateSchema>;

export type RoomUpdate = z.infer<typeof RoomRawUpdateSchema>;

export type RoomOrderBy = z.infer<typeof RoomOrderBySchema>;

export type RoomOwnSelectFields = z.infer<typeof RoomOwnSelectFieldsSchema>;

export type RoomOwnWhere = z.infer<typeof RoomOwnWhereSchema>;

export type RoomOwnQuery = z.infer<typeof RoomOwnQuerySchema>;

export type RoomOwnQueryOne = z.infer<typeof RoomOwnQueryOneSchema>;

export type RoomWhere = z.infer<typeof RoomWhereSchema>;

export type RoomInclude = z.infer<typeof RoomIncludeSchema>;

export type RoomQueryOne = z.infer<typeof RoomQueryOneSchema>;

export type RoomQuery = z.infer<typeof RoomQuerySchema>;

export type RoomOmitFields = z.infer<typeof RoomOmitFieldsSchema>;

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

export type ItemCreate = z.infer<typeof ItemRawCreateSchema>;

export type ItemUpdate = z.infer<typeof ItemRawUpdateSchema>;

export type ItemOrderBy = z.infer<typeof ItemOrderBySchema>;

export type ItemOwnSelectFields = z.infer<typeof ItemOwnSelectFieldsSchema>;

export type ItemOwnWhere = z.infer<typeof ItemOwnWhereSchema>;

export type ItemOwnQuery = z.infer<typeof ItemOwnQuerySchema>;

export type ItemOwnQueryOne = z.infer<typeof ItemOwnQueryOneSchema>;

export type ItemWhere = z.infer<typeof ItemWhereSchema>;

export type ItemInclude = z.infer<typeof ItemIncludeSchema>;

export type ItemQueryOne = z.infer<typeof ItemQueryOneSchema>;

export type ItemQuery = z.infer<typeof ItemQuerySchema>;

export type ItemOmitFields = z.infer<typeof ItemOmitFieldsSchema>;

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

export type QuantityCreate = z.infer<typeof QuantityRawCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityRawUpdateSchema>;

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

export type QuantityOmitFields = z.infer<typeof QuantityOmitFieldsSchema>;

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

export type SerialNumberCreate = z.infer<typeof SerialNumberRawCreateSchema>;

export type SerialNumberUpdate = z.infer<typeof SerialNumberRawUpdateSchema>;

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

export type SerialNumberOmitFields = z.infer<
  typeof SerialNumberOmitFieldsSchema
>;

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
  typeof QuantityMoveRequestRawCreateSchema
>;

export type QuantityMoveRequestUpdate = z.infer<
  typeof QuantityMoveRequestRawUpdateSchema
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

export type QuantityMoveRequestOmitFields = z.infer<
  typeof QuantityMoveRequestOmitFieldsSchema
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
  typeof SerialMoveRequestRawCreateSchema
>;

export type SerialMoveRequestUpdate = z.infer<
  typeof SerialMoveRequestRawUpdateSchema
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

export type SerialMoveRequestOmitFields = z.infer<
  typeof SerialMoveRequestOmitFieldsSchema
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

export type EmployeeCreate = z.infer<typeof EmployeeRawCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeRawUpdateSchema>;

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

export type EmployeeOmitFields = z.infer<typeof EmployeeOmitFieldsSchema>;

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

export type EmployeeRoomCreate = z.infer<typeof EmployeeRoomRawCreateSchema>;

export type EmployeeRoomUpdate = z.infer<typeof EmployeeRoomRawUpdateSchema>;

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

export type EmployeeRoomOmitFields = z.infer<
  typeof EmployeeRoomOmitFieldsSchema
>;

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

export type EmployeeItemCreate = z.infer<typeof EmployeeItemRawCreateSchema>;

export type EmployeeItemUpdate = z.infer<typeof EmployeeItemRawUpdateSchema>;

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

export type EmployeeItemOmitFields = z.infer<
  typeof EmployeeItemOmitFieldsSchema
>;

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
  typeof EmployeeRoomRequestRawCreateSchema
>;

export type EmployeeRoomRequestUpdate = z.infer<
  typeof EmployeeRoomRequestRawUpdateSchema
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

export type EmployeeRoomRequestOmitFields = z.infer<
  typeof EmployeeRoomRequestOmitFieldsSchema
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
  typeof EmployeeItemRequestRawCreateSchema
>;

export type EmployeeItemRequestUpdate = z.infer<
  typeof EmployeeItemRequestRawUpdateSchema
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

export type EmployeeItemRequestOmitFields = z.infer<
  typeof EmployeeItemRequestOmitFieldsSchema
>;

export type EmployeeItemRequestSelectFields = z.infer<
  typeof EmployeeItemRequestSelectFieldsSchema
>;

export type EmployeeItemRequestProjection = z.infer<
  typeof EmployeeItemRequestProjectionSchema
>;
