-- CreateEnum
CREATE TYPE "public"."DiscountType" AS ENUM ('PERCENT', 'FIXED_AMOUNT', 'BOGO');

-- CreateTable
CREATE TABLE "public"."Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "departmentId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "warrantyId" INTEGER,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Supplier" (
    "id" SERIAL NOT NULL,
    "paymentTermId" INTEGER,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductSupplier" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "supplierSku" TEXT NOT NULL,
    "supplierCost" DECIMAL(65,30),
    "leadTimeDays" INTEGER,

    CONSTRAINT "ProductSupplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SupplierContact" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "externalContactId" TEXT NOT NULL,

    CONSTRAINT "SupplierContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaymentTerm" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "daysDue" INTEGER NOT NULL,
    "discountDays" INTEGER NOT NULL,
    "discountPercent" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PaymentTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductCategory" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Variant" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "warrantyId" INTEGER,
    "sku" TEXT NOT NULL,
    "upc" TEXT NOT NULL,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Attribute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AttributeValue" (
    "id" SERIAL NOT NULL,
    "variantId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "AttributeValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PriceLevel" (
    "id" SERIAL NOT NULL,
    "currencyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "taxrate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PriceLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Price" (
    "id" SERIAL NOT NULL,
    "variantId" INTEGER NOT NULL,
    "priceLevelId" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Quantity" (
    "id" SERIAL NOT NULL,
    "variantId" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "alertThreshold" INTEGER,

    CONSTRAINT "Quantity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SerialNumber" (
    "id" SERIAL NOT NULL,
    "variantId" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,

    CONSTRAINT "SerialNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Discount" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "type" "public"."DiscountType" NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "minQuantity" INTEGER,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "maxUses" INTEGER,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DiscountTarget" (
    "id" SERIAL NOT NULL,
    "discountId" INTEGER NOT NULL,
    "productId" INTEGER,
    "variantId" INTEGER,
    "storeId" INTEGER,
    "priceLevelId" INTEGER,

    CONSTRAINT "DiscountTarget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Store" (
    "id" SERIAL NOT NULL,
    "priceLevelId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WarrantyPolicy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "durationDays" INTEGER NOT NULL,

    CONSTRAINT "WarrantyPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "public"."Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_slug_key" ON "public"."Department"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "public"."Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_uuid_key" ON "public"."Product"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "public"."Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "public"."Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_uuid_key" ON "public"."Supplier"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_name_key" ON "public"."Supplier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSupplier_productId_supplierId_key" ON "public"."ProductSupplier"("productId", "supplierId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentTerm_code_key" ON "public"."PaymentTerm"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_uuid_key" ON "public"."Variant"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_sku_key" ON "public"."Variant"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_upc_key" ON "public"."Variant"("upc");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_name_key" ON "public"."Currency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PriceLevel_name_key" ON "public"."PriceLevel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Quantity_variantId_storeId_key" ON "public"."Quantity"("variantId", "storeId");

-- CreateIndex
CREATE UNIQUE INDEX "SerialNumber_serialNumber_key" ON "public"."SerialNumber"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_code_key" ON "public"."Discount"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "public"."Store"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WarrantyPolicy_name_key" ON "public"."WarrantyPolicy"("name");

-- AddForeignKey
ALTER TABLE "public"."Category" ADD CONSTRAINT "Category_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_warrantyId_fkey" FOREIGN KEY ("warrantyId") REFERENCES "public"."WarrantyPolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Supplier" ADD CONSTRAINT "Supplier_paymentTermId_fkey" FOREIGN KEY ("paymentTermId") REFERENCES "public"."PaymentTerm"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductSupplier" ADD CONSTRAINT "ProductSupplier_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductSupplier" ADD CONSTRAINT "ProductSupplier_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "public"."Supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SupplierContact" ADD CONSTRAINT "SupplierContact_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "public"."Supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductCategory" ADD CONSTRAINT "ProductCategory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductCategory" ADD CONSTRAINT "ProductCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Variant" ADD CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Variant" ADD CONSTRAINT "Variant_warrantyId_fkey" FOREIGN KEY ("warrantyId") REFERENCES "public"."WarrantyPolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AttributeValue" ADD CONSTRAINT "AttributeValue_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "public"."Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AttributeValue" ADD CONSTRAINT "AttributeValue_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "public"."Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PriceLevel" ADD CONSTRAINT "PriceLevel_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "public"."Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Price" ADD CONSTRAINT "Price_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "public"."Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Price" ADD CONSTRAINT "Price_priceLevelId_fkey" FOREIGN KEY ("priceLevelId") REFERENCES "public"."PriceLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Quantity" ADD CONSTRAINT "Quantity_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "public"."Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Quantity" ADD CONSTRAINT "Quantity_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialNumber" ADD CONSTRAINT "SerialNumber_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "public"."Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SerialNumber" ADD CONSTRAINT "SerialNumber_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscountTarget" ADD CONSTRAINT "DiscountTarget_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "public"."Discount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscountTarget" ADD CONSTRAINT "DiscountTarget_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscountTarget" ADD CONSTRAINT "DiscountTarget_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "public"."Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscountTarget" ADD CONSTRAINT "DiscountTarget_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DiscountTarget" ADD CONSTRAINT "DiscountTarget_priceLevelId_fkey" FOREIGN KEY ("priceLevelId") REFERENCES "public"."PriceLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Store" ADD CONSTRAINT "Store_priceLevelId_fkey" FOREIGN KEY ("priceLevelId") REFERENCES "public"."PriceLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
