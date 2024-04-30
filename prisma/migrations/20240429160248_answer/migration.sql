-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "opgaveId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "questionno" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);
