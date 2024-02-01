/*
  Warnings:

  - You are about to drop the `Airplanes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Airplanes";

-- CreateTable
CREATE TABLE "Airplane" (
    "id" SERIAL NOT NULL,
    "model_number" TEXT NOT NULL,
    "capacity" INTEGER DEFAULT 500,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" SERIAL NOT NULL,
    "flight_number" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "arrival_time" TIMESTAMP(3) NOT NULL,
    "arrival_airportId" INTEGER NOT NULL,
    "departure_time" TIMESTAMP(3) NOT NULL,
    "departure_airportId" INTEGER NOT NULL,
    "airplane_id" INTEGER NOT NULL,
    "total_seats" INTEGER,
    "boarding_gate" TEXT,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_model_number_key" ON "Airplane"("model_number");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flight_number_key" ON "Flight"("flight_number");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_airplane_id_key" ON "Flight"("airplane_id");

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_airplane_id_fkey" FOREIGN KEY ("airplane_id") REFERENCES "Airplane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
