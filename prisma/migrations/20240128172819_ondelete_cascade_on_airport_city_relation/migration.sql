-- DropForeignKey
ALTER TABLE "Airport" DROP CONSTRAINT "Airport_cityId_fkey";

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
