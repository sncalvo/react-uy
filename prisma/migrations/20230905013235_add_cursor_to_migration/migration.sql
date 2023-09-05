/*
  Warnings:

  - A unique constraint covering the columns `[cursor]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "cursor" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Event_cursor_key" ON "Event"("cursor");
