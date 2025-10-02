
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- RoomAttribute Schemas ----------


export const RoomAttributeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const RoomAttributeCreateSchema = z.object({
  name: z.string(),
});

export const RoomAttributeUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const RoomAttributeWhereSchema = toWhereQuerySchema(RoomAttributeSchema);

export const RoomAttributeOrderSchema =  toOrderBySchema(RoomAttributeSchema);

export const RoomAttributeSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  values: z.boolean().optional(),
});

export const RoomAttributeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: RoomAttributeWhereSchema.optional(),
  orderBy: RoomAttributeOrderSchema.optional(),
  select: RoomAttributeSelectSchema.optional()
});

export type RoomAttribute = z.infer<typeof RoomAttributeSchema>;
export type RoomAttributeCreate = z.infer<typeof RoomAttributeCreateSchema>;
export type RoomAttributeUpdate = z.infer<typeof RoomAttributeUpdateSchema>;
export type RoomAttributeWhere = z.infer<typeof RoomAttributeWhereSchema>;
export type RoomAttributeOrder = z.infer<typeof RoomAttributeOrderSchema>;
export type RoomAttributeSelect = z.infer<typeof RoomAttributeSelectSchema>;
export type RoomAttributeQuery = z.infer<typeof RoomAttributeQuerySchema>;




// ---------- RoomAttributeValue Schemas ----------


export const RoomAttributeValueSchema = z.object({
  id: z.number().int(),
  roomId: z.number().int(),
  attributeId: z.number().int(),
  value: z.string(),
});

export const RoomAttributeValueCreateSchema = z.object({
  roomId: z.number().int(),
  attributeId: z.number().int(),
  value: z.string(),
});

export const RoomAttributeValueUpdateSchema = z.object({
  id: z.number().int().optional(),
  roomId: z.number().int().optional(),
  attributeId: z.number().int().optional(),
  value: z.string().optional(),
});

export const RoomAttributeValueWhereSchema = toWhereQuerySchema(RoomAttributeValueSchema);

export const RoomAttributeValueOrderSchema =  toOrderBySchema(RoomAttributeValueSchema);

export const RoomAttributeValueSelectSchema = z.object({
  id: z.boolean().optional(),
  roomId: z.boolean().optional(),
  attributeId: z.boolean().optional(),
  value: z.boolean().optional(),
  attribute: z.boolean().optional(),
  room: z.boolean().optional(),
});

export const RoomAttributeValueQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: RoomAttributeValueWhereSchema.optional(),
  orderBy: RoomAttributeValueOrderSchema.optional(),
  select: RoomAttributeValueSelectSchema.optional()
});

export type RoomAttributeValue = z.infer<typeof RoomAttributeValueSchema>;
export type RoomAttributeValueCreate = z.infer<typeof RoomAttributeValueCreateSchema>;
export type RoomAttributeValueUpdate = z.infer<typeof RoomAttributeValueUpdateSchema>;
export type RoomAttributeValueWhere = z.infer<typeof RoomAttributeValueWhereSchema>;
export type RoomAttributeValueOrder = z.infer<typeof RoomAttributeValueOrderSchema>;
export type RoomAttributeValueSelect = z.infer<typeof RoomAttributeValueSelectSchema>;
export type RoomAttributeValueQuery = z.infer<typeof RoomAttributeValueQuerySchema>;




// ---------- ItemAttribute Schemas ----------


export const ItemAttributeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const ItemAttributeCreateSchema = z.object({
  name: z.string(),
});

export const ItemAttributeUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const ItemAttributeWhereSchema = toWhereQuerySchema(ItemAttributeSchema);

export const ItemAttributeOrderSchema =  toOrderBySchema(ItemAttributeSchema);

export const ItemAttributeSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  values: z.boolean().optional(),
});

export const ItemAttributeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ItemAttributeWhereSchema.optional(),
  orderBy: ItemAttributeOrderSchema.optional(),
  select: ItemAttributeSelectSchema.optional()
});

export type ItemAttribute = z.infer<typeof ItemAttributeSchema>;
export type ItemAttributeCreate = z.infer<typeof ItemAttributeCreateSchema>;
export type ItemAttributeUpdate = z.infer<typeof ItemAttributeUpdateSchema>;
export type ItemAttributeWhere = z.infer<typeof ItemAttributeWhereSchema>;
export type ItemAttributeOrder = z.infer<typeof ItemAttributeOrderSchema>;
export type ItemAttributeSelect = z.infer<typeof ItemAttributeSelectSchema>;
export type ItemAttributeQuery = z.infer<typeof ItemAttributeQuerySchema>;




// ---------- ItemAttributeValue Schemas ----------


export const ItemAttributeValueSchema = z.object({
  id: z.number().int(),
  itemId: z.number().int(),
  attributeId: z.number().int(),
  value: z.string(),
});

export const ItemAttributeValueCreateSchema = z.object({
  itemId: z.number().int(),
  attributeId: z.number().int(),
  value: z.string(),
});

export const ItemAttributeValueUpdateSchema = z.object({
  id: z.number().int().optional(),
  itemId: z.number().int().optional(),
  attributeId: z.number().int().optional(),
  value: z.string().optional(),
});

export const ItemAttributeValueWhereSchema = toWhereQuerySchema(ItemAttributeValueSchema);

export const ItemAttributeValueOrderSchema =  toOrderBySchema(ItemAttributeValueSchema);

export const ItemAttributeValueSelectSchema = z.object({
  id: z.boolean().optional(),
  itemId: z.boolean().optional(),
  attributeId: z.boolean().optional(),
  value: z.boolean().optional(),
  attribute: z.boolean().optional(),
  item: z.boolean().optional(),
});

export const ItemAttributeValueQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ItemAttributeValueWhereSchema.optional(),
  orderBy: ItemAttributeValueOrderSchema.optional(),
  select: ItemAttributeValueSelectSchema.optional()
});

export type ItemAttributeValue = z.infer<typeof ItemAttributeValueSchema>;
export type ItemAttributeValueCreate = z.infer<typeof ItemAttributeValueCreateSchema>;
export type ItemAttributeValueUpdate = z.infer<typeof ItemAttributeValueUpdateSchema>;
export type ItemAttributeValueWhere = z.infer<typeof ItemAttributeValueWhereSchema>;
export type ItemAttributeValueOrder = z.infer<typeof ItemAttributeValueOrderSchema>;
export type ItemAttributeValueSelect = z.infer<typeof ItemAttributeValueSelectSchema>;
export type ItemAttributeValueQuery = z.infer<typeof ItemAttributeValueQuerySchema>;




// ---------- Category Schemas ----------


export const CategorySchema = z.object({
  id: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
});

export const CategoryCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  name: z.string(),
});

export const CategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
});

export const CategoryWhereSchema = toWhereQuerySchema(CategorySchema);

export const CategoryOrderSchema =  toOrderBySchema(CategorySchema);

export const CategorySelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  parent: z.boolean().optional(),
  children: z.boolean().optional(),
  items: z.boolean().optional(),
});

export const CategoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CategoryWhereSchema.optional(),
  orderBy: CategoryOrderSchema.optional(),
  select: CategorySelectSchema.optional()
});

export type Category = z.infer<typeof CategorySchema>;
export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;
export type CategoryOrder = z.infer<typeof CategoryOrderSchema>;
export type CategorySelect = z.infer<typeof CategorySelectSchema>;
export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;




// ---------- Building Schemas ----------


export const BuildingSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string(),
});

export const BuildingCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const BuildingUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
});

export const BuildingWhereSchema = toWhereQuerySchema(BuildingSchema);

export const BuildingOrderSchema =  toOrderBySchema(BuildingSchema);

export const BuildingSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  rooms: z.boolean().optional(),
});

export const BuildingQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: BuildingWhereSchema.optional(),
  orderBy: BuildingOrderSchema.optional(),
  select: BuildingSelectSchema.optional()
});

export type Building = z.infer<typeof BuildingSchema>;
export type BuildingCreate = z.infer<typeof BuildingCreateSchema>;
export type BuildingUpdate = z.infer<typeof BuildingUpdateSchema>;
export type BuildingWhere = z.infer<typeof BuildingWhereSchema>;
export type BuildingOrder = z.infer<typeof BuildingOrderSchema>;
export type BuildingSelect = z.infer<typeof BuildingSelectSchema>;
export type BuildingQuery = z.infer<typeof BuildingQuerySchema>;




// ---------- Room Schemas ----------


export const RoomSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  buildingId: z.number().int(),
  name: z.string(),
  code: z.string(),
  floor: z.number().int(),
});

export const RoomCreateSchema = z.object({
  buildingId: z.number().int(),
  name: z.string(),
  code: z.string(),
  floor: z.number().int(),
});

export const RoomUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  buildingId: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
  floor: z.number().int().optional(),
});

export const RoomWhereSchema = toWhereQuerySchema(RoomSchema);

export const RoomOrderSchema =  toOrderBySchema(RoomSchema);

export const RoomSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  buildingId: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  floor: z.boolean().optional(),
  building: z.boolean().optional(),
  attributes: z.boolean().optional(),
  quantities: z.boolean().optional(),
  serials: z.boolean().optional(),
  employeeRooms: z.boolean().optional(),
  employeeRoomRequests: z.boolean().optional(),
});

export const RoomQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: RoomWhereSchema.optional(),
  orderBy: RoomOrderSchema.optional(),
  select: RoomSelectSchema.optional()
});

export type Room = z.infer<typeof RoomSchema>;
export type RoomCreate = z.infer<typeof RoomCreateSchema>;
export type RoomUpdate = z.infer<typeof RoomUpdateSchema>;
export type RoomWhere = z.infer<typeof RoomWhereSchema>;
export type RoomOrder = z.infer<typeof RoomOrderSchema>;
export type RoomSelect = z.infer<typeof RoomSelectSchema>;
export type RoomQuery = z.infer<typeof RoomQuerySchema>;




// ---------- Item Schemas ----------


export const ItemSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  categoryId: z.number().int().nullish(),
  name: z.string(),
  description: z.string(),
  quantityTreshold: z.number().int(),
});

export const ItemCreateSchema = z.object({
  categoryId: z.number().int().nullish(),
  name: z.string(),
  description: z.string(),
  quantityTreshold: z.number().int(),
});

export const ItemUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  categoryId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  quantityTreshold: z.number().int().optional(),
});

export const ItemWhereSchema = toWhereQuerySchema(ItemSchema);

export const ItemOrderSchema =  toOrderBySchema(ItemSchema);

export const ItemSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  quantityTreshold: z.boolean().optional(),
  category: z.boolean().optional(),
  attributes: z.boolean().optional(),
  quantities: z.boolean().optional(),
  serials: z.boolean().optional(),
});

export const ItemQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ItemWhereSchema.optional(),
  orderBy: ItemOrderSchema.optional(),
  select: ItemSelectSchema.optional()
});

export type Item = z.infer<typeof ItemSchema>;
export type ItemCreate = z.infer<typeof ItemCreateSchema>;
export type ItemUpdate = z.infer<typeof ItemUpdateSchema>;
export type ItemWhere = z.infer<typeof ItemWhereSchema>;
export type ItemOrder = z.infer<typeof ItemOrderSchema>;
export type ItemSelect = z.infer<typeof ItemSelectSchema>;
export type ItemQuery = z.infer<typeof ItemQuerySchema>;




// ---------- Quantity Schemas ----------


export const QuantitySchema = z.object({
  id: z.number().int(),
  roomId: z.number().int(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  quantityTreshold: z.number().int(),
});

export const QuantityCreateSchema = z.object({
  roomId: z.number().int(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  quantityTreshold: z.number().int(),
});

export const QuantityUpdateSchema = z.object({
  id: z.number().int().optional(),
  roomId: z.number().int().optional(),
  itemId: z.number().int().optional(),
  quantity: z.number().int().optional(),
  quantityTreshold: z.number().int().optional(),
});

export const QuantityWhereSchema = toWhereQuerySchema(QuantitySchema);

export const QuantityOrderSchema =  toOrderBySchema(QuantitySchema);

export const QuantitySelectSchema = z.object({
  id: z.boolean().optional(),
  roomId: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  quantityTreshold: z.boolean().optional(),
  item: z.boolean().optional(),
  room: z.boolean().optional(),
  quantityMoveSources: z.boolean().optional(),
  quantityMoveTargets: z.boolean().optional(),
});

export const QuantityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: QuantityWhereSchema.optional(),
  orderBy: QuantityOrderSchema.optional(),
  select: QuantitySelectSchema.optional()
});

export type Quantity = z.infer<typeof QuantitySchema>;
export type QuantityCreate = z.infer<typeof QuantityCreateSchema>;
export type QuantityUpdate = z.infer<typeof QuantityUpdateSchema>;
export type QuantityWhere = z.infer<typeof QuantityWhereSchema>;
export type QuantityOrder = z.infer<typeof QuantityOrderSchema>;
export type QuantitySelect = z.infer<typeof QuantitySelectSchema>;
export type QuantityQuery = z.infer<typeof QuantityQuerySchema>;




// ---------- SerialNumber Schemas ----------


export const SerialNumberSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  serialNumber: z.string(),
  itemId: z.number().int(),
  roomId: z.number().int(),
});

export const SerialNumberCreateSchema = z.object({
  serialNumber: z.string(),
  itemId: z.number().int(),
  roomId: z.number().int(),
});

export const SerialNumberUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  serialNumber: z.string().optional(),
  itemId: z.number().int().optional(),
  roomId: z.number().int().optional(),
});

export const SerialNumberWhereSchema = toWhereQuerySchema(SerialNumberSchema);

export const SerialNumberOrderSchema =  toOrderBySchema(SerialNumberSchema);

export const SerialNumberSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  serialNumber: z.boolean().optional(),
  itemId: z.boolean().optional(),
  roomId: z.boolean().optional(),
  item: z.boolean().optional(),
  room: z.boolean().optional(),
  serialMoveSources: z.boolean().optional(),
  serialMoveTargets: z.boolean().optional(),
  employeeItemRequests: z.boolean().optional(),
  EmployeeItem: z.boolean().optional(),
});

export const SerialNumberQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SerialNumberWhereSchema.optional(),
  orderBy: SerialNumberOrderSchema.optional(),
  select: SerialNumberSelectSchema.optional()
});

export type SerialNumber = z.infer<typeof SerialNumberSchema>;
export type SerialNumberCreate = z.infer<typeof SerialNumberCreateSchema>;
export type SerialNumberUpdate = z.infer<typeof SerialNumberUpdateSchema>;
export type SerialNumberWhere = z.infer<typeof SerialNumberWhereSchema>;
export type SerialNumberOrder = z.infer<typeof SerialNumberOrderSchema>;
export type SerialNumberSelect = z.infer<typeof SerialNumberSelectSchema>;
export type SerialNumberQuery = z.infer<typeof SerialNumberQuerySchema>;




// ---------- QuantityMoveRequest Schemas ----------


export const QuantityMoveRequestSchema = z.object({
  id: z.number().int(),
  sourceId: z.number().int(),
  targetId: z.number().int(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  quantity: z.number().int(),
  reason: z.string(),
  status: z.any(),
  requestedAt: z.date(),
  approvedAt: z.date().nullish(),
});

export const QuantityMoveRequestCreateSchema = z.object({
  sourceId: z.number().int(),
  targetId: z.number().int(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  quantity: z.number().int(),
  reason: z.string(),
  status: z.any(),
  approvedAt: z.date().nullish(),
});

export const QuantityMoveRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional(),
  targetId: z.number().int().optional(),
  requestedById: z.number().int().optional(),
  approvedById: z.number().int().nullish().optional(),
  quantity: z.number().int().optional(),
  reason: z.string().optional(),
  status: z.any().optional(),
  requestedAt: z.date().optional(),
  approvedAt: z.date().nullish().optional(),
});

export const QuantityMoveRequestWhereSchema = toWhereQuerySchema(QuantityMoveRequestSchema);

export const QuantityMoveRequestOrderSchema =  toOrderBySchema(QuantityMoveRequestSchema);

export const QuantityMoveRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  targetId: z.boolean().optional(),
  requestedById: z.boolean().optional(),
  approvedById: z.boolean().optional(),
  quantity: z.boolean().optional(),
  reason: z.boolean().optional(),
  status: z.boolean().optional(),
  requestedAt: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  source: z.boolean().optional(),
  target: z.boolean().optional(),
  requestedBy: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
});

export const QuantityMoveRequestQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: QuantityMoveRequestWhereSchema.optional(),
  orderBy: QuantityMoveRequestOrderSchema.optional(),
  select: QuantityMoveRequestSelectSchema.optional()
});

export type QuantityMoveRequest = z.infer<typeof QuantityMoveRequestSchema>;
export type QuantityMoveRequestCreate = z.infer<typeof QuantityMoveRequestCreateSchema>;
export type QuantityMoveRequestUpdate = z.infer<typeof QuantityMoveRequestUpdateSchema>;
export type QuantityMoveRequestWhere = z.infer<typeof QuantityMoveRequestWhereSchema>;
export type QuantityMoveRequestOrder = z.infer<typeof QuantityMoveRequestOrderSchema>;
export type QuantityMoveRequestSelect = z.infer<typeof QuantityMoveRequestSelectSchema>;
export type QuantityMoveRequestQuery = z.infer<typeof QuantityMoveRequestQuerySchema>;




// ---------- SerialMoveRequest Schemas ----------


export const SerialMoveRequestSchema = z.object({
  id: z.number().int(),
  sourceId: z.number().int(),
  targetId: z.number().int(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  reason: z.string(),
  status: z.any(),
  requestedAt: z.date(),
  approvedAt: z.date().nullish(),
});

export const SerialMoveRequestCreateSchema = z.object({
  sourceId: z.number().int(),
  targetId: z.number().int(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  reason: z.string(),
  status: z.any(),
  approvedAt: z.date().nullish(),
});

export const SerialMoveRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  sourceId: z.number().int().optional(),
  targetId: z.number().int().optional(),
  requestedById: z.number().int().optional(),
  approvedById: z.number().int().nullish().optional(),
  reason: z.string().optional(),
  status: z.any().optional(),
  requestedAt: z.date().optional(),
  approvedAt: z.date().nullish().optional(),
});

export const SerialMoveRequestWhereSchema = toWhereQuerySchema(SerialMoveRequestSchema);

export const SerialMoveRequestOrderSchema =  toOrderBySchema(SerialMoveRequestSchema);

export const SerialMoveRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  targetId: z.boolean().optional(),
  requestedById: z.boolean().optional(),
  approvedById: z.boolean().optional(),
  reason: z.boolean().optional(),
  status: z.boolean().optional(),
  requestedAt: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  source: z.boolean().optional(),
  target: z.boolean().optional(),
  requestedBy: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
});

export const SerialMoveRequestQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SerialMoveRequestWhereSchema.optional(),
  orderBy: SerialMoveRequestOrderSchema.optional(),
  select: SerialMoveRequestSelectSchema.optional()
});

export type SerialMoveRequest = z.infer<typeof SerialMoveRequestSchema>;
export type SerialMoveRequestCreate = z.infer<typeof SerialMoveRequestCreateSchema>;
export type SerialMoveRequestUpdate = z.infer<typeof SerialMoveRequestUpdateSchema>;
export type SerialMoveRequestWhere = z.infer<typeof SerialMoveRequestWhereSchema>;
export type SerialMoveRequestOrder = z.infer<typeof SerialMoveRequestOrderSchema>;
export type SerialMoveRequestSelect = z.infer<typeof SerialMoveRequestSelectSchema>;
export type SerialMoveRequestQuery = z.infer<typeof SerialMoveRequestQuerySchema>;




// ---------- Employee Schemas ----------


export const EmployeeSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
});

export const EmployeeCreateSchema = z.object({
  uuid: z.string(),
});

export const EmployeeUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
});

export const EmployeeWhereSchema = toWhereQuerySchema(EmployeeSchema);

export const EmployeeOrderSchema =  toOrderBySchema(EmployeeSchema);

export const EmployeeSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  rooms: z.boolean().optional(),
  items: z.boolean().optional(),
  itemRequesters: z.boolean().optional(),
  itemApprovers: z.boolean().optional(),
  roomRequesters: z.boolean().optional(),
  roomApprovers: z.boolean().optional(),
  serialMoveRequesters: z.boolean().optional(),
  serialMoveApprovers: z.boolean().optional(),
  quantityMoveRequesters: z.boolean().optional(),
  quantityMoveApprovers: z.boolean().optional(),
});

export const EmployeeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeWhereSchema.optional(),
  orderBy: EmployeeOrderSchema.optional(),
  select: EmployeeSelectSchema.optional()
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;
export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;
export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;
export type EmployeeOrder = z.infer<typeof EmployeeOrderSchema>;
export type EmployeeSelect = z.infer<typeof EmployeeSelectSchema>;
export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;




// ---------- EmployeeRoom Schemas ----------


export const EmployeeRoomSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  roomId: z.number().int(),
  givenAt: z.date(),
  takenAt: z.date().nullish(),
});

export const EmployeeRoomCreateSchema = z.object({
  employeeId: z.number().int(),
  roomId: z.number().int(),
  takenAt: z.date().nullish(),
});

export const EmployeeRoomUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  roomId: z.number().int().optional(),
  givenAt: z.date().optional(),
  takenAt: z.date().nullish().optional(),
});

export const EmployeeRoomWhereSchema = toWhereQuerySchema(EmployeeRoomSchema);

export const EmployeeRoomOrderSchema =  toOrderBySchema(EmployeeRoomSchema);

export const EmployeeRoomSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  roomId: z.boolean().optional(),
  givenAt: z.boolean().optional(),
  takenAt: z.boolean().optional(),
  room: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const EmployeeRoomQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeRoomWhereSchema.optional(),
  orderBy: EmployeeRoomOrderSchema.optional(),
  select: EmployeeRoomSelectSchema.optional()
});

export type EmployeeRoom = z.infer<typeof EmployeeRoomSchema>;
export type EmployeeRoomCreate = z.infer<typeof EmployeeRoomCreateSchema>;
export type EmployeeRoomUpdate = z.infer<typeof EmployeeRoomUpdateSchema>;
export type EmployeeRoomWhere = z.infer<typeof EmployeeRoomWhereSchema>;
export type EmployeeRoomOrder = z.infer<typeof EmployeeRoomOrderSchema>;
export type EmployeeRoomSelect = z.infer<typeof EmployeeRoomSelectSchema>;
export type EmployeeRoomQuery = z.infer<typeof EmployeeRoomQuerySchema>;




// ---------- EmployeeItem Schemas ----------


export const EmployeeItemSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  serialNumberId: z.number().int(),
  givenAt: z.date(),
  takenAt: z.date().nullish(),
});

export const EmployeeItemCreateSchema = z.object({
  employeeId: z.number().int(),
  serialNumberId: z.number().int(),
  takenAt: z.date().nullish(),
});

export const EmployeeItemUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  serialNumberId: z.number().int().optional(),
  givenAt: z.date().optional(),
  takenAt: z.date().nullish().optional(),
});

export const EmployeeItemWhereSchema = toWhereQuerySchema(EmployeeItemSchema);

export const EmployeeItemOrderSchema =  toOrderBySchema(EmployeeItemSchema);

export const EmployeeItemSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  serialNumberId: z.boolean().optional(),
  givenAt: z.boolean().optional(),
  takenAt: z.boolean().optional(),
  serialNumber: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const EmployeeItemQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeItemWhereSchema.optional(),
  orderBy: EmployeeItemOrderSchema.optional(),
  select: EmployeeItemSelectSchema.optional()
});

export type EmployeeItem = z.infer<typeof EmployeeItemSchema>;
export type EmployeeItemCreate = z.infer<typeof EmployeeItemCreateSchema>;
export type EmployeeItemUpdate = z.infer<typeof EmployeeItemUpdateSchema>;
export type EmployeeItemWhere = z.infer<typeof EmployeeItemWhereSchema>;
export type EmployeeItemOrder = z.infer<typeof EmployeeItemOrderSchema>;
export type EmployeeItemSelect = z.infer<typeof EmployeeItemSelectSchema>;
export type EmployeeItemQuery = z.infer<typeof EmployeeItemQuerySchema>;




// ---------- EmployeeRoomRequest Schemas ----------


export const EmployeeRoomRequestSchema = z.object({
  id: z.number().int(),
  roomId: z.number().int().nullish(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  requestedAt: z.date(),
  approvedAt: z.date().nullish(),
  status: z.any(),
  note: z.string(),
});

export const EmployeeRoomRequestCreateSchema = z.object({
  roomId: z.number().int().nullish(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  approvedAt: z.date().nullish(),
  status: z.any(),
  note: z.string(),
});

export const EmployeeRoomRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  roomId: z.number().int().nullish().optional(),
  requestedById: z.number().int().optional(),
  approvedById: z.number().int().nullish().optional(),
  requestedAt: z.date().optional(),
  approvedAt: z.date().nullish().optional(),
  status: z.any().optional(),
  note: z.string().optional(),
});

export const EmployeeRoomRequestWhereSchema = toWhereQuerySchema(EmployeeRoomRequestSchema);

export const EmployeeRoomRequestOrderSchema =  toOrderBySchema(EmployeeRoomRequestSchema);

export const EmployeeRoomRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  roomId: z.boolean().optional(),
  requestedById: z.boolean().optional(),
  approvedById: z.boolean().optional(),
  requestedAt: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  note: z.boolean().optional(),
  room: z.boolean().optional(),
  requestedBy: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
});

export const EmployeeRoomRequestQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeRoomRequestWhereSchema.optional(),
  orderBy: EmployeeRoomRequestOrderSchema.optional(),
  select: EmployeeRoomRequestSelectSchema.optional()
});

export type EmployeeRoomRequest = z.infer<typeof EmployeeRoomRequestSchema>;
export type EmployeeRoomRequestCreate = z.infer<typeof EmployeeRoomRequestCreateSchema>;
export type EmployeeRoomRequestUpdate = z.infer<typeof EmployeeRoomRequestUpdateSchema>;
export type EmployeeRoomRequestWhere = z.infer<typeof EmployeeRoomRequestWhereSchema>;
export type EmployeeRoomRequestOrder = z.infer<typeof EmployeeRoomRequestOrderSchema>;
export type EmployeeRoomRequestSelect = z.infer<typeof EmployeeRoomRequestSelectSchema>;
export type EmployeeRoomRequestQuery = z.infer<typeof EmployeeRoomRequestQuerySchema>;




// ---------- EmployeeItemRequest Schemas ----------


export const EmployeeItemRequestSchema = z.object({
  id: z.number().int(),
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  requestedAt: z.date(),
  approvedAt: z.date().nullish(),
  serialNumberId: z.number().int().nullish(),
  status: z.any(),
  note: z.string(),
});

export const EmployeeItemRequestCreateSchema = z.object({
  requestedById: z.number().int(),
  approvedById: z.number().int().nullish(),
  approvedAt: z.date().nullish(),
  serialNumberId: z.number().int().nullish(),
  status: z.any(),
  note: z.string(),
});

export const EmployeeItemRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  requestedById: z.number().int().optional(),
  approvedById: z.number().int().nullish().optional(),
  requestedAt: z.date().optional(),
  approvedAt: z.date().nullish().optional(),
  serialNumberId: z.number().int().nullish().optional(),
  status: z.any().optional(),
  note: z.string().optional(),
});

export const EmployeeItemRequestWhereSchema = toWhereQuerySchema(EmployeeItemRequestSchema);

export const EmployeeItemRequestOrderSchema =  toOrderBySchema(EmployeeItemRequestSchema);

export const EmployeeItemRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  requestedById: z.boolean().optional(),
  approvedById: z.boolean().optional(),
  requestedAt: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  serialNumberId: z.boolean().optional(),
  status: z.boolean().optional(),
  note: z.boolean().optional(),
  serialNumber: z.boolean().optional(),
  requestedBy: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
});

export const EmployeeItemRequestQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeItemRequestWhereSchema.optional(),
  orderBy: EmployeeItemRequestOrderSchema.optional(),
  select: EmployeeItemRequestSelectSchema.optional()
});

export type EmployeeItemRequest = z.infer<typeof EmployeeItemRequestSchema>;
export type EmployeeItemRequestCreate = z.infer<typeof EmployeeItemRequestCreateSchema>;
export type EmployeeItemRequestUpdate = z.infer<typeof EmployeeItemRequestUpdateSchema>;
export type EmployeeItemRequestWhere = z.infer<typeof EmployeeItemRequestWhereSchema>;
export type EmployeeItemRequestOrder = z.infer<typeof EmployeeItemRequestOrderSchema>;
export type EmployeeItemRequestSelect = z.infer<typeof EmployeeItemRequestSelectSchema>;
export type EmployeeItemRequestQuery = z.infer<typeof EmployeeItemRequestQuerySchema>;


