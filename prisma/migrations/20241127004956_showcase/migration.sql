/*
  Warnings:

  - You are about to drop the `consigned` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `provider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "consigned" DROP CONSTRAINT "consigned_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "consigned" DROP CONSTRAINT "consigned_seller_id_fkey";

-- DropTable
DROP TABLE "consigned";

-- DropTable
DROP TABLE "provider";

-- CreateTable
CREATE TABLE "showcases" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data_start" TIMESTAMP(3) NOT NULL,
    "data_end" TIMESTAMP(3) NOT NULL,
    "employee_id" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "seller_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "showcases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "showcases_id_key" ON "showcases"("id");

-- CreateIndex
CREATE UNIQUE INDEX "showcases_seller_id_key" ON "showcases"("seller_id");

-- AddForeignKey
ALTER TABLE "showcases" ADD CONSTRAINT "showcases_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "showcases" ADD CONSTRAINT "showcases_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "showcases" ADD CONSTRAINT "showcases_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
