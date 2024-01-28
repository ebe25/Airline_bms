/*
  Warnings:

  - The primary key for the `Airport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Airport` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `City` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `cityId` on the `Airport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Airport" DROP CONSTRAINT "Airport_cityId_fkey";

-- AlterTable
ALTER TABLE "Airport" DROP CONSTRAINT "Airport_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "cityId",
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD CONSTRAINT "Airport_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "City" DROP CONSTRAINT "City_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "City_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
