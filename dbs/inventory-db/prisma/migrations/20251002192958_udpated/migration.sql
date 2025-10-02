-- AlterTable
ALTER TABLE "public"."Attribute" ADD COLUMN     "categoryId" INTEGER,
ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "public"."AttributeCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "AttributeCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttributeCategory_name_key" ON "public"."AttributeCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AttributeCategory_slug_key" ON "public"."AttributeCategory"("slug");

-- AddForeignKey
ALTER TABLE "public"."Attribute" ADD CONSTRAINT "Attribute_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."AttributeCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
