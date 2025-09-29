/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "deletedAt",
ADD COLUMN     "active" BOOLEAN DEFAULT true;

-- CreateTable
CREATE TABLE "public"."Some" (
    "int" INTEGER NOT NULL,
    "num" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "boolean" BOOLEAN NOT NULL,

    CONSTRAINT "Some_pkey" PRIMARY KEY ("int")
);
