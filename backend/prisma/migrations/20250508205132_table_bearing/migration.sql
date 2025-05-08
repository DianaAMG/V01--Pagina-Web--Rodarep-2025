-- CreateTable
CREATE TABLE "bearing" (
    "id" TEXT NOT NULL,
    "d__internal" DOUBLE PRECISION NOT NULL,
    "d__external" DOUBLE PRECISION NOT NULL,
    "B__width" DOUBLE PRECISION NOT NULL,
    "code" TEXT,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bearing_pkey" PRIMARY KEY ("id")
);
