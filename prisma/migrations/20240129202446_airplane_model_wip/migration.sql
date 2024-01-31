-- CreateTable
CREATE TABLE "Airplanes" (
    "id" SERIAL NOT NULL,
    "model_number" TEXT NOT NULL,
    "capacity" INTEGER DEFAULT 500,

    CONSTRAINT "Airplanes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airplanes_model_number_key" ON "Airplanes"("model_number");
