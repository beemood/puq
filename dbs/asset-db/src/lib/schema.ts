import PZ from '@puq/zod';
import { z } from 'zod';

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

export const ItemAttributeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: z.boolean(),
  })
  .partial();

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

export const BuildingOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    rooms: z.boolean(),
  })
  .partial();

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

export const RoomAttributeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const RoomAttributeValueOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    value: PZ.StringFilterSchema,
  })
  .partial();

export const ItemAttributeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const ItemAttributeValueOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    attributeId: PZ.IntegerFilterSchema,
    value: PZ.StringFilterSchema,
  })
  .partial();

export const CategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const BuildingOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

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

export const QuantityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    quantity: PZ.IntegerFilterSchema,
    minQuantity: PZ.IntegerFilterSchema,
  })
  .partial();

export const SerialNumberOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    serialNumber: PZ.StringFilterSchema,
    itemId: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
  })
  .partial();

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

export const EmployeeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
  })
  .partial();

export const EmployeeRoomOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    roomId: PZ.IntegerFilterSchema,
    givenAt: PZ.DateTimeFilterSchema,
    takenAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const EmployeeItemOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    serialNumberId: PZ.IntegerFilterSchema,
    givenAt: PZ.DateTimeFilterSchema,
    takenAt: PZ.DateTimeFilterSchema,
  })
  .partial();

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

export const RoomAttributeOwnQueryOneSchema = z
  .object({
    where: RoomAttributeOwnWhereSchema,
    select: RoomAttributeOwnProjectionSchema,
    omit: RoomAttributeOwnProjectionSchema,
  })
  .partial();

export const RoomAttributeOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoomAttributeOwnWhereSchema,
    select: RoomAttributeOwnProjectionSchema,
    omit: RoomAttributeOwnProjectionSchema,
  })
  .partial();

export const RoomAttributeValueOwnQueryOneSchema = z
  .object({
    where: RoomAttributeValueOwnWhereSchema,
    select: RoomAttributeValueOwnProjectionSchema,
    omit: RoomAttributeValueOwnProjectionSchema,
  })
  .partial();

export const RoomAttributeValueOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoomAttributeValueOwnWhereSchema,
    select: RoomAttributeValueOwnProjectionSchema,
    omit: RoomAttributeValueOwnProjectionSchema,
  })
  .partial();

export const ItemAttributeOwnQueryOneSchema = z
  .object({
    where: ItemAttributeOwnWhereSchema,
    select: ItemAttributeOwnProjectionSchema,
    omit: ItemAttributeOwnProjectionSchema,
  })
  .partial();

export const ItemAttributeOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ItemAttributeOwnWhereSchema,
    select: ItemAttributeOwnProjectionSchema,
    omit: ItemAttributeOwnProjectionSchema,
  })
  .partial();

export const ItemAttributeValueOwnQueryOneSchema = z
  .object({
    where: ItemAttributeValueOwnWhereSchema,
    select: ItemAttributeValueOwnProjectionSchema,
    omit: ItemAttributeValueOwnProjectionSchema,
  })
  .partial();

export const ItemAttributeValueOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ItemAttributeValueOwnWhereSchema,
    select: ItemAttributeValueOwnProjectionSchema,
    omit: ItemAttributeValueOwnProjectionSchema,
  })
  .partial();

export const CategoryOwnQueryOneSchema = z
  .object({
    where: CategoryOwnWhereSchema,
    select: CategoryOwnProjectionSchema,
    omit: CategoryOwnProjectionSchema,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: CategoryOwnWhereSchema,
    select: CategoryOwnProjectionSchema,
    omit: CategoryOwnProjectionSchema,
  })
  .partial();

export const BuildingOwnQueryOneSchema = z
  .object({
    where: BuildingOwnWhereSchema,
    select: BuildingOwnProjectionSchema,
    omit: BuildingOwnProjectionSchema,
  })
  .partial();

export const BuildingOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: BuildingOwnWhereSchema,
    select: BuildingOwnProjectionSchema,
    omit: BuildingOwnProjectionSchema,
  })
  .partial();

export const RoomOwnQueryOneSchema = z
  .object({
    where: RoomOwnWhereSchema,
    select: RoomOwnProjectionSchema,
    omit: RoomOwnProjectionSchema,
  })
  .partial();

export const RoomOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoomOwnWhereSchema,
    select: RoomOwnProjectionSchema,
    omit: RoomOwnProjectionSchema,
  })
  .partial();

export const ItemOwnQueryOneSchema = z
  .object({
    where: ItemOwnWhereSchema,
    select: ItemOwnProjectionSchema,
    omit: ItemOwnProjectionSchema,
  })
  .partial();

export const ItemOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ItemOwnWhereSchema,
    select: ItemOwnProjectionSchema,
    omit: ItemOwnProjectionSchema,
  })
  .partial();

export const QuantityOwnQueryOneSchema = z
  .object({
    where: QuantityOwnWhereSchema,
    select: QuantityOwnProjectionSchema,
    omit: QuantityOwnProjectionSchema,
  })
  .partial();

export const QuantityOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: QuantityOwnWhereSchema,
    select: QuantityOwnProjectionSchema,
    omit: QuantityOwnProjectionSchema,
  })
  .partial();

export const SerialNumberOwnQueryOneSchema = z
  .object({
    where: SerialNumberOwnWhereSchema,
    select: SerialNumberOwnProjectionSchema,
    omit: SerialNumberOwnProjectionSchema,
  })
  .partial();

export const SerialNumberOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SerialNumberOwnWhereSchema,
    select: SerialNumberOwnProjectionSchema,
    omit: SerialNumberOwnProjectionSchema,
  })
  .partial();

export const QuantityMoveRequestOwnQueryOneSchema = z
  .object({
    where: QuantityMoveRequestOwnWhereSchema,
    select: QuantityMoveRequestOwnProjectionSchema,
    omit: QuantityMoveRequestOwnProjectionSchema,
  })
  .partial();

export const QuantityMoveRequestOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: QuantityMoveRequestOwnWhereSchema,
    select: QuantityMoveRequestOwnProjectionSchema,
    omit: QuantityMoveRequestOwnProjectionSchema,
  })
  .partial();

export const SerialMoveRequestOwnQueryOneSchema = z
  .object({
    where: SerialMoveRequestOwnWhereSchema,
    select: SerialMoveRequestOwnProjectionSchema,
    omit: SerialMoveRequestOwnProjectionSchema,
  })
  .partial();

export const SerialMoveRequestOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SerialMoveRequestOwnWhereSchema,
    select: SerialMoveRequestOwnProjectionSchema,
    omit: SerialMoveRequestOwnProjectionSchema,
  })
  .partial();

export const EmployeeOwnQueryOneSchema = z
  .object({
    where: EmployeeOwnWhereSchema,
    select: EmployeeOwnProjectionSchema,
    omit: EmployeeOwnProjectionSchema,
  })
  .partial();

export const EmployeeOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeOwnWhereSchema,
    select: EmployeeOwnProjectionSchema,
    omit: EmployeeOwnProjectionSchema,
  })
  .partial();

export const EmployeeRoomOwnQueryOneSchema = z
  .object({
    where: EmployeeRoomOwnWhereSchema,
    select: EmployeeRoomOwnProjectionSchema,
    omit: EmployeeRoomOwnProjectionSchema,
  })
  .partial();

export const EmployeeRoomOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeRoomOwnWhereSchema,
    select: EmployeeRoomOwnProjectionSchema,
    omit: EmployeeRoomOwnProjectionSchema,
  })
  .partial();

export const EmployeeItemOwnQueryOneSchema = z
  .object({
    where: EmployeeItemOwnWhereSchema,
    select: EmployeeItemOwnProjectionSchema,
    omit: EmployeeItemOwnProjectionSchema,
  })
  .partial();

export const EmployeeItemOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeItemOwnWhereSchema,
    select: EmployeeItemOwnProjectionSchema,
    omit: EmployeeItemOwnProjectionSchema,
  })
  .partial();

export const EmployeeRoomRequestOwnQueryOneSchema = z
  .object({
    where: EmployeeRoomRequestOwnWhereSchema,
    select: EmployeeRoomRequestOwnProjectionSchema,
    omit: EmployeeRoomRequestOwnProjectionSchema,
  })
  .partial();

export const EmployeeRoomRequestOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeRoomRequestOwnWhereSchema,
    select: EmployeeRoomRequestOwnProjectionSchema,
    omit: EmployeeRoomRequestOwnProjectionSchema,
  })
  .partial();

export const EmployeeItemRequestOwnQueryOneSchema = z
  .object({
    where: EmployeeItemRequestOwnWhereSchema,
    select: EmployeeItemRequestOwnProjectionSchema,
    omit: EmployeeItemRequestOwnProjectionSchema,
  })
  .partial();

export const EmployeeItemRequestOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeItemRequestOwnWhereSchema,
    select: EmployeeItemRequestOwnProjectionSchema,
    omit: EmployeeItemRequestOwnProjectionSchema,
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

export const RoomAttributeProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: RoomAttributeValueOwnQuerySchema,
  })
  .partial();

export const RoomAttributeQueryOneSchema = z
  .object({
    where: RoomAttributeWhereSchema,
    select: RoomAttributeProjectionSchema,
    omit: RoomAttributeProjectionSchema,
  })
  .partial();

export const RoomAttributeQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoomAttributeWhereSchema,
    select: RoomAttributeProjectionSchema,
    omit: RoomAttributeProjectionSchema,
  })
  .partial();

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

export const RoomAttributeValueProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: RoomAttributeOwnQueryOneSchema,
    room: RoomOwnQueryOneSchema,
  })
  .partial();

export const RoomAttributeValueQueryOneSchema = z
  .object({
    where: RoomAttributeValueWhereSchema,
    select: RoomAttributeValueProjectionSchema,
    omit: RoomAttributeValueProjectionSchema,
  })
  .partial();

export const RoomAttributeValueQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoomAttributeValueWhereSchema,
    select: RoomAttributeValueProjectionSchema,
    omit: RoomAttributeValueProjectionSchema,
  })
  .partial();

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

export const ItemAttributeProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    values: ItemAttributeValueOwnQuerySchema,
  })
  .partial();

export const ItemAttributeQueryOneSchema = z
  .object({
    where: ItemAttributeWhereSchema,
    select: ItemAttributeProjectionSchema,
    omit: ItemAttributeProjectionSchema,
  })
  .partial();

export const ItemAttributeQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ItemAttributeWhereSchema,
    select: ItemAttributeProjectionSchema,
    omit: ItemAttributeProjectionSchema,
  })
  .partial();

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

export const ItemAttributeValueProjectionSchema = z
  .object({
    id: z.boolean(),
    itemId: z.boolean(),
    attributeId: z.boolean(),
    value: z.boolean(),
    attribute: ItemAttributeOwnQueryOneSchema,
    item: ItemOwnQueryOneSchema,
  })
  .partial();

export const ItemAttributeValueQueryOneSchema = z
  .object({
    where: ItemAttributeValueWhereSchema,
    select: ItemAttributeValueProjectionSchema,
    omit: ItemAttributeValueProjectionSchema,
  })
  .partial();

export const ItemAttributeValueQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ItemAttributeValueWhereSchema,
    select: ItemAttributeValueProjectionSchema,
    omit: ItemAttributeValueProjectionSchema,
  })
  .partial();

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

export const CategoryProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    parent: CategoryOwnQueryOneSchema,
    children: CategoryOwnQuerySchema,
    items: ItemOwnQuerySchema,
  })
  .partial();

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchema,
    select: CategoryProjectionSchema,
    omit: CategoryProjectionSchema,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: CategoryWhereSchema,
    select: CategoryProjectionSchema,
    omit: CategoryProjectionSchema,
  })
  .partial();

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

export const BuildingProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    rooms: RoomOwnQuerySchema,
  })
  .partial();

export const BuildingQueryOneSchema = z
  .object({
    where: BuildingWhereSchema,
    select: BuildingProjectionSchema,
    omit: BuildingProjectionSchema,
  })
  .partial();

export const BuildingQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: BuildingWhereSchema,
    select: BuildingProjectionSchema,
    omit: BuildingProjectionSchema,
  })
  .partial();

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

export const RoomProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    buildingId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    floor: z.boolean(),
    building: BuildingOwnQueryOneSchema,
    attributes: RoomAttributeValueOwnQuerySchema,
    quantities: QuantityOwnQuerySchema,
    serials: SerialNumberOwnQuerySchema,
    employeeRooms: EmployeeRoomOwnQuerySchema,
    employeeRoomRequests: EmployeeRoomRequestOwnQuerySchema,
  })
  .partial();

export const RoomQueryOneSchema = z
  .object({
    where: RoomWhereSchema,
    select: RoomProjectionSchema,
    omit: RoomProjectionSchema,
  })
  .partial();

export const RoomQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: RoomWhereSchema,
    select: RoomProjectionSchema,
    omit: RoomProjectionSchema,
  })
  .partial();

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

export const ItemProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    categoryId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    minQuantity: z.boolean(),
    category: CategoryOwnQueryOneSchema,
    attributes: ItemAttributeValueOwnQuerySchema,
    quantities: QuantityOwnQuerySchema,
    serials: SerialNumberOwnQuerySchema,
  })
  .partial();

export const ItemQueryOneSchema = z
  .object({
    where: ItemWhereSchema,
    select: ItemProjectionSchema,
    omit: ItemProjectionSchema,
  })
  .partial();

export const ItemQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ItemWhereSchema,
    select: ItemProjectionSchema,
    omit: ItemProjectionSchema,
  })
  .partial();

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

export const QuantityProjectionSchema = z
  .object({
    id: z.boolean(),
    roomId: z.boolean(),
    itemId: z.boolean(),
    quantity: z.boolean(),
    minQuantity: z.boolean(),
    item: ItemOwnQueryOneSchema,
    room: RoomOwnQueryOneSchema,
    quantityMoveSources: QuantityMoveRequestOwnQuerySchema,
    quantityMoveTargets: QuantityMoveRequestOwnQuerySchema,
  })
  .partial();

export const QuantityQueryOneSchema = z
  .object({
    where: QuantityWhereSchema,
    select: QuantityProjectionSchema,
    omit: QuantityProjectionSchema,
  })
  .partial();

export const QuantityQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: QuantityWhereSchema,
    select: QuantityProjectionSchema,
    omit: QuantityProjectionSchema,
  })
  .partial();

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

export const SerialNumberProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    serialNumber: z.boolean(),
    itemId: z.boolean(),
    roomId: z.boolean(),
    item: ItemOwnQueryOneSchema,
    room: RoomOwnQueryOneSchema,
    serialMoveSources: SerialMoveRequestOwnQuerySchema,
    serialMoveTargets: SerialMoveRequestOwnQuerySchema,
    employeeItemRequests: EmployeeItemRequestOwnQuerySchema,
    employeeItems: EmployeeItemOwnQuerySchema,
  })
  .partial();

export const SerialNumberQueryOneSchema = z
  .object({
    where: SerialNumberWhereSchema,
    select: SerialNumberProjectionSchema,
    omit: SerialNumberProjectionSchema,
  })
  .partial();

export const SerialNumberQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SerialNumberWhereSchema,
    select: SerialNumberProjectionSchema,
    omit: SerialNumberProjectionSchema,
  })
  .partial();

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
    source: QuantityOwnQueryOneSchema,
    target: QuantityOwnQueryOneSchema,
    requestedBy: EmployeeOwnQueryOneSchema,
    resolvedBy: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const QuantityMoveRequestQueryOneSchema = z
  .object({
    where: QuantityMoveRequestWhereSchema,
    select: QuantityMoveRequestProjectionSchema,
    omit: QuantityMoveRequestProjectionSchema,
  })
  .partial();

export const QuantityMoveRequestQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: QuantityMoveRequestWhereSchema,
    select: QuantityMoveRequestProjectionSchema,
    omit: QuantityMoveRequestProjectionSchema,
  })
  .partial();

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
    source: SerialNumberOwnQueryOneSchema,
    target: SerialNumberOwnQueryOneSchema,
    requestedBy: EmployeeOwnQueryOneSchema,
    resolvedBy: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const SerialMoveRequestQueryOneSchema = z
  .object({
    where: SerialMoveRequestWhereSchema,
    select: SerialMoveRequestProjectionSchema,
    omit: SerialMoveRequestProjectionSchema,
  })
  .partial();

export const SerialMoveRequestQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SerialMoveRequestWhereSchema,
    select: SerialMoveRequestProjectionSchema,
    omit: SerialMoveRequestProjectionSchema,
  })
  .partial();

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

export const EmployeeProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    rooms: EmployeeRoomOwnQuerySchema,
    items: EmployeeItemOwnQuerySchema,
    itemRequesters: EmployeeItemRequestOwnQuerySchema,
    itemResolvers: EmployeeItemRequestOwnQuerySchema,
    roomRequesters: EmployeeRoomRequestOwnQuerySchema,
    roomResolvers: EmployeeRoomRequestOwnQuerySchema,
    serialMoveRequesters: SerialMoveRequestOwnQuerySchema,
    serialMoveResolvers: SerialMoveRequestOwnQuerySchema,
    quantityMoveRequesters: QuantityMoveRequestOwnQuerySchema,
    quantityMoveResolvers: QuantityMoveRequestOwnQuerySchema,
  })
  .partial();

export const EmployeeQueryOneSchema = z
  .object({
    where: EmployeeWhereSchema,
    select: EmployeeProjectionSchema,
    omit: EmployeeProjectionSchema,
  })
  .partial();

export const EmployeeQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeWhereSchema,
    select: EmployeeProjectionSchema,
    omit: EmployeeProjectionSchema,
  })
  .partial();

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

export const EmployeeRoomProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    roomId: z.boolean(),
    givenAt: z.boolean(),
    takenAt: z.boolean(),
    room: RoomOwnQueryOneSchema,
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const EmployeeRoomQueryOneSchema = z
  .object({
    where: EmployeeRoomWhereSchema,
    select: EmployeeRoomProjectionSchema,
    omit: EmployeeRoomProjectionSchema,
  })
  .partial();

export const EmployeeRoomQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeRoomWhereSchema,
    select: EmployeeRoomProjectionSchema,
    omit: EmployeeRoomProjectionSchema,
  })
  .partial();

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

export const EmployeeItemProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    serialNumberId: z.boolean(),
    givenAt: z.boolean(),
    takenAt: z.boolean(),
    serialNumber: SerialNumberOwnQueryOneSchema,
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const EmployeeItemQueryOneSchema = z
  .object({
    where: EmployeeItemWhereSchema,
    select: EmployeeItemProjectionSchema,
    omit: EmployeeItemProjectionSchema,
  })
  .partial();

export const EmployeeItemQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeItemWhereSchema,
    select: EmployeeItemProjectionSchema,
    omit: EmployeeItemProjectionSchema,
  })
  .partial();

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
    room: RoomOwnQueryOneSchema,
    requestedBy: EmployeeOwnQueryOneSchema,
    resolvedBy: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const EmployeeRoomRequestQueryOneSchema = z
  .object({
    where: EmployeeRoomRequestWhereSchema,
    select: EmployeeRoomRequestProjectionSchema,
    omit: EmployeeRoomRequestProjectionSchema,
  })
  .partial();

export const EmployeeRoomRequestQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeRoomRequestWhereSchema,
    select: EmployeeRoomRequestProjectionSchema,
    omit: EmployeeRoomRequestProjectionSchema,
  })
  .partial();

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
    serialNumber: SerialNumberOwnQueryOneSchema,
    requestedBy: EmployeeOwnQueryOneSchema,
    resolvedBy: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const EmployeeItemRequestQueryOneSchema = z
  .object({
    where: EmployeeItemRequestWhereSchema,
    select: EmployeeItemRequestProjectionSchema,
    omit: EmployeeItemRequestProjectionSchema,
  })
  .partial();

export const EmployeeItemRequestQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeItemRequestWhereSchema,
    select: EmployeeItemRequestProjectionSchema,
    omit: EmployeeItemRequestProjectionSchema,
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

export type RoomAttributeQueryOne = z.infer<typeof RoomAttributeQueryOneSchema>;

export type RoomAttributeQuery = z.infer<typeof RoomAttributeQuerySchema>;

export type RoomAttributeProjection = z.infer<
  typeof RoomAttributeProjectionSchema
>;

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

export type RoomAttributeValueQueryOne = z.infer<
  typeof RoomAttributeValueQueryOneSchema
>;

export type RoomAttributeValueQuery = z.infer<
  typeof RoomAttributeValueQuerySchema
>;

export type RoomAttributeValueProjection = z.infer<
  typeof RoomAttributeValueProjectionSchema
>;

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

export type ItemAttributeQueryOne = z.infer<typeof ItemAttributeQueryOneSchema>;

export type ItemAttributeQuery = z.infer<typeof ItemAttributeQuerySchema>;

export type ItemAttributeProjection = z.infer<
  typeof ItemAttributeProjectionSchema
>;

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

export type ItemAttributeValueQueryOne = z.infer<
  typeof ItemAttributeValueQueryOneSchema
>;

export type ItemAttributeValueQuery = z.infer<
  typeof ItemAttributeValueQuerySchema
>;

export type ItemAttributeValueProjection = z.infer<
  typeof ItemAttributeValueProjectionSchema
>;

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnProjection = z.infer<typeof CategoryOwnProjectionSchema>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export type BuildingCreate = z.infer<typeof BuildingCreateSchema>;

export type BuildingUpdate = z.infer<typeof BuildingUpdateSchema>;

export type BuildingOrderBy = z.infer<typeof BuildingOrderBySchema>;

export type BuildingOwnProjection = z.infer<typeof BuildingOwnProjectionSchema>;

export type BuildingOwnWhere = z.infer<typeof BuildingOwnWhereSchema>;

export type BuildingOwnQuery = z.infer<typeof BuildingOwnQuerySchema>;

export type BuildingOwnQueryOne = z.infer<typeof BuildingOwnQueryOneSchema>;

export type BuildingWhere = z.infer<typeof BuildingWhereSchema>;

export type BuildingQueryOne = z.infer<typeof BuildingQueryOneSchema>;

export type BuildingQuery = z.infer<typeof BuildingQuerySchema>;

export type BuildingProjection = z.infer<typeof BuildingProjectionSchema>;

export type RoomCreate = z.infer<typeof RoomCreateSchema>;

export type RoomUpdate = z.infer<typeof RoomUpdateSchema>;

export type RoomOrderBy = z.infer<typeof RoomOrderBySchema>;

export type RoomOwnProjection = z.infer<typeof RoomOwnProjectionSchema>;

export type RoomOwnWhere = z.infer<typeof RoomOwnWhereSchema>;

export type RoomOwnQuery = z.infer<typeof RoomOwnQuerySchema>;

export type RoomOwnQueryOne = z.infer<typeof RoomOwnQueryOneSchema>;

export type RoomWhere = z.infer<typeof RoomWhereSchema>;

export type RoomQueryOne = z.infer<typeof RoomQueryOneSchema>;

export type RoomQuery = z.infer<typeof RoomQuerySchema>;

export type RoomProjection = z.infer<typeof RoomProjectionSchema>;

export type ItemCreate = z.infer<typeof ItemCreateSchema>;

export type ItemUpdate = z.infer<typeof ItemUpdateSchema>;

export type ItemOrderBy = z.infer<typeof ItemOrderBySchema>;

export type ItemOwnProjection = z.infer<typeof ItemOwnProjectionSchema>;

export type ItemOwnWhere = z.infer<typeof ItemOwnWhereSchema>;

export type ItemOwnQuery = z.infer<typeof ItemOwnQuerySchema>;

export type ItemOwnQueryOne = z.infer<typeof ItemOwnQueryOneSchema>;

export type ItemWhere = z.infer<typeof ItemWhereSchema>;

export type ItemQueryOne = z.infer<typeof ItemQueryOneSchema>;

export type ItemQuery = z.infer<typeof ItemQuerySchema>;

export type ItemProjection = z.infer<typeof ItemProjectionSchema>;

export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;

export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;

export type QuantityOrderBy = z.infer<typeof QuantityOrderBySchema>;

export type QuantityOwnProjection = z.infer<typeof QuantityOwnProjectionSchema>;

export type QuantityOwnWhere = z.infer<typeof QuantityOwnWhereSchema>;

export type QuantityOwnQuery = z.infer<typeof QuantityOwnQuerySchema>;

export type QuantityOwnQueryOne = z.infer<typeof QuantityOwnQueryOneSchema>;

export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;

export type QuantityQueryOne = z.infer<typeof QuantityQueryOneSchema>;

export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;

export type QuantityProjection = z.infer<typeof QuantityProjectionSchema>;

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

export type SerialNumberQueryOne = z.infer<typeof SerialNumberQueryOneSchema>;

export type SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>;

export type SerialNumberProjection = z.infer<
  typeof SerialNumberProjectionSchema
>;

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

export type QuantityMoveRequestQueryOne = z.infer<
  typeof QuantityMoveRequestQueryOneSchema
>;

export type QuantityMoveRequestQuery = z.infer<
  typeof QuantityMoveRequestQuerySchema
>;

export type QuantityMoveRequestProjection = z.infer<
  typeof QuantityMoveRequestProjectionSchema
>;

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

export type SerialMoveRequestQueryOne = z.infer<
  typeof SerialMoveRequestQueryOneSchema
>;

export type SerialMoveRequestQuery = z.infer<
  typeof SerialMoveRequestQuerySchema
>;

export type SerialMoveRequestProjection = z.infer<
  typeof SerialMoveRequestProjectionSchema
>;

export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type EmployeeOrderBy = z.infer<typeof EmployeeOrderBySchema>;

export type EmployeeOwnProjection = z.infer<typeof EmployeeOwnProjectionSchema>;

export type EmployeeOwnWhere = z.infer<typeof EmployeeOwnWhereSchema>;

export type EmployeeOwnQuery = z.infer<typeof EmployeeOwnQuerySchema>;

export type EmployeeOwnQueryOne = z.infer<typeof EmployeeOwnQueryOneSchema>;

export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;

export type EmployeeQueryOne = z.infer<typeof EmployeeQueryOneSchema>;

export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

export type EmployeeProjection = z.infer<typeof EmployeeProjectionSchema>;

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

export type EmployeeRoomQueryOne = z.infer<typeof EmployeeRoomQueryOneSchema>;

export type EmployeeRoomQuery = z.infer<typeof EmployeeRoomQuerySchema>;

export type EmployeeRoomProjection = z.infer<
  typeof EmployeeRoomProjectionSchema
>;

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

export type EmployeeItemQueryOne = z.infer<typeof EmployeeItemQueryOneSchema>;

export type EmployeeItemQuery = z.infer<typeof EmployeeItemQuerySchema>;

export type EmployeeItemProjection = z.infer<
  typeof EmployeeItemProjectionSchema
>;

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

export type EmployeeRoomRequestQueryOne = z.infer<
  typeof EmployeeRoomRequestQueryOneSchema
>;

export type EmployeeRoomRequestQuery = z.infer<
  typeof EmployeeRoomRequestQuerySchema
>;

export type EmployeeRoomRequestProjection = z.infer<
  typeof EmployeeRoomRequestProjectionSchema
>;

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

export type EmployeeItemRequestQueryOne = z.infer<
  typeof EmployeeItemRequestQueryOneSchema
>;

export type EmployeeItemRequestQuery = z.infer<
  typeof EmployeeItemRequestQuerySchema
>;

export type EmployeeItemRequestProjection = z.infer<
  typeof EmployeeItemRequestProjectionSchema
>;
