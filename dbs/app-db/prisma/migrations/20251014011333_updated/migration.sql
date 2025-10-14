-- CreateTable
CREATE TABLE "public"."App" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "version" TEXT,
    "host" TEXT NOT NULL,
    "port" TEXT NOT NULL,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Secret" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "version" TEXT NOT NULL,
    "secret" TEXT NOT NULL,

    CONSTRAINT "Secret_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AppHistory" (
    "id" SERIAL NOT NULL,
    "appId" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stopeedAt" TIMESTAMP(3),

    CONSTRAINT "AppHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "App_name_key" ON "public"."App"("name");

-- CreateIndex
CREATE UNIQUE INDEX "App_host_port_key" ON "public"."App"("host", "port");

-- AddForeignKey
ALTER TABLE "public"."AppHistory" ADD CONSTRAINT "AppHistory_appId_fkey" FOREIGN KEY ("appId") REFERENCES "public"."App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
