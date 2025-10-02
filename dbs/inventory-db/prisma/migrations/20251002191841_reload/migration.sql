/*
  Warnings:

  - Added the required column `symbol` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Unit" ADD COLUMN     "symbol" TEXT NOT NULL;
