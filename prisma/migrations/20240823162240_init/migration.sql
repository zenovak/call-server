-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL,
    "sdpOffer" TEXT,
    "sdpAnswer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
