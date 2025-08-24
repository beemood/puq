-- AlterTable
CREATE SEQUENCE "public".category_id_seq;
ALTER TABLE "public"."Category" ALTER COLUMN "id" SET DEFAULT nextval('"public".category_id_seq');
ALTER SEQUENCE "public".category_id_seq OWNED BY "public"."Category"."id";

-- AlterTable
CREATE SEQUENCE "public".product_id_seq;
ALTER TABLE "public"."Product" ALTER COLUMN "id" SET DEFAULT nextval('"public".product_id_seq');
ALTER SEQUENCE "public".product_id_seq OWNED BY "public"."Product"."id";
