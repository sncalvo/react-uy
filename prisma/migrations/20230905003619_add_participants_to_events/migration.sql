-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "defaultLink" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "twitterLink" TEXT NOT NULL,
    "linkedLink" TEXT NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToParticipant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToParticipant_AB_unique" ON "_EventToParticipant"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToParticipant_B_index" ON "_EventToParticipant"("B");

-- AddForeignKey
ALTER TABLE "_EventToParticipant" ADD CONSTRAINT "_EventToParticipant_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToParticipant" ADD CONSTRAINT "_EventToParticipant_B_fkey" FOREIGN KEY ("B") REFERENCES "Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
