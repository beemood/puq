import z from "zod";

export const _int = z.coerce.number().int();

export const _str = z.string();

export const _num = z.coerce.number();

export const _bool = z.coerce.boolean();

export const _date = z.iso.datetime();

export const _shortText = z.string().max(30);

export const _longText = z.string().max(2000);

export const _id = z.coerce.number().int().min(1);

export const _currency = z.coerce.number().min(0);

export const _positiveInt = z.coerce.number().int().min(0);

export const _name = z.string().min(3).max(30);

export const _slug = z
  .string()
  .min(3)
  .max(30)
  .regex(/[0-9a-z-]{0,30}/, {
    error: "Slug must contain only lowercase letters, numbers, and dash.",
  });

export const _description = z.string().max(1000);

export const _email = z.string().max(1000);

export const _phone = z
  .string()
  .regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {
    error: "Invalid phone format",
  });

export const _url = z.url();

export const _password = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: "must contain at least one upper-case letter" })
  .regex(/[a-z]{1,}/, { error: "must contain at least one lower-case letter" })
  .regex(/[0-9]{1,}/, { error: "must contain at least one number" })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: "must contain at least one special character",
  });

export const _select = z.coerce.boolean().optional();

export const _direction = z.enum(["asc", "desc"]).optional();

export const _orderByCount = z.object({ _count: _direction }).optional();

export const _take = _int.min(1).default(20).optional();

export const _skip = _int.min(0).optional();

export const _json = z.preprocess((value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}, z.any());

export const _jsonPreprocessor = (value: unknown) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
};

export const _0_boolFilter = z.object({
  equals: _bool.optional(),
});

export const _1_boolFilter = z.object({
  equals: _bool.optional(),
  not: _bool.or(_0_boolFilter).optional(),
});

export const _boolFilter = _bool.or(_1_boolFilter);

export const _0_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
});

export const _1_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
  not: _0_intFilter.optional(),
});

export const _intFilter = _int.or(_1_intFilter);

export const _0_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
});

export const _1_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
  not: _0_numFilter.optional(),
});

export const _numFilter = _num.or(_1_numFilter);

export const _0_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
});

export const _1_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
  not: _0_dateFilter.optional(),
});

export const _dateFilter = _date.or(_1_dateFilter);

export const _strMode = z.enum(["default", "insensitive"]);

export const _0_strFilter = z.object({
  contains: _str.optional(),
  endsWith: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  startsWith: _str.optional(),
  in: _str.array().optional(),
  notIn: _str.array().optional(),
  mode: _strMode.optional(),
});

export const _1_strFilter = z.object({
  contains: _str.optional(),
  endsWith: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  startsWith: _str.optional(),
  in: _str.array().optional(),
  notIn: _str.array().optional(),
  mode: _strMode.optional(),
  not: _str.or(_0_strFilter).optional(),
});

export const _strFilter = _str.or(_1_strFilter);

export const _jsonFilter = z.object({
  path: _str.array().optional(),
  array_contains: _str.optional(),
  array_ends_with: _str.optional(),
  array_starts_with: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  mode: _strMode,
  string_contains: _str.optional(),
  string_ends_with: _str.optional(),
  string_starts_with: _str.optional(),
  not: _str.optional(),
});

export const _strArrayFilter = z.object({
  equals: _str.array().optional(),
  has: _str.optional(),
  hasEvery: _str.array().optional(),
  hasSome: _str.array().optional(),
  isEmpty: _bool.optional(),
});

export const _numArrayFilter = z.object({
  equals: _num.array().optional(),
  has: _num.optional(),
  hasEvery: _num.array().optional(),
  hasSome: _num.array().optional(),
  isEmpty: _bool.optional(),
});

export const _intArrayFilter = z.object({
  equals: _int.array().optional(),
  has: _int.optional(),
  hasEvery: _int.array().optional(),
  hasSome: _int.array().optional(),
  isEmpty: _bool.optional(),
});

export const _dateArrayFilter = z.object({
  equals: _date.array().optional(),
  has: _date.optional(),
  hasEvery: _date.array().optional(),
  hasSome: _date.array().optional(),
  isEmpty: _bool.optional(),
});

export const RequestStatusSchema = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
  "CANCELED",
]);

export const __RequestStatusFilterSchema = z.object({
  equals: RequestStatusSchema.optional(),
  in: RequestStatusSchema.array().optional(),
  notIn: RequestStatusSchema.array().optional(),
});
export const RequestStatusFilterSchema = z.object({
  equals: RequestStatusSchema.optional(),
  in: RequestStatusSchema.array().optional(),
  notIn: RequestStatusSchema.array().optional(),
  not: RequestStatusSchema.or(__RequestStatusFilterSchema).optional(),
});

export const RequestStatusArrayFilterSchema = z.object({
  equals: RequestStatusSchema.array().optional(),
  has: RequestStatusSchema.optional(),
  hasEvery: RequestStatusSchema.array().optional(),
  hasSome: RequestStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const RoomAttributeDistinctSchema = z
  .enum(["id", "name"])
  .array()
  .optional();

export const RoomAttributeValueDistinctSchema = z
  .enum(["id", "roomId", "attributeId", "value"])
  .array()
  .optional();

export const ItemAttributeDistinctSchema = z
  .enum(["id", "name"])
  .array()
  .optional();

export const ItemAttributeValueDistinctSchema = z
  .enum(["id", "itemId", "attributeId", "value"])
  .array()
  .optional();

export const CategoryDistinctSchema = z
  .enum(["id", "parentId", "name"])
  .array()
  .optional();

export const BuildingDistinctSchema = z
  .enum(["id", "name", "code"])
  .array()
  .optional();

export const RoomDistinctSchema = z
  .enum(["id", "uuid", "buildingId", "name", "code", "floor"])
  .array()
  .optional();

export const ItemDistinctSchema = z
  .enum(["id", "uuid", "categoryId", "name", "description", "minQuantity"])
  .array()
  .optional();

export const QuantityDistinctSchema = z
  .enum(["id", "roomId", "itemId", "quantity", "minQuantity"])
  .array()
  .optional();

export const SerialNumberDistinctSchema = z
  .enum(["id", "uuid", "serialNumber", "itemId", "roomId"])
  .array()
  .optional();

export const QuantityMoveRequestDistinctSchema = z
  .enum([
    "id",
    "sourceId",
    "targetId",
    "requestedById",
    "resolvedById",
    "quantity",
    "reason",
    "status",
    "requestedAt",
    "resolvedAt",
  ])
  .array()
  .optional();

export const SerialMoveRequestDistinctSchema = z
  .enum([
    "id",
    "sourceId",
    "targetId",
    "requestedById",
    "resolvedById",
    "reason",
    "status",
    "requestedAt",
    "resolvedAt",
  ])
  .array()
  .optional();

export const EmployeeDistinctSchema = z.enum(["id", "uuid"]).array().optional();

export const EmployeeRoomDistinctSchema = z
  .enum(["id", "employeeId", "roomId", "givenAt", "takenAt"])
  .array()
  .optional();

export const EmployeeItemDistinctSchema = z
  .enum(["id", "employeeId", "serialNumberId", "givenAt", "takenAt"])
  .array()
  .optional();

export const EmployeeRoomRequestDistinctSchema = z
  .enum([
    "id",
    "roomId",
    "requestedById",
    "resolvedById",
    "requestedAt",
    "resolvedAt",
    "status",
    "note",
  ])
  .array()
  .optional();

export const EmployeeItemRequestDistinctSchema = z
  .enum([
    "id",
    "requestedById",
    "resolvedById",
    "requestedAt",
    "resolvedAt",
    "serialNumberId",
    "status",
    "note",
  ])
  .array()
  .optional();

export const RoomAttributeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const RoomAttributeValueOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  roomId: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  value: _strFilter.optional(),
});

export const ItemAttributeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const ItemAttributeValueOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  itemId: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  value: _strFilter.optional(),
});

export const CategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const BuildingOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
});

export const RoomOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  buildingId: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  floor: _intFilter.optional(),
});

export const ItemOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  categoryId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  minQuantity: _intFilter.optional(),
});

export const QuantityOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  roomId: _intFilter.optional(),
  itemId: _intFilter.optional(),
  quantity: _intFilter.optional(),
  minQuantity: _intFilter.optional(),
});

export const SerialNumberOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  serialNumber: _strFilter.optional(),
  itemId: _intFilter.optional(),
  roomId: _intFilter.optional(),
});

export const QuantityMoveRequestOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  sourceId: _intFilter.optional(),
  targetId: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  quantity: _intFilter.optional(),
  reason: _strFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
});

export const SerialMoveRequestOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  sourceId: _intFilter.optional(),
  targetId: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  reason: _strFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
});

export const EmployeeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
});

export const EmployeeRoomOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  roomId: _intFilter.optional(),
  givenAt: _dateFilter.optional(),
  takenAt: _dateFilter.optional(),
});

export const EmployeeItemOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  serialNumberId: _intFilter.optional(),
  givenAt: _dateFilter.optional(),
  takenAt: _dateFilter.optional(),
});

export const EmployeeRoomRequestOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  roomId: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  note: _strFilter.optional(),
});

export const EmployeeItemRequestOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  serialNumberId: _intFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  note: _strFilter.optional(),
});

export const RoomAttributeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOwnWhereSchema
);

export const RoomAttributeValueOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOwnWhereSchema
);

export const ItemAttributeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOwnWhereSchema
);

export const ItemAttributeValueOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOwnWhereSchema
);

export const CategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnWhereSchema
);

export const BuildingOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOwnWhereSchema
);

export const RoomOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOwnWhereSchema
);

export const ItemOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOwnWhereSchema
);

export const QuantityOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnWhereSchema
);

export const SerialNumberOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnWhereSchema
);

export const QuantityMoveRequestOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOwnWhereSchema
);

export const SerialMoveRequestOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOwnWhereSchema
);

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnWhereSchema
);

export const EmployeeRoomOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOwnWhereSchema
);

export const EmployeeItemOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOwnWhereSchema
);

export const EmployeeRoomRequestOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOwnWhereSchema
);

export const EmployeeItemRequestOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOwnWhereSchema
);

export const RoomAttributeWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  values: z
    .object({
      every: RoomAttributeValueOwnWhereSchema.optional(),
      some: RoomAttributeValueOwnWhereSchema.optional(),
      none: RoomAttributeValueOwnWhereSchema.optional(),
    })
    .optional(),
});

export const RoomAttributeValueWhereSchema = z.object({
  id: _intFilter.optional(),
  roomId: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  value: _strFilter.optional(),
  attribute: RoomAttributeOwnWhereSchema.optional(),
  room: RoomOwnWhereSchema.optional(),
});

export const ItemAttributeWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  values: z
    .object({
      every: ItemAttributeValueOwnWhereSchema.optional(),
      some: ItemAttributeValueOwnWhereSchema.optional(),
      none: ItemAttributeValueOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ItemAttributeValueWhereSchema = z.object({
  id: _intFilter.optional(),
  itemId: _intFilter.optional(),
  attributeId: _intFilter.optional(),
  value: _strFilter.optional(),
  attribute: ItemAttributeOwnWhereSchema.optional(),
  item: ItemOwnWhereSchema.optional(),
});

export const CategoryWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  parent: CategoryOwnWhereSchema.optional(),
  children: z
    .object({
      every: CategoryOwnWhereSchema.optional(),
      some: CategoryOwnWhereSchema.optional(),
      none: CategoryOwnWhereSchema.optional(),
    })
    .optional(),
  items: z
    .object({
      every: ItemOwnWhereSchema.optional(),
      some: ItemOwnWhereSchema.optional(),
      none: ItemOwnWhereSchema.optional(),
    })
    .optional(),
});

export const BuildingWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  rooms: z
    .object({
      every: RoomOwnWhereSchema.optional(),
      some: RoomOwnWhereSchema.optional(),
      none: RoomOwnWhereSchema.optional(),
    })
    .optional(),
});

export const RoomWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  buildingId: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  floor: _intFilter.optional(),
  building: BuildingOwnWhereSchema.optional(),
  attributes: z
    .object({
      every: RoomAttributeValueOwnWhereSchema.optional(),
      some: RoomAttributeValueOwnWhereSchema.optional(),
      none: RoomAttributeValueOwnWhereSchema.optional(),
    })
    .optional(),
  quantities: z
    .object({
      every: QuantityOwnWhereSchema.optional(),
      some: QuantityOwnWhereSchema.optional(),
      none: QuantityOwnWhereSchema.optional(),
    })
    .optional(),
  serials: z
    .object({
      every: SerialNumberOwnWhereSchema.optional(),
      some: SerialNumberOwnWhereSchema.optional(),
      none: SerialNumberOwnWhereSchema.optional(),
    })
    .optional(),
  employeeRooms: z
    .object({
      every: EmployeeRoomOwnWhereSchema.optional(),
      some: EmployeeRoomOwnWhereSchema.optional(),
      none: EmployeeRoomOwnWhereSchema.optional(),
    })
    .optional(),
  employeeRoomRequests: z
    .object({
      every: EmployeeRoomRequestOwnWhereSchema.optional(),
      some: EmployeeRoomRequestOwnWhereSchema.optional(),
      none: EmployeeRoomRequestOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ItemWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  categoryId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  minQuantity: _intFilter.optional(),
  category: CategoryOwnWhereSchema.optional(),
  attributes: z
    .object({
      every: ItemAttributeValueOwnWhereSchema.optional(),
      some: ItemAttributeValueOwnWhereSchema.optional(),
      none: ItemAttributeValueOwnWhereSchema.optional(),
    })
    .optional(),
  quantities: z
    .object({
      every: QuantityOwnWhereSchema.optional(),
      some: QuantityOwnWhereSchema.optional(),
      none: QuantityOwnWhereSchema.optional(),
    })
    .optional(),
  serials: z
    .object({
      every: SerialNumberOwnWhereSchema.optional(),
      some: SerialNumberOwnWhereSchema.optional(),
      none: SerialNumberOwnWhereSchema.optional(),
    })
    .optional(),
});

export const QuantityWhereSchema = z.object({
  id: _intFilter.optional(),
  roomId: _intFilter.optional(),
  itemId: _intFilter.optional(),
  quantity: _intFilter.optional(),
  minQuantity: _intFilter.optional(),
  item: ItemOwnWhereSchema.optional(),
  room: RoomOwnWhereSchema.optional(),
  quantityMoveSources: z
    .object({
      every: QuantityMoveRequestOwnWhereSchema.optional(),
      some: QuantityMoveRequestOwnWhereSchema.optional(),
      none: QuantityMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
  quantityMoveTargets: z
    .object({
      every: QuantityMoveRequestOwnWhereSchema.optional(),
      some: QuantityMoveRequestOwnWhereSchema.optional(),
      none: QuantityMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
});

export const SerialNumberWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  serialNumber: _strFilter.optional(),
  itemId: _intFilter.optional(),
  roomId: _intFilter.optional(),
  item: ItemOwnWhereSchema.optional(),
  room: RoomOwnWhereSchema.optional(),
  serialMoveSources: z
    .object({
      every: SerialMoveRequestOwnWhereSchema.optional(),
      some: SerialMoveRequestOwnWhereSchema.optional(),
      none: SerialMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
  serialMoveTargets: z
    .object({
      every: SerialMoveRequestOwnWhereSchema.optional(),
      some: SerialMoveRequestOwnWhereSchema.optional(),
      none: SerialMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
  employeeItemRequests: z
    .object({
      every: EmployeeItemRequestOwnWhereSchema.optional(),
      some: EmployeeItemRequestOwnWhereSchema.optional(),
      none: EmployeeItemRequestOwnWhereSchema.optional(),
    })
    .optional(),
  employeeItems: z
    .object({
      every: EmployeeItemOwnWhereSchema.optional(),
      some: EmployeeItemOwnWhereSchema.optional(),
      none: EmployeeItemOwnWhereSchema.optional(),
    })
    .optional(),
});

export const QuantityMoveRequestWhereSchema = z.object({
  id: _intFilter.optional(),
  sourceId: _intFilter.optional(),
  targetId: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  quantity: _intFilter.optional(),
  reason: _strFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  source: QuantityOwnWhereSchema.optional(),
  target: QuantityOwnWhereSchema.optional(),
  requestedBy: EmployeeOwnWhereSchema.optional(),
  resolvedBy: EmployeeOwnWhereSchema.optional(),
});

export const SerialMoveRequestWhereSchema = z.object({
  id: _intFilter.optional(),
  sourceId: _intFilter.optional(),
  targetId: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  reason: _strFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  source: SerialNumberOwnWhereSchema.optional(),
  target: SerialNumberOwnWhereSchema.optional(),
  requestedBy: EmployeeOwnWhereSchema.optional(),
  resolvedBy: EmployeeOwnWhereSchema.optional(),
});

export const EmployeeWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  rooms: z
    .object({
      every: EmployeeRoomOwnWhereSchema.optional(),
      some: EmployeeRoomOwnWhereSchema.optional(),
      none: EmployeeRoomOwnWhereSchema.optional(),
    })
    .optional(),
  items: z
    .object({
      every: EmployeeItemOwnWhereSchema.optional(),
      some: EmployeeItemOwnWhereSchema.optional(),
      none: EmployeeItemOwnWhereSchema.optional(),
    })
    .optional(),
  itemRequesters: z
    .object({
      every: EmployeeItemRequestOwnWhereSchema.optional(),
      some: EmployeeItemRequestOwnWhereSchema.optional(),
      none: EmployeeItemRequestOwnWhereSchema.optional(),
    })
    .optional(),
  itemResolvers: z
    .object({
      every: EmployeeItemRequestOwnWhereSchema.optional(),
      some: EmployeeItemRequestOwnWhereSchema.optional(),
      none: EmployeeItemRequestOwnWhereSchema.optional(),
    })
    .optional(),
  roomRequesters: z
    .object({
      every: EmployeeRoomRequestOwnWhereSchema.optional(),
      some: EmployeeRoomRequestOwnWhereSchema.optional(),
      none: EmployeeRoomRequestOwnWhereSchema.optional(),
    })
    .optional(),
  roomResolvers: z
    .object({
      every: EmployeeRoomRequestOwnWhereSchema.optional(),
      some: EmployeeRoomRequestOwnWhereSchema.optional(),
      none: EmployeeRoomRequestOwnWhereSchema.optional(),
    })
    .optional(),
  serialMoveRequesters: z
    .object({
      every: SerialMoveRequestOwnWhereSchema.optional(),
      some: SerialMoveRequestOwnWhereSchema.optional(),
      none: SerialMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
  serialMoveResolvers: z
    .object({
      every: SerialMoveRequestOwnWhereSchema.optional(),
      some: SerialMoveRequestOwnWhereSchema.optional(),
      none: SerialMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
  quantityMoveRequesters: z
    .object({
      every: QuantityMoveRequestOwnWhereSchema.optional(),
      some: QuantityMoveRequestOwnWhereSchema.optional(),
      none: QuantityMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
  quantityMoveResolvers: z
    .object({
      every: QuantityMoveRequestOwnWhereSchema.optional(),
      some: QuantityMoveRequestOwnWhereSchema.optional(),
      none: QuantityMoveRequestOwnWhereSchema.optional(),
    })
    .optional(),
});

export const EmployeeRoomWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  roomId: _intFilter.optional(),
  givenAt: _dateFilter.optional(),
  takenAt: _dateFilter.optional(),
  room: RoomOwnWhereSchema.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const EmployeeItemWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  serialNumberId: _intFilter.optional(),
  givenAt: _dateFilter.optional(),
  takenAt: _dateFilter.optional(),
  serialNumber: SerialNumberOwnWhereSchema.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const EmployeeRoomRequestWhereSchema = z.object({
  id: _intFilter.optional(),
  roomId: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  note: _strFilter.optional(),
  room: RoomOwnWhereSchema.optional(),
  requestedBy: EmployeeOwnWhereSchema.optional(),
  resolvedBy: EmployeeOwnWhereSchema.optional(),
});

export const EmployeeItemRequestWhereSchema = z.object({
  id: _intFilter.optional(),
  requestedById: _intFilter.optional(),
  resolvedById: _intFilter.optional(),
  requestedAt: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  serialNumberId: _intFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  note: _strFilter.optional(),
  serialNumber: SerialNumberOwnWhereSchema.optional(),
  requestedBy: EmployeeOwnWhereSchema.optional(),
  resolvedBy: EmployeeOwnWhereSchema.optional(),
});

export const RoomAttributeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeWhereSchema
);

export const RoomAttributeValueWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueWhereSchema
);

export const ItemAttributeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeWhereSchema
);

export const ItemAttributeValueWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueWhereSchema
);

export const CategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryWhereSchema
);

export const BuildingWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingWhereSchema
);

export const RoomWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomWhereSchema
);

export const ItemWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemWhereSchema
);

export const QuantityWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityWhereSchema
);

export const SerialNumberWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberWhereSchema
);

export const QuantityMoveRequestWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestWhereSchema
);

export const SerialMoveRequestWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestWhereSchema
);

export const EmployeeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeWhereSchema
);

export const EmployeeRoomWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomWhereSchema
);

export const EmployeeItemWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemWhereSchema
);

export const EmployeeRoomRequestWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestWhereSchema
);

export const EmployeeItemRequestWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestWhereSchema
);

export const RoomAttributeOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const RoomAttributeValueOwnOrderBySchema = z.object({
  id: _direction,
  roomId: _direction,
  attributeId: _direction,
  value: _direction,
});

export const ItemAttributeOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const ItemAttributeValueOwnOrderBySchema = z.object({
  id: _direction,
  itemId: _direction,
  attributeId: _direction,
  value: _direction,
});

export const CategoryOwnOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
});

export const BuildingOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
});

export const RoomOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  buildingId: _direction,
  name: _direction,
  code: _direction,
  floor: _direction,
});

export const ItemOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  categoryId: _direction,
  name: _direction,
  description: _direction,
  minQuantity: _direction,
});

export const QuantityOwnOrderBySchema = z.object({
  id: _direction,
  roomId: _direction,
  itemId: _direction,
  quantity: _direction,
  minQuantity: _direction,
});

export const SerialNumberOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  serialNumber: _direction,
  itemId: _direction,
  roomId: _direction,
});

export const QuantityMoveRequestOwnOrderBySchema = z.object({
  id: _direction,
  sourceId: _direction,
  targetId: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  quantity: _direction,
  reason: _direction,
  status: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
});

export const SerialMoveRequestOwnOrderBySchema = z.object({
  id: _direction,
  sourceId: _direction,
  targetId: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  reason: _direction,
  status: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
});

export const EmployeeOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
});

export const EmployeeRoomOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  roomId: _direction,
  givenAt: _direction,
  takenAt: _direction,
});

export const EmployeeItemOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  serialNumberId: _direction,
  givenAt: _direction,
  takenAt: _direction,
});

export const EmployeeRoomRequestOwnOrderBySchema = z.object({
  id: _direction,
  roomId: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
  status: _direction,
  note: _direction,
});

export const EmployeeItemRequestOwnOrderBySchema = z.object({
  id: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
  serialNumberId: _direction,
  status: _direction,
  note: _direction,
});

export const RoomAttributeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOwnOrderBySchema
);

export const RoomAttributeValueOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOwnOrderBySchema
);

export const ItemAttributeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOwnOrderBySchema
);

export const ItemAttributeValueOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOwnOrderBySchema
);

export const CategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnOrderBySchema
);

export const BuildingOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOwnOrderBySchema
);

export const RoomOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOwnOrderBySchema
);

export const ItemOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOwnOrderBySchema
);

export const QuantityOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnOrderBySchema
);

export const SerialNumberOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnOrderBySchema
);

export const QuantityMoveRequestOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOwnOrderBySchema
);

export const SerialMoveRequestOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOwnOrderBySchema
);

export const EmployeeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnOrderBySchema
);

export const EmployeeRoomOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOwnOrderBySchema
);

export const EmployeeItemOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOwnOrderBySchema
);

export const EmployeeRoomRequestOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOwnOrderBySchema
);

export const EmployeeItemRequestOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOwnOrderBySchema
);

export const RoomAttributeOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  values: _orderByCount,
});

export const RoomAttributeValueOrderBySchema = z.object({
  id: _direction,
  roomId: _direction,
  attributeId: _direction,
  value: _direction,
  attribute: RoomAttributeOwnOrderBySchema.optional(),
  room: RoomOwnOrderBySchema.optional(),
});

export const ItemAttributeOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  values: _orderByCount,
});

export const ItemAttributeValueOrderBySchema = z.object({
  id: _direction,
  itemId: _direction,
  attributeId: _direction,
  value: _direction,
  attribute: ItemAttributeOwnOrderBySchema.optional(),
  item: ItemOwnOrderBySchema.optional(),
});

export const CategoryOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  parent: CategoryOwnOrderBySchema.optional(),
  children: _orderByCount,
  items: _orderByCount,
});

export const BuildingOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
  rooms: _orderByCount,
});

export const RoomOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  buildingId: _direction,
  name: _direction,
  code: _direction,
  floor: _direction,
  building: BuildingOwnOrderBySchema.optional(),
  attributes: _orderByCount,
  quantities: _orderByCount,
  serials: _orderByCount,
  employeeRooms: _orderByCount,
  employeeRoomRequests: _orderByCount,
});

export const ItemOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  categoryId: _direction,
  name: _direction,
  description: _direction,
  minQuantity: _direction,
  category: CategoryOwnOrderBySchema.optional(),
  attributes: _orderByCount,
  quantities: _orderByCount,
  serials: _orderByCount,
});

export const QuantityOrderBySchema = z.object({
  id: _direction,
  roomId: _direction,
  itemId: _direction,
  quantity: _direction,
  minQuantity: _direction,
  item: ItemOwnOrderBySchema.optional(),
  room: RoomOwnOrderBySchema.optional(),
  quantityMoveSources: _orderByCount,
  quantityMoveTargets: _orderByCount,
});

export const SerialNumberOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  serialNumber: _direction,
  itemId: _direction,
  roomId: _direction,
  item: ItemOwnOrderBySchema.optional(),
  room: RoomOwnOrderBySchema.optional(),
  serialMoveSources: _orderByCount,
  serialMoveTargets: _orderByCount,
  employeeItemRequests: _orderByCount,
  employeeItems: _orderByCount,
});

export const QuantityMoveRequestOrderBySchema = z.object({
  id: _direction,
  sourceId: _direction,
  targetId: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  quantity: _direction,
  reason: _direction,
  status: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
  source: QuantityOwnOrderBySchema.optional(),
  target: QuantityOwnOrderBySchema.optional(),
  requestedBy: EmployeeOwnOrderBySchema.optional(),
  resolvedBy: EmployeeOwnOrderBySchema.optional(),
});

export const SerialMoveRequestOrderBySchema = z.object({
  id: _direction,
  sourceId: _direction,
  targetId: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  reason: _direction,
  status: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
  source: SerialNumberOwnOrderBySchema.optional(),
  target: SerialNumberOwnOrderBySchema.optional(),
  requestedBy: EmployeeOwnOrderBySchema.optional(),
  resolvedBy: EmployeeOwnOrderBySchema.optional(),
});

export const EmployeeOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  rooms: _orderByCount,
  items: _orderByCount,
  itemRequesters: _orderByCount,
  itemResolvers: _orderByCount,
  roomRequesters: _orderByCount,
  roomResolvers: _orderByCount,
  serialMoveRequesters: _orderByCount,
  serialMoveResolvers: _orderByCount,
  quantityMoveRequesters: _orderByCount,
  quantityMoveResolvers: _orderByCount,
});

export const EmployeeRoomOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  roomId: _direction,
  givenAt: _direction,
  takenAt: _direction,
  room: RoomOwnOrderBySchema.optional(),
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const EmployeeItemOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  serialNumberId: _direction,
  givenAt: _direction,
  takenAt: _direction,
  serialNumber: SerialNumberOwnOrderBySchema.optional(),
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const EmployeeRoomRequestOrderBySchema = z.object({
  id: _direction,
  roomId: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
  status: _direction,
  note: _direction,
  room: RoomOwnOrderBySchema.optional(),
  requestedBy: EmployeeOwnOrderBySchema.optional(),
  resolvedBy: EmployeeOwnOrderBySchema.optional(),
});

export const EmployeeItemRequestOrderBySchema = z.object({
  id: _direction,
  requestedById: _direction,
  resolvedById: _direction,
  requestedAt: _direction,
  resolvedAt: _direction,
  serialNumberId: _direction,
  status: _direction,
  note: _direction,
  serialNumber: SerialNumberOwnOrderBySchema.optional(),
  requestedBy: EmployeeOwnOrderBySchema.optional(),
  resolvedBy: EmployeeOwnOrderBySchema.optional(),
});

export const RoomAttributeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOrderBySchema
);

export const RoomAttributeValueOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOrderBySchema
);

export const ItemAttributeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOrderBySchema
);

export const ItemAttributeValueOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOrderBySchema
);

export const CategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOrderBySchema
);

export const BuildingOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOrderBySchema
);

export const RoomOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOrderBySchema
);

export const ItemOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOrderBySchema
);

export const QuantityOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOrderBySchema
);

export const SerialNumberOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOrderBySchema
);

export const QuantityMoveRequestOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOrderBySchema
);

export const SerialMoveRequestOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOrderBySchema
);

export const EmployeeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOrderBySchema
);

export const EmployeeRoomOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOrderBySchema
);

export const EmployeeItemOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOrderBySchema
);

export const EmployeeRoomRequestOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOrderBySchema
);

export const EmployeeItemRequestOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOrderBySchema
);

export const RoomAttributeOwnSelectSchema = z.object({
  id: _select,
  name: _select,
});

export const RoomAttributeValueOwnSelectSchema = z.object({
  id: _select,
  roomId: _select,
  attributeId: _select,
  value: _select,
});

export const ItemAttributeOwnSelectSchema = z.object({
  id: _select,
  name: _select,
});

export const ItemAttributeValueOwnSelectSchema = z.object({
  id: _select,
  itemId: _select,
  attributeId: _select,
  value: _select,
});

export const CategoryOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
});

export const BuildingOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
});

export const RoomOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  buildingId: _select,
  name: _select,
  code: _select,
  floor: _select,
});

export const ItemOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  categoryId: _select,
  name: _select,
  description: _select,
  minQuantity: _select,
});

export const QuantityOwnSelectSchema = z.object({
  id: _select,
  roomId: _select,
  itemId: _select,
  quantity: _select,
  minQuantity: _select,
});

export const SerialNumberOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  serialNumber: _select,
  itemId: _select,
  roomId: _select,
});

export const QuantityMoveRequestOwnSelectSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  quantity: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
});

export const SerialMoveRequestOwnSelectSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
});

export const EmployeeOwnSelectSchema = z.object({ id: _select, uuid: _select });

export const EmployeeRoomOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  roomId: _select,
  givenAt: _select,
  takenAt: _select,
});

export const EmployeeItemOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  serialNumberId: _select,
  givenAt: _select,
  takenAt: _select,
});

export const EmployeeRoomRequestOwnSelectSchema = z.object({
  id: _select,
  roomId: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  status: _select,
  note: _select,
});

export const EmployeeItemRequestOwnSelectSchema = z.object({
  id: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  serialNumberId: _select,
  status: _select,
  note: _select,
});

export const RoomAttributeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOwnSelectSchema
);

export const RoomAttributeValueOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOwnSelectSchema
);

export const ItemAttributeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOwnSelectSchema
);

export const ItemAttributeValueOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOwnSelectSchema
);

export const CategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnSelectSchema
);

export const BuildingOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOwnSelectSchema
);

export const RoomOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOwnSelectSchema
);

export const ItemOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOwnSelectSchema
);

export const QuantityOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnSelectSchema
);

export const SerialNumberOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnSelectSchema
);

export const QuantityMoveRequestOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOwnSelectSchema
);

export const SerialMoveRequestOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOwnSelectSchema
);

export const EmployeeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnSelectSchema
);

export const EmployeeRoomOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOwnSelectSchema
);

export const EmployeeItemOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOwnSelectSchema
);

export const EmployeeRoomRequestOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOwnSelectSchema
);

export const EmployeeItemRequestOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOwnSelectSchema
);

export const RoomAttributeSelectSchema = z.object({
  id: _select,
  name: _select,
  values: _select,
});

export const RoomAttributeValueSelectSchema = z.object({
  id: _select,
  roomId: _select,
  attributeId: _select,
  value: _select,
  attribute: _select,
  room: _select,
});

export const ItemAttributeSelectSchema = z.object({
  id: _select,
  name: _select,
  values: _select,
});

export const ItemAttributeValueSelectSchema = z.object({
  id: _select,
  itemId: _select,
  attributeId: _select,
  value: _select,
  attribute: _select,
  item: _select,
});

export const CategorySelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  parent: _select,
  children: _select,
  items: _select,
});

export const BuildingSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  rooms: _select,
});

export const RoomSelectSchema = z.object({
  id: _select,
  uuid: _select,
  buildingId: _select,
  name: _select,
  code: _select,
  floor: _select,
  building: _select,
  attributes: _select,
  quantities: _select,
  serials: _select,
  employeeRooms: _select,
  employeeRoomRequests: _select,
});

export const ItemSelectSchema = z.object({
  id: _select,
  uuid: _select,
  categoryId: _select,
  name: _select,
  description: _select,
  minQuantity: _select,
  category: _select,
  attributes: _select,
  quantities: _select,
  serials: _select,
});

export const QuantitySelectSchema = z.object({
  id: _select,
  roomId: _select,
  itemId: _select,
  quantity: _select,
  minQuantity: _select,
  item: _select,
  room: _select,
  quantityMoveSources: _select,
  quantityMoveTargets: _select,
});

export const SerialNumberSelectSchema = z.object({
  id: _select,
  uuid: _select,
  serialNumber: _select,
  itemId: _select,
  roomId: _select,
  item: _select,
  room: _select,
  serialMoveSources: _select,
  serialMoveTargets: _select,
  employeeItemRequests: _select,
  employeeItems: _select,
});

export const QuantityMoveRequestSelectSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  quantity: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
  source: _select,
  target: _select,
  requestedBy: _select,
  resolvedBy: _select,
});

export const SerialMoveRequestSelectSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
  source: _select,
  target: _select,
  requestedBy: _select,
  resolvedBy: _select,
});

export const EmployeeSelectSchema = z.object({
  id: _select,
  uuid: _select,
  rooms: _select,
  items: _select,
  itemRequesters: _select,
  itemResolvers: _select,
  roomRequesters: _select,
  roomResolvers: _select,
  serialMoveRequesters: _select,
  serialMoveResolvers: _select,
  quantityMoveRequesters: _select,
  quantityMoveResolvers: _select,
});

export const EmployeeRoomSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  roomId: _select,
  givenAt: _select,
  takenAt: _select,
  room: _select,
  employee: _select,
});

export const EmployeeItemSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  serialNumberId: _select,
  givenAt: _select,
  takenAt: _select,
  serialNumber: _select,
  employee: _select,
});

export const EmployeeRoomRequestSelectSchema = z.object({
  id: _select,
  roomId: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  status: _select,
  note: _select,
  room: _select,
  requestedBy: _select,
  resolvedBy: _select,
});

export const EmployeeItemRequestSelectSchema = z.object({
  id: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  serialNumberId: _select,
  status: _select,
  note: _select,
  serialNumber: _select,
  requestedBy: _select,
  resolvedBy: _select,
});

export const RoomAttributeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeSelectSchema
);

export const RoomAttributeValueSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueSelectSchema
);

export const ItemAttributeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeSelectSchema
);

export const ItemAttributeValueSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueSelectSchema
);

export const CategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategorySelectSchema
);

export const BuildingSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingSelectSchema
);

export const RoomSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomSelectSchema
);

export const ItemSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemSelectSchema
);

export const QuantitySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantitySelectSchema
);

export const SerialNumberSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberSelectSchema
);

export const QuantityMoveRequestSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestSelectSchema
);

export const SerialMoveRequestSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestSelectSchema
);

export const EmployeeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeSelectSchema
);

export const EmployeeRoomSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomSelectSchema
);

export const EmployeeItemSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemSelectSchema
);

export const EmployeeRoomRequestSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestSelectSchema
);

export const EmployeeItemRequestSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestSelectSchema
);

export const RoomAttributeOmitSchema = z.object({ id: _select, name: _select });

export const RoomAttributeValueOmitSchema = z.object({
  id: _select,
  roomId: _select,
  attributeId: _select,
  value: _select,
});

export const ItemAttributeOmitSchema = z.object({ id: _select, name: _select });

export const ItemAttributeValueOmitSchema = z.object({
  id: _select,
  itemId: _select,
  attributeId: _select,
  value: _select,
});

export const CategoryOmitSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
});

export const BuildingOmitSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
});

export const RoomOmitSchema = z.object({
  id: _select,
  uuid: _select,
  buildingId: _select,
  name: _select,
  code: _select,
  floor: _select,
});

export const ItemOmitSchema = z.object({
  id: _select,
  uuid: _select,
  categoryId: _select,
  name: _select,
  description: _select,
  minQuantity: _select,
});

export const QuantityOmitSchema = z.object({
  id: _select,
  roomId: _select,
  itemId: _select,
  quantity: _select,
  minQuantity: _select,
});

export const SerialNumberOmitSchema = z.object({
  id: _select,
  uuid: _select,
  serialNumber: _select,
  itemId: _select,
  roomId: _select,
});

export const QuantityMoveRequestOmitSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  quantity: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
});

export const SerialMoveRequestOmitSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
});

export const EmployeeOmitSchema = z.object({ id: _select, uuid: _select });

export const EmployeeRoomOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  roomId: _select,
  givenAt: _select,
  takenAt: _select,
});

export const EmployeeItemOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  serialNumberId: _select,
  givenAt: _select,
  takenAt: _select,
});

export const EmployeeRoomRequestOmitSchema = z.object({
  id: _select,
  roomId: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  status: _select,
  note: _select,
});

export const EmployeeItemRequestOmitSchema = z.object({
  id: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  serialNumberId: _select,
  status: _select,
  note: _select,
});

export const RoomAttributeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOmitSchema
);

export const RoomAttributeValueOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOmitSchema
);

export const ItemAttributeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOmitSchema
);

export const ItemAttributeValueOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOmitSchema
);

export const CategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOmitSchema
);

export const BuildingOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOmitSchema
);

export const RoomOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOmitSchema
);

export const ItemOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOmitSchema
);

export const QuantityOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOmitSchema
);

export const SerialNumberOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOmitSchema
);

export const QuantityMoveRequestOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOmitSchema
);

export const SerialMoveRequestOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOmitSchema
);

export const EmployeeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOmitSchema
);

export const EmployeeRoomOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOmitSchema
);

export const EmployeeItemOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOmitSchema
);

export const EmployeeRoomRequestOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOmitSchema
);

export const EmployeeItemRequestOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOmitSchema
);

export const RoomAttributeOwnQueryOneSchema = z.object({
  select: RoomAttributeOwnSelectSchemaJson.optional(),
  omit: RoomAttributeOmitSchemaJson.optional(),
  where: RoomAttributeOwnWhereSchemaJson.optional(),
});

export const RoomAttributeValueOwnQueryOneSchema = z.object({
  select: RoomAttributeValueOwnSelectSchemaJson.optional(),
  omit: RoomAttributeValueOmitSchemaJson.optional(),
  where: RoomAttributeValueOwnWhereSchemaJson.optional(),
});

export const ItemAttributeOwnQueryOneSchema = z.object({
  select: ItemAttributeOwnSelectSchemaJson.optional(),
  omit: ItemAttributeOmitSchemaJson.optional(),
  where: ItemAttributeOwnWhereSchemaJson.optional(),
});

export const ItemAttributeValueOwnQueryOneSchema = z.object({
  select: ItemAttributeValueOwnSelectSchemaJson.optional(),
  omit: ItemAttributeValueOmitSchemaJson.optional(),
  where: ItemAttributeValueOwnWhereSchemaJson.optional(),
});

export const CategoryOwnQueryOneSchema = z.object({
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
});

export const BuildingOwnQueryOneSchema = z.object({
  select: BuildingOwnSelectSchemaJson.optional(),
  omit: BuildingOmitSchemaJson.optional(),
  where: BuildingOwnWhereSchemaJson.optional(),
});

export const RoomOwnQueryOneSchema = z.object({
  select: RoomOwnSelectSchemaJson.optional(),
  omit: RoomOmitSchemaJson.optional(),
  where: RoomOwnWhereSchemaJson.optional(),
});

export const ItemOwnQueryOneSchema = z.object({
  select: ItemOwnSelectSchemaJson.optional(),
  omit: ItemOmitSchemaJson.optional(),
  where: ItemOwnWhereSchemaJson.optional(),
});

export const QuantityOwnQueryOneSchema = z.object({
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  where: QuantityOwnWhereSchemaJson.optional(),
});

export const SerialNumberOwnQueryOneSchema = z.object({
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  where: SerialNumberOwnWhereSchemaJson.optional(),
});

export const QuantityMoveRequestOwnQueryOneSchema = z.object({
  select: QuantityMoveRequestOwnSelectSchemaJson.optional(),
  omit: QuantityMoveRequestOmitSchemaJson.optional(),
  where: QuantityMoveRequestOwnWhereSchemaJson.optional(),
});

export const SerialMoveRequestOwnQueryOneSchema = z.object({
  select: SerialMoveRequestOwnSelectSchemaJson.optional(),
  omit: SerialMoveRequestOmitSchemaJson.optional(),
  where: SerialMoveRequestOwnWhereSchemaJson.optional(),
});

export const EmployeeOwnQueryOneSchema = z.object({
  select: EmployeeOwnSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  where: EmployeeOwnWhereSchemaJson.optional(),
});

export const EmployeeRoomOwnQueryOneSchema = z.object({
  select: EmployeeRoomOwnSelectSchemaJson.optional(),
  omit: EmployeeRoomOmitSchemaJson.optional(),
  where: EmployeeRoomOwnWhereSchemaJson.optional(),
});

export const EmployeeItemOwnQueryOneSchema = z.object({
  select: EmployeeItemOwnSelectSchemaJson.optional(),
  omit: EmployeeItemOmitSchemaJson.optional(),
  where: EmployeeItemOwnWhereSchemaJson.optional(),
});

export const EmployeeRoomRequestOwnQueryOneSchema = z.object({
  select: EmployeeRoomRequestOwnSelectSchemaJson.optional(),
  omit: EmployeeRoomRequestOmitSchemaJson.optional(),
  where: EmployeeRoomRequestOwnWhereSchemaJson.optional(),
});

export const EmployeeItemRequestOwnQueryOneSchema = z.object({
  select: EmployeeItemRequestOwnSelectSchemaJson.optional(),
  omit: EmployeeItemRequestOmitSchemaJson.optional(),
  where: EmployeeItemRequestOwnWhereSchemaJson.optional(),
});

export const RoomAttributeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOwnQueryOneSchema
);

export const RoomAttributeValueOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOwnQueryOneSchema
);

export const ItemAttributeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOwnQueryOneSchema
);

export const ItemAttributeValueOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOwnQueryOneSchema
);

export const CategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQueryOneSchema
);

export const BuildingOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOwnQueryOneSchema
);

export const RoomOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOwnQueryOneSchema
);

export const ItemOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOwnQueryOneSchema
);

export const QuantityOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnQueryOneSchema
);

export const SerialNumberOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnQueryOneSchema
);

export const QuantityMoveRequestOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOwnQueryOneSchema
);

export const SerialMoveRequestOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOwnQueryOneSchema
);

export const EmployeeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnQueryOneSchema
);

export const EmployeeRoomOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOwnQueryOneSchema
);

export const EmployeeItemOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOwnQueryOneSchema
);

export const EmployeeRoomRequestOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOwnQueryOneSchema
);

export const EmployeeItemRequestOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOwnQueryOneSchema
);

export const RoomAttributeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomAttributeDistinctSchema.optional(),
  select: RoomAttributeOwnSelectSchemaJson.optional(),
  omit: RoomAttributeOmitSchemaJson.optional(),
  where: RoomAttributeOwnWhereSchemaJson.optional(),
  orderBy: RoomAttributeOwnOrderBySchemaJson.optional(),
});

export const RoomAttributeValueOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomAttributeValueDistinctSchema.optional(),
  select: RoomAttributeValueOwnSelectSchemaJson.optional(),
  omit: RoomAttributeValueOmitSchemaJson.optional(),
  where: RoomAttributeValueOwnWhereSchemaJson.optional(),
  orderBy: RoomAttributeValueOwnOrderBySchemaJson.optional(),
});

export const ItemAttributeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemAttributeDistinctSchema.optional(),
  select: ItemAttributeOwnSelectSchemaJson.optional(),
  omit: ItemAttributeOmitSchemaJson.optional(),
  where: ItemAttributeOwnWhereSchemaJson.optional(),
  orderBy: ItemAttributeOwnOrderBySchemaJson.optional(),
});

export const ItemAttributeValueOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemAttributeValueDistinctSchema.optional(),
  select: ItemAttributeValueOwnSelectSchemaJson.optional(),
  omit: ItemAttributeValueOmitSchemaJson.optional(),
  where: ItemAttributeValueOwnWhereSchemaJson.optional(),
  orderBy: ItemAttributeValueOwnOrderBySchemaJson.optional(),
});

export const CategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
  orderBy: CategoryOwnOrderBySchemaJson.optional(),
});

export const BuildingOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BuildingDistinctSchema.optional(),
  select: BuildingOwnSelectSchemaJson.optional(),
  omit: BuildingOmitSchemaJson.optional(),
  where: BuildingOwnWhereSchemaJson.optional(),
  orderBy: BuildingOwnOrderBySchemaJson.optional(),
});

export const RoomOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomDistinctSchema.optional(),
  select: RoomOwnSelectSchemaJson.optional(),
  omit: RoomOmitSchemaJson.optional(),
  where: RoomOwnWhereSchemaJson.optional(),
  orderBy: RoomOwnOrderBySchemaJson.optional(),
});

export const ItemOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemDistinctSchema.optional(),
  select: ItemOwnSelectSchemaJson.optional(),
  omit: ItemOmitSchemaJson.optional(),
  where: ItemOwnWhereSchemaJson.optional(),
  orderBy: ItemOwnOrderBySchemaJson.optional(),
});

export const QuantityOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  where: QuantityOwnWhereSchemaJson.optional(),
  orderBy: QuantityOwnOrderBySchemaJson.optional(),
});

export const SerialNumberOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  where: SerialNumberOwnWhereSchemaJson.optional(),
  orderBy: SerialNumberOwnOrderBySchemaJson.optional(),
});

export const QuantityMoveRequestOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityMoveRequestDistinctSchema.optional(),
  select: QuantityMoveRequestOwnSelectSchemaJson.optional(),
  omit: QuantityMoveRequestOmitSchemaJson.optional(),
  where: QuantityMoveRequestOwnWhereSchemaJson.optional(),
  orderBy: QuantityMoveRequestOwnOrderBySchemaJson.optional(),
});

export const SerialMoveRequestOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialMoveRequestDistinctSchema.optional(),
  select: SerialMoveRequestOwnSelectSchemaJson.optional(),
  omit: SerialMoveRequestOmitSchemaJson.optional(),
  where: SerialMoveRequestOwnWhereSchemaJson.optional(),
  orderBy: SerialMoveRequestOwnOrderBySchemaJson.optional(),
});

export const EmployeeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDistinctSchema.optional(),
  select: EmployeeOwnSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  where: EmployeeOwnWhereSchemaJson.optional(),
  orderBy: EmployeeOwnOrderBySchemaJson.optional(),
});

export const EmployeeRoomOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeRoomDistinctSchema.optional(),
  select: EmployeeRoomOwnSelectSchemaJson.optional(),
  omit: EmployeeRoomOmitSchemaJson.optional(),
  where: EmployeeRoomOwnWhereSchemaJson.optional(),
  orderBy: EmployeeRoomOwnOrderBySchemaJson.optional(),
});

export const EmployeeItemOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeItemDistinctSchema.optional(),
  select: EmployeeItemOwnSelectSchemaJson.optional(),
  omit: EmployeeItemOmitSchemaJson.optional(),
  where: EmployeeItemOwnWhereSchemaJson.optional(),
  orderBy: EmployeeItemOwnOrderBySchemaJson.optional(),
});

export const EmployeeRoomRequestOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeRoomRequestDistinctSchema.optional(),
  select: EmployeeRoomRequestOwnSelectSchemaJson.optional(),
  omit: EmployeeRoomRequestOmitSchemaJson.optional(),
  where: EmployeeRoomRequestOwnWhereSchemaJson.optional(),
  orderBy: EmployeeRoomRequestOwnOrderBySchemaJson.optional(),
});

export const EmployeeItemRequestOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeItemRequestDistinctSchema.optional(),
  select: EmployeeItemRequestOwnSelectSchemaJson.optional(),
  omit: EmployeeItemRequestOmitSchemaJson.optional(),
  where: EmployeeItemRequestOwnWhereSchemaJson.optional(),
  orderBy: EmployeeItemRequestOwnOrderBySchemaJson.optional(),
});

export const RoomAttributeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeOwnQuerySchema
);

export const RoomAttributeValueOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueOwnQuerySchema
);

export const ItemAttributeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeOwnQuerySchema
);

export const ItemAttributeValueOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueOwnQuerySchema
);

export const CategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQuerySchema
);

export const BuildingOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingOwnQuerySchema
);

export const RoomOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomOwnQuerySchema
);

export const ItemOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemOwnQuerySchema
);

export const QuantityOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityOwnQuerySchema
);

export const SerialNumberOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberOwnQuerySchema
);

export const QuantityMoveRequestOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestOwnQuerySchema
);

export const SerialMoveRequestOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestOwnQuerySchema
);

export const EmployeeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnQuerySchema
);

export const EmployeeRoomOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomOwnQuerySchema
);

export const EmployeeItemOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemOwnQuerySchema
);

export const EmployeeRoomRequestOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestOwnQuerySchema
);

export const EmployeeItemRequestOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestOwnQuerySchema
);

export const RoomAttributeIncludeSchema = z.object({
  values: _select.or(RoomAttributeValueOwnQueryOneSchema).optional(),
});

export const RoomAttributeValueIncludeSchema = z.object({
  attribute: _select.or(RoomAttributeOwnQueryOneSchema).optional(),
  room: _select.or(RoomOwnQueryOneSchema).optional(),
});

export const ItemAttributeIncludeSchema = z.object({
  values: _select.or(ItemAttributeValueOwnQueryOneSchema).optional(),
});

export const ItemAttributeValueIncludeSchema = z.object({
  attribute: _select.or(ItemAttributeOwnQueryOneSchema).optional(),
  item: _select.or(ItemOwnQueryOneSchema).optional(),
});

export const CategoryIncludeSchema = z.object({
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQueryOneSchema).optional(),
  items: _select.or(ItemOwnQueryOneSchema).optional(),
});

export const BuildingIncludeSchema = z.object({
  rooms: _select.or(RoomOwnQueryOneSchema).optional(),
});

export const RoomIncludeSchema = z.object({
  building: _select.or(BuildingOwnQueryOneSchema).optional(),
  attributes: _select.or(RoomAttributeValueOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  serials: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  employeeRooms: _select.or(EmployeeRoomOwnQueryOneSchema).optional(),
  employeeRoomRequests: _select
    .or(EmployeeRoomRequestOwnQueryOneSchema)
    .optional(),
});

export const ItemIncludeSchema = z.object({
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  attributes: _select.or(ItemAttributeValueOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  serials: _select.or(SerialNumberOwnQueryOneSchema).optional(),
});

export const QuantityIncludeSchema = z.object({
  item: _select.or(ItemOwnQueryOneSchema).optional(),
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  quantityMoveSources: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
  quantityMoveTargets: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
});

export const SerialNumberIncludeSchema = z.object({
  item: _select.or(ItemOwnQueryOneSchema).optional(),
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  serialMoveSources: _select.or(SerialMoveRequestOwnQueryOneSchema).optional(),
  serialMoveTargets: _select.or(SerialMoveRequestOwnQueryOneSchema).optional(),
  employeeItemRequests: _select
    .or(EmployeeItemRequestOwnQueryOneSchema)
    .optional(),
  employeeItems: _select.or(EmployeeItemOwnQueryOneSchema).optional(),
});

export const QuantityMoveRequestIncludeSchema = z.object({
  source: _select.or(QuantityOwnQueryOneSchema).optional(),
  target: _select.or(QuantityOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const SerialMoveRequestIncludeSchema = z.object({
  source: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  target: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeIncludeSchema = z.object({
  rooms: _select.or(EmployeeRoomOwnQueryOneSchema).optional(),
  items: _select.or(EmployeeItemOwnQueryOneSchema).optional(),
  itemRequesters: _select.or(EmployeeItemRequestOwnQueryOneSchema).optional(),
  itemResolvers: _select.or(EmployeeItemRequestOwnQueryOneSchema).optional(),
  roomRequesters: _select.or(EmployeeRoomRequestOwnQueryOneSchema).optional(),
  roomResolvers: _select.or(EmployeeRoomRequestOwnQueryOneSchema).optional(),
  serialMoveRequesters: _select
    .or(SerialMoveRequestOwnQueryOneSchema)
    .optional(),
  serialMoveResolvers: _select
    .or(SerialMoveRequestOwnQueryOneSchema)
    .optional(),
  quantityMoveRequesters: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
  quantityMoveResolvers: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
});

export const EmployeeRoomIncludeSchema = z.object({
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeItemIncludeSchema = z.object({
  serialNumber: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeRoomRequestIncludeSchema = z.object({
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeItemRequestIncludeSchema = z.object({
  serialNumber: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const RoomAttributeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeIncludeSchema
);

export const RoomAttributeValueIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueIncludeSchema
);

export const ItemAttributeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeIncludeSchema
);

export const ItemAttributeValueIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueIncludeSchema
);

export const CategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryIncludeSchema
);

export const BuildingIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingIncludeSchema
);

export const RoomIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomIncludeSchema
);

export const ItemIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemIncludeSchema
);

export const QuantityIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityIncludeSchema
);

export const SerialNumberIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberIncludeSchema
);

export const QuantityMoveRequestIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestIncludeSchema
);

export const SerialMoveRequestIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestIncludeSchema
);

export const EmployeeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeIncludeSchema
);

export const EmployeeRoomIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomIncludeSchema
);

export const EmployeeItemIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemIncludeSchema
);

export const EmployeeRoomRequestIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestIncludeSchema
);

export const EmployeeItemRequestIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestIncludeSchema
);

export const RoomAttributeCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  values: _select.or(RoomAttributeValueOwnQueryOneSchema).optional(),
});

export const RoomAttributeValueCompleteSelectSchema = z.object({
  id: _select,
  roomId: _select,
  attributeId: _select,
  value: _select,
  attribute: _select.or(RoomAttributeOwnQueryOneSchema).optional(),
  room: _select.or(RoomOwnQueryOneSchema).optional(),
});

export const ItemAttributeCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  values: _select.or(ItemAttributeValueOwnQueryOneSchema).optional(),
});

export const ItemAttributeValueCompleteSelectSchema = z.object({
  id: _select,
  itemId: _select,
  attributeId: _select,
  value: _select,
  attribute: _select.or(ItemAttributeOwnQueryOneSchema).optional(),
  item: _select.or(ItemOwnQueryOneSchema).optional(),
});

export const CategoryCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  children: _select.or(CategoryOwnQueryOneSchema).optional(),
  items: _select.or(ItemOwnQueryOneSchema).optional(),
});

export const BuildingCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  rooms: _select.or(RoomOwnQueryOneSchema).optional(),
});

export const RoomCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  buildingId: _select,
  name: _select,
  code: _select,
  floor: _select,
  building: _select.or(BuildingOwnQueryOneSchema).optional(),
  attributes: _select.or(RoomAttributeValueOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  serials: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  employeeRooms: _select.or(EmployeeRoomOwnQueryOneSchema).optional(),
  employeeRoomRequests: _select
    .or(EmployeeRoomRequestOwnQueryOneSchema)
    .optional(),
});

export const ItemCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  categoryId: _select,
  name: _select,
  description: _select,
  minQuantity: _select,
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
  attributes: _select.or(ItemAttributeValueOwnQueryOneSchema).optional(),
  quantities: _select.or(QuantityOwnQueryOneSchema).optional(),
  serials: _select.or(SerialNumberOwnQueryOneSchema).optional(),
});

export const QuantityCompleteSelectSchema = z.object({
  id: _select,
  roomId: _select,
  itemId: _select,
  quantity: _select,
  minQuantity: _select,
  item: _select.or(ItemOwnQueryOneSchema).optional(),
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  quantityMoveSources: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
  quantityMoveTargets: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
});

export const SerialNumberCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  serialNumber: _select,
  itemId: _select,
  roomId: _select,
  item: _select.or(ItemOwnQueryOneSchema).optional(),
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  serialMoveSources: _select.or(SerialMoveRequestOwnQueryOneSchema).optional(),
  serialMoveTargets: _select.or(SerialMoveRequestOwnQueryOneSchema).optional(),
  employeeItemRequests: _select
    .or(EmployeeItemRequestOwnQueryOneSchema)
    .optional(),
  employeeItems: _select.or(EmployeeItemOwnQueryOneSchema).optional(),
});

export const QuantityMoveRequestCompleteSelectSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  quantity: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
  source: _select.or(QuantityOwnQueryOneSchema).optional(),
  target: _select.or(QuantityOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const SerialMoveRequestCompleteSelectSchema = z.object({
  id: _select,
  sourceId: _select,
  targetId: _select,
  requestedById: _select,
  resolvedById: _select,
  reason: _select,
  status: _select,
  requestedAt: _select,
  resolvedAt: _select,
  source: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  target: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  rooms: _select.or(EmployeeRoomOwnQueryOneSchema).optional(),
  items: _select.or(EmployeeItemOwnQueryOneSchema).optional(),
  itemRequesters: _select.or(EmployeeItemRequestOwnQueryOneSchema).optional(),
  itemResolvers: _select.or(EmployeeItemRequestOwnQueryOneSchema).optional(),
  roomRequesters: _select.or(EmployeeRoomRequestOwnQueryOneSchema).optional(),
  roomResolvers: _select.or(EmployeeRoomRequestOwnQueryOneSchema).optional(),
  serialMoveRequesters: _select
    .or(SerialMoveRequestOwnQueryOneSchema)
    .optional(),
  serialMoveResolvers: _select
    .or(SerialMoveRequestOwnQueryOneSchema)
    .optional(),
  quantityMoveRequesters: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
  quantityMoveResolvers: _select
    .or(QuantityMoveRequestOwnQueryOneSchema)
    .optional(),
});

export const EmployeeRoomCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  roomId: _select,
  givenAt: _select,
  takenAt: _select,
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeItemCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  serialNumberId: _select,
  givenAt: _select,
  takenAt: _select,
  serialNumber: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeRoomRequestCompleteSelectSchema = z.object({
  id: _select,
  roomId: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  status: _select,
  note: _select,
  room: _select.or(RoomOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeItemRequestCompleteSelectSchema = z.object({
  id: _select,
  requestedById: _select,
  resolvedById: _select,
  requestedAt: _select,
  resolvedAt: _select,
  serialNumberId: _select,
  status: _select,
  note: _select,
  serialNumber: _select.or(SerialNumberOwnQueryOneSchema).optional(),
  requestedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  resolvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const RoomAttributeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeCompleteSelectSchema
);

export const RoomAttributeValueCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueCompleteSelectSchema
);

export const ItemAttributeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeCompleteSelectSchema
);

export const ItemAttributeValueCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueCompleteSelectSchema
);

export const CategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteSelectSchema
);

export const BuildingCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingCompleteSelectSchema
);

export const RoomCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomCompleteSelectSchema
);

export const ItemCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemCompleteSelectSchema
);

export const QuantityCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityCompleteSelectSchema
);

export const SerialNumberCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberCompleteSelectSchema
);

export const QuantityMoveRequestCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestCompleteSelectSchema
);

export const SerialMoveRequestCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestCompleteSelectSchema
);

export const EmployeeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeCompleteSelectSchema
);

export const EmployeeRoomCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomCompleteSelectSchema
);

export const EmployeeItemCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemCompleteSelectSchema
);

export const EmployeeRoomRequestCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestCompleteSelectSchema
);

export const EmployeeItemRequestCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestCompleteSelectSchema
);

export const RoomAttributeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomAttributeDistinctSchema.optional(),
  select: RoomAttributeOwnSelectSchemaJson.optional(),
  omit: RoomAttributeOmitSchemaJson.optional(),
  include: RoomAttributeIncludeSchemaJson.optional(),
  where: RoomAttributeOwnWhereSchemaJson.optional(),
  orderBy: RoomAttributeOwnOrderBySchemaJson.optional(),
});

export const RoomAttributeValueQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomAttributeValueDistinctSchema.optional(),
  select: RoomAttributeValueOwnSelectSchemaJson.optional(),
  omit: RoomAttributeValueOmitSchemaJson.optional(),
  include: RoomAttributeValueIncludeSchemaJson.optional(),
  where: RoomAttributeValueOwnWhereSchemaJson.optional(),
  orderBy: RoomAttributeValueOwnOrderBySchemaJson.optional(),
});

export const ItemAttributeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemAttributeDistinctSchema.optional(),
  select: ItemAttributeOwnSelectSchemaJson.optional(),
  omit: ItemAttributeOmitSchemaJson.optional(),
  include: ItemAttributeIncludeSchemaJson.optional(),
  where: ItemAttributeOwnWhereSchemaJson.optional(),
  orderBy: ItemAttributeOwnOrderBySchemaJson.optional(),
});

export const ItemAttributeValueQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemAttributeValueDistinctSchema.optional(),
  select: ItemAttributeValueOwnSelectSchemaJson.optional(),
  omit: ItemAttributeValueOmitSchemaJson.optional(),
  include: ItemAttributeValueIncludeSchemaJson.optional(),
  where: ItemAttributeValueOwnWhereSchemaJson.optional(),
  orderBy: ItemAttributeValueOwnOrderBySchemaJson.optional(),
});

export const CategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
  orderBy: CategoryOwnOrderBySchemaJson.optional(),
});

export const BuildingQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BuildingDistinctSchema.optional(),
  select: BuildingOwnSelectSchemaJson.optional(),
  omit: BuildingOmitSchemaJson.optional(),
  include: BuildingIncludeSchemaJson.optional(),
  where: BuildingOwnWhereSchemaJson.optional(),
  orderBy: BuildingOwnOrderBySchemaJson.optional(),
});

export const RoomQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomDistinctSchema.optional(),
  select: RoomOwnSelectSchemaJson.optional(),
  omit: RoomOmitSchemaJson.optional(),
  include: RoomIncludeSchemaJson.optional(),
  where: RoomOwnWhereSchemaJson.optional(),
  orderBy: RoomOwnOrderBySchemaJson.optional(),
});

export const ItemQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemDistinctSchema.optional(),
  select: ItemOwnSelectSchemaJson.optional(),
  omit: ItemOmitSchemaJson.optional(),
  include: ItemIncludeSchemaJson.optional(),
  where: ItemOwnWhereSchemaJson.optional(),
  orderBy: ItemOwnOrderBySchemaJson.optional(),
});

export const QuantityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityOwnSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityOwnWhereSchemaJson.optional(),
  orderBy: QuantityOwnOrderBySchemaJson.optional(),
});

export const SerialNumberQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberOwnSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberOwnWhereSchemaJson.optional(),
  orderBy: SerialNumberOwnOrderBySchemaJson.optional(),
});

export const QuantityMoveRequestQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityMoveRequestDistinctSchema.optional(),
  select: QuantityMoveRequestOwnSelectSchemaJson.optional(),
  omit: QuantityMoveRequestOmitSchemaJson.optional(),
  include: QuantityMoveRequestIncludeSchemaJson.optional(),
  where: QuantityMoveRequestOwnWhereSchemaJson.optional(),
  orderBy: QuantityMoveRequestOwnOrderBySchemaJson.optional(),
});

export const SerialMoveRequestQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialMoveRequestDistinctSchema.optional(),
  select: SerialMoveRequestOwnSelectSchemaJson.optional(),
  omit: SerialMoveRequestOmitSchemaJson.optional(),
  include: SerialMoveRequestIncludeSchemaJson.optional(),
  where: SerialMoveRequestOwnWhereSchemaJson.optional(),
  orderBy: SerialMoveRequestOwnOrderBySchemaJson.optional(),
});

export const EmployeeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDistinctSchema.optional(),
  select: EmployeeOwnSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  include: EmployeeIncludeSchemaJson.optional(),
  where: EmployeeOwnWhereSchemaJson.optional(),
  orderBy: EmployeeOwnOrderBySchemaJson.optional(),
});

export const EmployeeRoomQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeRoomDistinctSchema.optional(),
  select: EmployeeRoomOwnSelectSchemaJson.optional(),
  omit: EmployeeRoomOmitSchemaJson.optional(),
  include: EmployeeRoomIncludeSchemaJson.optional(),
  where: EmployeeRoomOwnWhereSchemaJson.optional(),
  orderBy: EmployeeRoomOwnOrderBySchemaJson.optional(),
});

export const EmployeeItemQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeItemDistinctSchema.optional(),
  select: EmployeeItemOwnSelectSchemaJson.optional(),
  omit: EmployeeItemOmitSchemaJson.optional(),
  include: EmployeeItemIncludeSchemaJson.optional(),
  where: EmployeeItemOwnWhereSchemaJson.optional(),
  orderBy: EmployeeItemOwnOrderBySchemaJson.optional(),
});

export const EmployeeRoomRequestQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeRoomRequestDistinctSchema.optional(),
  select: EmployeeRoomRequestOwnSelectSchemaJson.optional(),
  omit: EmployeeRoomRequestOmitSchemaJson.optional(),
  include: EmployeeRoomRequestIncludeSchemaJson.optional(),
  where: EmployeeRoomRequestOwnWhereSchemaJson.optional(),
  orderBy: EmployeeRoomRequestOwnOrderBySchemaJson.optional(),
});

export const EmployeeItemRequestQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeItemRequestDistinctSchema.optional(),
  select: EmployeeItemRequestOwnSelectSchemaJson.optional(),
  omit: EmployeeItemRequestOmitSchemaJson.optional(),
  include: EmployeeItemRequestIncludeSchemaJson.optional(),
  where: EmployeeItemRequestOwnWhereSchemaJson.optional(),
  orderBy: EmployeeItemRequestOwnOrderBySchemaJson.optional(),
});

export const RoomAttributeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeQuerySchema
);

export const RoomAttributeValueQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueQuerySchema
);

export const ItemAttributeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeQuerySchema
);

export const ItemAttributeValueQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueQuerySchema
);

export const CategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryQuerySchema
);

export const BuildingQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingQuerySchema
);

export const RoomQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomQuerySchema
);

export const ItemQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemQuerySchema
);

export const QuantityQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityQuerySchema
);

export const SerialNumberQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberQuerySchema
);

export const QuantityMoveRequestQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestQuerySchema
);

export const SerialMoveRequestQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestQuerySchema
);

export const EmployeeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeQuerySchema
);

export const EmployeeRoomQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomQuerySchema
);

export const EmployeeItemQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemQuerySchema
);

export const EmployeeRoomRequestQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestQuerySchema
);

export const EmployeeItemRequestQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestQuerySchema
);

export const RoomAttributeCompleteQueryOneSchema = z.object({
  select: RoomAttributeSelectSchemaJson.optional(),
  omit: RoomAttributeOmitSchemaJson.optional(),
  include: RoomAttributeIncludeSchemaJson.optional(),
  where: RoomAttributeWhereSchemaJson.optional(),
});

export const RoomAttributeValueCompleteQueryOneSchema = z.object({
  select: RoomAttributeValueSelectSchemaJson.optional(),
  omit: RoomAttributeValueOmitSchemaJson.optional(),
  include: RoomAttributeValueIncludeSchemaJson.optional(),
  where: RoomAttributeValueWhereSchemaJson.optional(),
});

export const ItemAttributeCompleteQueryOneSchema = z.object({
  select: ItemAttributeSelectSchemaJson.optional(),
  omit: ItemAttributeOmitSchemaJson.optional(),
  include: ItemAttributeIncludeSchemaJson.optional(),
  where: ItemAttributeWhereSchemaJson.optional(),
});

export const ItemAttributeValueCompleteQueryOneSchema = z.object({
  select: ItemAttributeValueSelectSchemaJson.optional(),
  omit: ItemAttributeValueOmitSchemaJson.optional(),
  include: ItemAttributeValueIncludeSchemaJson.optional(),
  where: ItemAttributeValueWhereSchemaJson.optional(),
});

export const CategoryCompleteQueryOneSchema = z.object({
  select: CategorySelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
});

export const BuildingCompleteQueryOneSchema = z.object({
  select: BuildingSelectSchemaJson.optional(),
  omit: BuildingOmitSchemaJson.optional(),
  include: BuildingIncludeSchemaJson.optional(),
  where: BuildingWhereSchemaJson.optional(),
});

export const RoomCompleteQueryOneSchema = z.object({
  select: RoomSelectSchemaJson.optional(),
  omit: RoomOmitSchemaJson.optional(),
  include: RoomIncludeSchemaJson.optional(),
  where: RoomWhereSchemaJson.optional(),
});

export const ItemCompleteQueryOneSchema = z.object({
  select: ItemSelectSchemaJson.optional(),
  omit: ItemOmitSchemaJson.optional(),
  include: ItemIncludeSchemaJson.optional(),
  where: ItemWhereSchemaJson.optional(),
});

export const QuantityCompleteQueryOneSchema = z.object({
  select: QuantitySelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityWhereSchemaJson.optional(),
});

export const SerialNumberCompleteQueryOneSchema = z.object({
  select: SerialNumberSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberWhereSchemaJson.optional(),
});

export const QuantityMoveRequestCompleteQueryOneSchema = z.object({
  select: QuantityMoveRequestSelectSchemaJson.optional(),
  omit: QuantityMoveRequestOmitSchemaJson.optional(),
  include: QuantityMoveRequestIncludeSchemaJson.optional(),
  where: QuantityMoveRequestWhereSchemaJson.optional(),
});

export const SerialMoveRequestCompleteQueryOneSchema = z.object({
  select: SerialMoveRequestSelectSchemaJson.optional(),
  omit: SerialMoveRequestOmitSchemaJson.optional(),
  include: SerialMoveRequestIncludeSchemaJson.optional(),
  where: SerialMoveRequestWhereSchemaJson.optional(),
});

export const EmployeeCompleteQueryOneSchema = z.object({
  select: EmployeeSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  include: EmployeeIncludeSchemaJson.optional(),
  where: EmployeeWhereSchemaJson.optional(),
});

export const EmployeeRoomCompleteQueryOneSchema = z.object({
  select: EmployeeRoomSelectSchemaJson.optional(),
  omit: EmployeeRoomOmitSchemaJson.optional(),
  include: EmployeeRoomIncludeSchemaJson.optional(),
  where: EmployeeRoomWhereSchemaJson.optional(),
});

export const EmployeeItemCompleteQueryOneSchema = z.object({
  select: EmployeeItemSelectSchemaJson.optional(),
  omit: EmployeeItemOmitSchemaJson.optional(),
  include: EmployeeItemIncludeSchemaJson.optional(),
  where: EmployeeItemWhereSchemaJson.optional(),
});

export const EmployeeRoomRequestCompleteQueryOneSchema = z.object({
  select: EmployeeRoomRequestSelectSchemaJson.optional(),
  omit: EmployeeRoomRequestOmitSchemaJson.optional(),
  include: EmployeeRoomRequestIncludeSchemaJson.optional(),
  where: EmployeeRoomRequestWhereSchemaJson.optional(),
});

export const EmployeeItemRequestCompleteQueryOneSchema = z.object({
  select: EmployeeItemRequestSelectSchemaJson.optional(),
  omit: EmployeeItemRequestOmitSchemaJson.optional(),
  include: EmployeeItemRequestIncludeSchemaJson.optional(),
  where: EmployeeItemRequestWhereSchemaJson.optional(),
});

export const RoomAttributeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeCompleteQueryOneSchema
);

export const RoomAttributeValueCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueCompleteQueryOneSchema
);

export const ItemAttributeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeCompleteQueryOneSchema
);

export const ItemAttributeValueCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueCompleteQueryOneSchema
);

export const CategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQueryOneSchema
);

export const BuildingCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingCompleteQueryOneSchema
);

export const RoomCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomCompleteQueryOneSchema
);

export const ItemCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemCompleteQueryOneSchema
);

export const QuantityCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityCompleteQueryOneSchema
);

export const SerialNumberCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberCompleteQueryOneSchema
);

export const QuantityMoveRequestCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestCompleteQueryOneSchema
);

export const SerialMoveRequestCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestCompleteQueryOneSchema
);

export const EmployeeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeCompleteQueryOneSchema
);

export const EmployeeRoomCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomCompleteQueryOneSchema
);

export const EmployeeItemCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemCompleteQueryOneSchema
);

export const EmployeeRoomRequestCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestCompleteQueryOneSchema
);

export const EmployeeItemRequestCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestCompleteQueryOneSchema
);

export const RoomAttributeCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomAttributeDistinctSchema.optional(),
  select: RoomAttributeCompleteSelectSchemaJson.optional(),
  omit: RoomAttributeOmitSchemaJson.optional(),
  include: RoomAttributeIncludeSchemaJson.optional(),
  where: RoomAttributeWhereSchemaJson.optional(),
  orderBy: RoomAttributeOrderBySchemaJson.optional(),
});

export const RoomAttributeValueCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomAttributeValueDistinctSchema.optional(),
  select: RoomAttributeValueCompleteSelectSchemaJson.optional(),
  omit: RoomAttributeValueOmitSchemaJson.optional(),
  include: RoomAttributeValueIncludeSchemaJson.optional(),
  where: RoomAttributeValueWhereSchemaJson.optional(),
  orderBy: RoomAttributeValueOrderBySchemaJson.optional(),
});

export const ItemAttributeCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemAttributeDistinctSchema.optional(),
  select: ItemAttributeCompleteSelectSchemaJson.optional(),
  omit: ItemAttributeOmitSchemaJson.optional(),
  include: ItemAttributeIncludeSchemaJson.optional(),
  where: ItemAttributeWhereSchemaJson.optional(),
  orderBy: ItemAttributeOrderBySchemaJson.optional(),
});

export const ItemAttributeValueCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemAttributeValueDistinctSchema.optional(),
  select: ItemAttributeValueCompleteSelectSchemaJson.optional(),
  omit: ItemAttributeValueOmitSchemaJson.optional(),
  include: ItemAttributeValueIncludeSchemaJson.optional(),
  where: ItemAttributeValueWhereSchemaJson.optional(),
  orderBy: ItemAttributeValueOrderBySchemaJson.optional(),
});

export const CategoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryCompleteSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
  orderBy: CategoryOrderBySchemaJson.optional(),
});

export const BuildingCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BuildingDistinctSchema.optional(),
  select: BuildingCompleteSelectSchemaJson.optional(),
  omit: BuildingOmitSchemaJson.optional(),
  include: BuildingIncludeSchemaJson.optional(),
  where: BuildingWhereSchemaJson.optional(),
  orderBy: BuildingOrderBySchemaJson.optional(),
});

export const RoomCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: RoomDistinctSchema.optional(),
  select: RoomCompleteSelectSchemaJson.optional(),
  omit: RoomOmitSchemaJson.optional(),
  include: RoomIncludeSchemaJson.optional(),
  where: RoomWhereSchemaJson.optional(),
  orderBy: RoomOrderBySchemaJson.optional(),
});

export const ItemCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ItemDistinctSchema.optional(),
  select: ItemCompleteSelectSchemaJson.optional(),
  omit: ItemOmitSchemaJson.optional(),
  include: ItemIncludeSchemaJson.optional(),
  where: ItemWhereSchemaJson.optional(),
  orderBy: ItemOrderBySchemaJson.optional(),
});

export const QuantityCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityDistinctSchema.optional(),
  select: QuantityCompleteSelectSchemaJson.optional(),
  omit: QuantityOmitSchemaJson.optional(),
  include: QuantityIncludeSchemaJson.optional(),
  where: QuantityWhereSchemaJson.optional(),
  orderBy: QuantityOrderBySchemaJson.optional(),
});

export const SerialNumberCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialNumberDistinctSchema.optional(),
  select: SerialNumberCompleteSelectSchemaJson.optional(),
  omit: SerialNumberOmitSchemaJson.optional(),
  include: SerialNumberIncludeSchemaJson.optional(),
  where: SerialNumberWhereSchemaJson.optional(),
  orderBy: SerialNumberOrderBySchemaJson.optional(),
});

export const QuantityMoveRequestCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: QuantityMoveRequestDistinctSchema.optional(),
  select: QuantityMoveRequestCompleteSelectSchemaJson.optional(),
  omit: QuantityMoveRequestOmitSchemaJson.optional(),
  include: QuantityMoveRequestIncludeSchemaJson.optional(),
  where: QuantityMoveRequestWhereSchemaJson.optional(),
  orderBy: QuantityMoveRequestOrderBySchemaJson.optional(),
});

export const SerialMoveRequestCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SerialMoveRequestDistinctSchema.optional(),
  select: SerialMoveRequestCompleteSelectSchemaJson.optional(),
  omit: SerialMoveRequestOmitSchemaJson.optional(),
  include: SerialMoveRequestIncludeSchemaJson.optional(),
  where: SerialMoveRequestWhereSchemaJson.optional(),
  orderBy: SerialMoveRequestOrderBySchemaJson.optional(),
});

export const EmployeeCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDistinctSchema.optional(),
  select: EmployeeCompleteSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  include: EmployeeIncludeSchemaJson.optional(),
  where: EmployeeWhereSchemaJson.optional(),
  orderBy: EmployeeOrderBySchemaJson.optional(),
});

export const EmployeeRoomCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeRoomDistinctSchema.optional(),
  select: EmployeeRoomCompleteSelectSchemaJson.optional(),
  omit: EmployeeRoomOmitSchemaJson.optional(),
  include: EmployeeRoomIncludeSchemaJson.optional(),
  where: EmployeeRoomWhereSchemaJson.optional(),
  orderBy: EmployeeRoomOrderBySchemaJson.optional(),
});

export const EmployeeItemCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeItemDistinctSchema.optional(),
  select: EmployeeItemCompleteSelectSchemaJson.optional(),
  omit: EmployeeItemOmitSchemaJson.optional(),
  include: EmployeeItemIncludeSchemaJson.optional(),
  where: EmployeeItemWhereSchemaJson.optional(),
  orderBy: EmployeeItemOrderBySchemaJson.optional(),
});

export const EmployeeRoomRequestCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeRoomRequestDistinctSchema.optional(),
  select: EmployeeRoomRequestCompleteSelectSchemaJson.optional(),
  omit: EmployeeRoomRequestOmitSchemaJson.optional(),
  include: EmployeeRoomRequestIncludeSchemaJson.optional(),
  where: EmployeeRoomRequestWhereSchemaJson.optional(),
  orderBy: EmployeeRoomRequestOrderBySchemaJson.optional(),
});

export const EmployeeItemRequestCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeItemRequestDistinctSchema.optional(),
  select: EmployeeItemRequestCompleteSelectSchemaJson.optional(),
  omit: EmployeeItemRequestOmitSchemaJson.optional(),
  include: EmployeeItemRequestIncludeSchemaJson.optional(),
  where: EmployeeItemRequestWhereSchemaJson.optional(),
  orderBy: EmployeeItemRequestOrderBySchemaJson.optional(),
});

export const RoomAttributeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeCompleteQuerySchema
);

export const RoomAttributeValueCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomAttributeValueCompleteQuerySchema
);

export const ItemAttributeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeCompleteQuerySchema
);

export const ItemAttributeValueCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemAttributeValueCompleteQuerySchema
);

export const CategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQuerySchema
);

export const BuildingCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BuildingCompleteQuerySchema
);

export const RoomCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  RoomCompleteQuerySchema
);

export const ItemCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ItemCompleteQuerySchema
);

export const QuantityCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityCompleteQuerySchema
);

export const SerialNumberCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialNumberCompleteQuerySchema
);

export const QuantityMoveRequestCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  QuantityMoveRequestCompleteQuerySchema
);

export const SerialMoveRequestCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SerialMoveRequestCompleteQuerySchema
);

export const EmployeeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeCompleteQuerySchema
);

export const EmployeeRoomCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomCompleteQuerySchema
);

export const EmployeeItemCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemCompleteQuerySchema
);

export const EmployeeRoomRequestCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeRoomRequestCompleteQuerySchema
);

export const EmployeeItemRequestCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeItemRequestCompleteQuerySchema
);

export const RoomAttributeProjectionSchema = z.union([
  z.object({ omit: RoomAttributeOmitSchemaJson }),
  z.object({ select: RoomAttributeSelectSchemaJson }),
  z.object({ include: RoomAttributeIncludeSchemaJson }),
  z.object({}),
]);

export const RoomAttributeValueProjectionSchema = z.union([
  z.object({ omit: RoomAttributeValueOmitSchemaJson }),
  z.object({ select: RoomAttributeValueSelectSchemaJson }),
  z.object({ include: RoomAttributeValueIncludeSchemaJson }),
  z.object({}),
]);

export const ItemAttributeProjectionSchema = z.union([
  z.object({ omit: ItemAttributeOmitSchemaJson }),
  z.object({ select: ItemAttributeSelectSchemaJson }),
  z.object({ include: ItemAttributeIncludeSchemaJson }),
  z.object({}),
]);

export const ItemAttributeValueProjectionSchema = z.union([
  z.object({ omit: ItemAttributeValueOmitSchemaJson }),
  z.object({ select: ItemAttributeValueSelectSchemaJson }),
  z.object({ include: ItemAttributeValueIncludeSchemaJson }),
  z.object({}),
]);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitSchemaJson }),
  z.object({ select: CategorySelectSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const BuildingProjectionSchema = z.union([
  z.object({ omit: BuildingOmitSchemaJson }),
  z.object({ select: BuildingSelectSchemaJson }),
  z.object({ include: BuildingIncludeSchemaJson }),
  z.object({}),
]);

export const RoomProjectionSchema = z.union([
  z.object({ omit: RoomOmitSchemaJson }),
  z.object({ select: RoomSelectSchemaJson }),
  z.object({ include: RoomIncludeSchemaJson }),
  z.object({}),
]);

export const ItemProjectionSchema = z.union([
  z.object({ omit: ItemOmitSchemaJson }),
  z.object({ select: ItemSelectSchemaJson }),
  z.object({ include: ItemIncludeSchemaJson }),
  z.object({}),
]);

export const QuantityProjectionSchema = z.union([
  z.object({ omit: QuantityOmitSchemaJson }),
  z.object({ select: QuantitySelectSchemaJson }),
  z.object({ include: QuantityIncludeSchemaJson }),
  z.object({}),
]);

export const SerialNumberProjectionSchema = z.union([
  z.object({ omit: SerialNumberOmitSchemaJson }),
  z.object({ select: SerialNumberSelectSchemaJson }),
  z.object({ include: SerialNumberIncludeSchemaJson }),
  z.object({}),
]);

export const QuantityMoveRequestProjectionSchema = z.union([
  z.object({ omit: QuantityMoveRequestOmitSchemaJson }),
  z.object({ select: QuantityMoveRequestSelectSchemaJson }),
  z.object({ include: QuantityMoveRequestIncludeSchemaJson }),
  z.object({}),
]);

export const SerialMoveRequestProjectionSchema = z.union([
  z.object({ omit: SerialMoveRequestOmitSchemaJson }),
  z.object({ select: SerialMoveRequestSelectSchemaJson }),
  z.object({ include: SerialMoveRequestIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeProjectionSchema = z.union([
  z.object({ omit: EmployeeOmitSchemaJson }),
  z.object({ select: EmployeeSelectSchemaJson }),
  z.object({ include: EmployeeIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeRoomProjectionSchema = z.union([
  z.object({ omit: EmployeeRoomOmitSchemaJson }),
  z.object({ select: EmployeeRoomSelectSchemaJson }),
  z.object({ include: EmployeeRoomIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeItemProjectionSchema = z.union([
  z.object({ omit: EmployeeItemOmitSchemaJson }),
  z.object({ select: EmployeeItemSelectSchemaJson }),
  z.object({ include: EmployeeItemIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeRoomRequestProjectionSchema = z.union([
  z.object({ omit: EmployeeRoomRequestOmitSchemaJson }),
  z.object({ select: EmployeeRoomRequestSelectSchemaJson }),
  z.object({ include: EmployeeRoomRequestIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeItemRequestProjectionSchema = z.union([
  z.object({ omit: EmployeeItemRequestOmitSchemaJson }),
  z.object({ select: EmployeeItemRequestSelectSchemaJson }),
  z.object({ include: EmployeeItemRequestIncludeSchemaJson }),
  z.object({}),
]);

export const RoomAttributeOwnCreateSchema = z.object({ name: _name });

export const RoomAttributeValueOwnCreateSchema = z.object({
  roomId: _id,
  attributeId: _id,
  value: _str,
});

export const ItemAttributeOwnCreateSchema = z.object({ name: _name });

export const ItemAttributeValueOwnCreateSchema = z.object({
  itemId: _id,
  attributeId: _id,
  value: _str,
});

export const CategoryOwnCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
});

export const BuildingOwnCreateSchema = z.object({ name: _name, code: _str });

export const RoomOwnCreateSchema = z.object({
  uuid: _str.optional(),
  buildingId: _id,
  name: _name,
  code: _str,
  floor: _int.optional(),
});

export const ItemOwnCreateSchema = z.object({
  uuid: _str.optional(),
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
  minQuantity: _int.optional(),
});

export const QuantityOwnCreateSchema = z.object({
  roomId: _id,
  itemId: _id,
  quantity: _int.optional(),
  minQuantity: _int.optional(),
});

export const SerialNumberOwnCreateSchema = z.object({
  uuid: _str.optional(),
  serialNumber: _str,
  itemId: _id,
  roomId: _id,
});

export const QuantityMoveRequestOwnCreateSchema = z.object({
  sourceId: _id,
  targetId: _id,
  requestedById: _id,
  resolvedById: _id.optional(),
  quantity: _int,
  reason: _str.optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: _date.optional(),
});

export const SerialMoveRequestOwnCreateSchema = z.object({
  sourceId: _id,
  targetId: _id,
  requestedById: _id,
  resolvedById: _id.optional(),
  reason: _str.optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: _date.optional(),
});

export const EmployeeOwnCreateSchema = z.object({ uuid: _str });

export const EmployeeRoomOwnCreateSchema = z.object({
  employeeId: _id,
  roomId: _id,
  takenAt: _date.optional(),
});

export const EmployeeItemOwnCreateSchema = z.object({
  employeeId: _id,
  serialNumberId: _id,
  takenAt: _date.optional(),
});

export const EmployeeRoomRequestOwnCreateSchema = z.object({
  roomId: _id.optional(),
  requestedById: _id,
  resolvedById: _id.optional(),
  resolvedAt: _date.optional(),
  status: RequestStatusSchema.optional(),
  note: _str.optional(),
});

export const EmployeeItemRequestOwnCreateSchema = z.object({
  requestedById: _id,
  resolvedById: _id.optional(),
  resolvedAt: _date.optional(),
  serialNumberId: _id.optional(),
  status: RequestStatusSchema.optional(),
  note: _str.optional(),
});

export const RoomAttributeCreateSchema = z.object({
  name: _name,
  values: z
    .object({ createMany: RoomAttributeValueOwnCreateSchema.array() })
    .array(),
});

export const RoomAttributeValueCreateSchema = z.object({
  roomId: _id,
  attributeId: _id,
  value: _str,
  attribute: z.object({ create: RoomAttributeOwnCreateSchema }),
  room: z.object({ create: RoomOwnCreateSchema }),
});

export const ItemAttributeCreateSchema = z.object({
  name: _name,
  values: z
    .object({ createMany: ItemAttributeValueOwnCreateSchema.array() })
    .array(),
});

export const ItemAttributeValueCreateSchema = z.object({
  itemId: _id,
  attributeId: _id,
  value: _str,
  attribute: z.object({ create: ItemAttributeOwnCreateSchema }),
  item: z.object({ create: ItemOwnCreateSchema }),
});

export const CategoryCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  parent: z.object({ create: CategoryOwnCreateSchema }).optional(),
  children: z.object({ createMany: CategoryOwnCreateSchema.array() }).array(),
  items: z.object({ createMany: ItemOwnCreateSchema.array() }).array(),
});

export const BuildingCreateSchema = z.object({
  name: _name,
  code: _str,
  rooms: z.object({ createMany: RoomOwnCreateSchema.array() }).array(),
});

export const RoomCreateSchema = z.object({
  uuid: _str.optional(),
  buildingId: _id,
  name: _name,
  code: _str,
  floor: _int.optional(),
  building: z.object({ create: BuildingOwnCreateSchema }),
  attributes: z
    .object({ createMany: RoomAttributeValueOwnCreateSchema.array() })
    .array(),
  quantities: z.object({ createMany: QuantityOwnCreateSchema.array() }).array(),
  serials: z
    .object({ createMany: SerialNumberOwnCreateSchema.array() })
    .array(),
  employeeRooms: z
    .object({ createMany: EmployeeRoomOwnCreateSchema.array() })
    .array(),
  employeeRoomRequests: z
    .object({ createMany: EmployeeRoomRequestOwnCreateSchema.array() })
    .array(),
});

export const ItemCreateSchema = z.object({
  uuid: _str.optional(),
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
  minQuantity: _int.optional(),
  category: z.object({ create: CategoryOwnCreateSchema }).optional(),
  attributes: z
    .object({ createMany: ItemAttributeValueOwnCreateSchema.array() })
    .array(),
  quantities: z.object({ createMany: QuantityOwnCreateSchema.array() }).array(),
  serials: z
    .object({ createMany: SerialNumberOwnCreateSchema.array() })
    .array(),
});

export const QuantityCreateSchema = z.object({
  roomId: _id,
  itemId: _id,
  quantity: _int.optional(),
  minQuantity: _int.optional(),
  item: z.object({ create: ItemOwnCreateSchema }),
  room: z.object({ create: RoomOwnCreateSchema }),
  quantityMoveSources: z
    .object({ createMany: QuantityMoveRequestOwnCreateSchema.array() })
    .array(),
  quantityMoveTargets: z
    .object({ createMany: QuantityMoveRequestOwnCreateSchema.array() })
    .array(),
});

export const SerialNumberCreateSchema = z.object({
  uuid: _str.optional(),
  serialNumber: _str,
  itemId: _id,
  roomId: _id,
  item: z.object({ create: ItemOwnCreateSchema }),
  room: z.object({ create: RoomOwnCreateSchema }),
  serialMoveSources: z
    .object({ createMany: SerialMoveRequestOwnCreateSchema.array() })
    .array(),
  serialMoveTargets: z
    .object({ createMany: SerialMoveRequestOwnCreateSchema.array() })
    .array(),
  employeeItemRequests: z
    .object({ createMany: EmployeeItemRequestOwnCreateSchema.array() })
    .array(),
  employeeItems: z
    .object({ createMany: EmployeeItemOwnCreateSchema.array() })
    .array(),
});

export const QuantityMoveRequestCreateSchema = z.object({
  sourceId: _id,
  targetId: _id,
  requestedById: _id,
  resolvedById: _id.optional(),
  quantity: _int,
  reason: _str.optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: _date.optional(),
  source: z.object({ create: QuantityOwnCreateSchema }),
  target: z.object({ create: QuantityOwnCreateSchema }),
  requestedBy: z.object({ create: EmployeeOwnCreateSchema }),
  resolvedBy: z.object({ create: EmployeeOwnCreateSchema }).optional(),
});

export const SerialMoveRequestCreateSchema = z.object({
  sourceId: _id,
  targetId: _id,
  requestedById: _id,
  resolvedById: _id.optional(),
  reason: _str.optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: _date.optional(),
  source: z.object({ create: SerialNumberOwnCreateSchema }),
  target: z.object({ create: SerialNumberOwnCreateSchema }),
  requestedBy: z.object({ create: EmployeeOwnCreateSchema }),
  resolvedBy: z.object({ create: EmployeeOwnCreateSchema }).optional(),
});

export const EmployeeCreateSchema = z.object({
  uuid: _str,
  rooms: z.object({ createMany: EmployeeRoomOwnCreateSchema.array() }).array(),
  items: z.object({ createMany: EmployeeItemOwnCreateSchema.array() }).array(),
  itemRequesters: z
    .object({ createMany: EmployeeItemRequestOwnCreateSchema.array() })
    .array(),
  itemResolvers: z
    .object({ createMany: EmployeeItemRequestOwnCreateSchema.array() })
    .array(),
  roomRequesters: z
    .object({ createMany: EmployeeRoomRequestOwnCreateSchema.array() })
    .array(),
  roomResolvers: z
    .object({ createMany: EmployeeRoomRequestOwnCreateSchema.array() })
    .array(),
  serialMoveRequesters: z
    .object({ createMany: SerialMoveRequestOwnCreateSchema.array() })
    .array(),
  serialMoveResolvers: z
    .object({ createMany: SerialMoveRequestOwnCreateSchema.array() })
    .array(),
  quantityMoveRequesters: z
    .object({ createMany: QuantityMoveRequestOwnCreateSchema.array() })
    .array(),
  quantityMoveResolvers: z
    .object({ createMany: QuantityMoveRequestOwnCreateSchema.array() })
    .array(),
});

export const EmployeeRoomCreateSchema = z.object({
  employeeId: _id,
  roomId: _id,
  takenAt: _date.optional(),
  room: z.object({ create: RoomOwnCreateSchema }),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const EmployeeItemCreateSchema = z.object({
  employeeId: _id,
  serialNumberId: _id,
  takenAt: _date.optional(),
  serialNumber: z.object({ create: SerialNumberOwnCreateSchema }),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const EmployeeRoomRequestCreateSchema = z.object({
  roomId: _id.optional(),
  requestedById: _id,
  resolvedById: _id.optional(),
  resolvedAt: _date.optional(),
  status: RequestStatusSchema.optional(),
  note: _str.optional(),
  room: z.object({ create: RoomOwnCreateSchema }).optional(),
  requestedBy: z.object({ create: EmployeeOwnCreateSchema }),
  resolvedBy: z.object({ create: EmployeeOwnCreateSchema }).optional(),
});

export const EmployeeItemRequestCreateSchema = z.object({
  requestedById: _id,
  resolvedById: _id.optional(),
  resolvedAt: _date.optional(),
  serialNumberId: _id.optional(),
  status: RequestStatusSchema.optional(),
  note: _str.optional(),
  serialNumber: z.object({ create: SerialNumberOwnCreateSchema }).optional(),
  requestedBy: z.object({ create: EmployeeOwnCreateSchema }),
  resolvedBy: z.object({ create: EmployeeOwnCreateSchema }).optional(),
});

export const RoomAttributeUpdateSchema = z.object({ name: _name });

export const RoomAttributeValueUpdateSchema = z.object({
  roomId: _id,
  attributeId: _id,
  value: _str,
});

export const ItemAttributeUpdateSchema = z.object({ name: _name });

export const ItemAttributeValueUpdateSchema = z.object({
  itemId: _id,
  attributeId: _id,
  value: _str,
});

export const CategoryUpdateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
});

export const BuildingUpdateSchema = z.object({ name: _name, code: _str });

export const RoomUpdateSchema = z.object({
  buildingId: _id,
  name: _name,
  code: _str,
  floor: _int.optional(),
});

export const ItemUpdateSchema = z.object({
  categoryId: _id.optional(),
  name: _name,
  description: _description.optional(),
  minQuantity: _int.optional(),
});

export const QuantityUpdateSchema = z.object({
  roomId: _id,
  itemId: _id,
  quantity: _int.optional(),
  minQuantity: _int.optional(),
});

export const SerialNumberUpdateSchema = z.object({
  serialNumber: _str,
  itemId: _id,
  roomId: _id,
});

export const QuantityMoveRequestUpdateSchema = z.object({
  sourceId: _id,
  targetId: _id,
  requestedById: _id,
  resolvedById: _id.optional(),
  quantity: _int,
  reason: _str.optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: _date.optional(),
});

export const SerialMoveRequestUpdateSchema = z.object({
  sourceId: _id,
  targetId: _id,
  requestedById: _id,
  resolvedById: _id.optional(),
  reason: _str.optional(),
  status: RequestStatusSchema.optional(),
  resolvedAt: _date.optional(),
});

export const EmployeeUpdateSchema = z.object({ uuid: _str });

export const EmployeeRoomUpdateSchema = z.object({
  employeeId: _id,
  roomId: _id,
  takenAt: _date.optional(),
});

export const EmployeeItemUpdateSchema = z.object({
  employeeId: _id,
  serialNumberId: _id,
  takenAt: _date.optional(),
});

export const EmployeeRoomRequestUpdateSchema = z.object({
  roomId: _id.optional(),
  requestedById: _id,
  resolvedById: _id.optional(),
  resolvedAt: _date.optional(),
  status: RequestStatusSchema.optional(),
  note: _str.optional(),
});

export const EmployeeItemRequestUpdateSchema = z.object({
  requestedById: _id,
  resolvedById: _id.optional(),
  resolvedAt: _date.optional(),
  serialNumberId: _id.optional(),
  status: RequestStatusSchema.optional(),
  note: _str.optional(),
});
