-- CreateEnum
CREATE TYPE "CandidateType" AS ENUM ('OFFER', 'ANSWER');

-- CreateTable
CREATE TABLE "IceCandidate" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "candidate" TEXT NOT NULL,
    "type" "CandidateType" NOT NULL,

    CONSTRAINT "IceCandidate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IceCandidate" ADD CONSTRAINT "IceCandidate_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
