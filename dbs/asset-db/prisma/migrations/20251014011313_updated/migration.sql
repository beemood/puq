-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELED');

-- CreateTable
CREATE TABLE "public"."RoomAttribute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RoomAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RoomAttributeValue" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "RoomAttributeValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemAttribute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemAttributeValue" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ItemAttributeValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Building" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Room" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "buildingId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "floor" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "categoryId" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT 'No Description',
    "minQuantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Quantity" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "minQuantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Quantity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SerialNumber" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "SerialNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QuantityMoveRequest" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "targetId" INTEGER NOT NULL,
    "requestedById" INTEGER NOT NULL,
    "resolvedById" INTEGER,
    "quantity" INTEGER NOT NULL,
    "reason" TEXT NOT NULL DEFAULT 'Not mentioned',
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "QuantityMoveRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SerialMoveRequest" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "targetId" INTEGER NOT NULL,
    "requestedById" INTEGER NOT NULL,
    "resolvedById" INTEGER,
    "reason" TEXT NOT NULL DEFAULT 'Not mentioned',
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "SerialMoveRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeRoom" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "givenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "takenAt" TIMESTAMP(3),

    CONSTRAINT "EmployeeRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeItem" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "serialNumberId" INTEGER NOT NULL,
    "givenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "takenAt" TIMESTAMP(3),

    CONSTRAINT "EmployeeItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeRoomRequest" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER,
    "requestedById" INTEGER NOT NULL,
    "resolvedById" INTEGER,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "note" TEXT,

    CONSTRAINT "EmployeeRoomRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeItemRequest" (
    "id" SERIAL NOT NULL,
    "requestedById" INTEGER NOT NULL,
    "resolvedById" INTEGER,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "serialNumberId" INTEGER,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "note" TEXT,

    CONSTRAINT "EmployeeItemRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoomAttribute_name_key" ON "public"."RoomAttribute"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RoomAttributeValue_roomId_attributeId_key" ON "public"."RoomAttributeValue"("roomId", "attributeId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemAttribute_name_key" ON "public"."ItemAttribute"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ItemAttributeValue_itemId_attributeId_key" ON "public"."ItemAttributeValue"("itemId", "attributeId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Building_name_key" ON "public"."Building"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Building_code_key" ON "public"."Building"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Room_uuid_key" ON "public"."Room"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Room_name_key" ON "public"."Room"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Room_code_key" ON "public"."Room"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Item_uuid_key" ON "public"."Item"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "public"."Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Quantity_roomId_itemId_key" ON "public"."Quantity"("roomId", "itemId");

-- CreateIndex
CREATE UNIQUE INDEX "SerialNumber_uuid_key" ON "public"."SerialNumber"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "SerialNumber_serialNumber_key" ON "public"."SerialNumber"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uuid_key" ON "public"."Employee"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeRoom_employeeId_roomId_givenAt_key" ON "public"."EmployeeRoom"("employeeId", "roomId", "givenAt");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeItem_employeeId_serialNumberId_givenAt_key" ON "public"."EmployeeItem"("employeeId", "serialNumberId", "givenAt");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeRoomRequest_requestedById_roomId_key" ON "public"."EmployeeRoomRequest"("requestedById", "roomId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeItemRequest_requestedById_serialNumberId_key" ON "public"."EmployeeItemRequest"("requestedById", "serialNumberId");

-- AddForeignKey
ALTER TABLE "public"."RoomAttributeValue" ADD CONSTRAINT "RoomAttributeValue_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "public"."RoomAttribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RoomAttributeValue" ADD CONSTRAINT "RoomAttributeValue_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemAttributeValue" ADD CONSTRAINT "ItemAttributeValue_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "public"."ItemAttribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemAttributeValue" ADD CONSTRAINT "ItemAttributeValue_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Room" ADD CONSTRAINT "Room_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "public"."Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Quantity" ADD CONSTRAINT "Quantity_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Quantity" ADD CONSTRAINT "Quantity_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialNumber" ADD CONSTRAINT "SerialNumber_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialNumber" ADD CONSTRAINT "SerialNumber_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuantityMoveRequest" ADD CONSTRAINT "QuantityMoveRequest_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "public"."Quantity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuantityMoveRequest" ADD CONSTRAINT "QuantityMoveRequest_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "public"."Quantity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuantityMoveRequest" ADD CONSTRAINT "QuantityMoveRequest_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuantityMoveRequest" ADD CONSTRAINT "QuantityMoveRequest_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialMoveRequest" ADD CONSTRAINT "SerialMoveRequest_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "public"."SerialNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialMoveRequest" ADD CONSTRAINT "SerialMoveRequest_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "public"."SerialNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialMoveRequest" ADD CONSTRAINT "SerialMoveRequest_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialMoveRequest" ADD CONSTRAINT "SerialMoveRequest_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeRoom" ADD CONSTRAINT "EmployeeRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeRoom" ADD CONSTRAINT "EmployeeRoom_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeItem" ADD CONSTRAINT "EmployeeItem_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."SerialNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeItem" ADD CONSTRAINT "EmployeeItem_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeRoomRequest" ADD CONSTRAINT "EmployeeRoomRequest_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeRoomRequest" ADD CONSTRAINT "EmployeeRoomRequest_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeRoomRequest" ADD CONSTRAINT "EmployeeRoomRequest_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeItemRequest" ADD CONSTRAINT "EmployeeItemRequest_serialNumberId_fkey" FOREIGN KEY ("serialNumberId") REFERENCES "public"."SerialNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeItemRequest" ADD CONSTRAINT "EmployeeItemRequest_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeItemRequest" ADD CONSTRAINT "EmployeeItemRequest_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
