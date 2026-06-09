/*
  Warnings:

  - You are about to drop the column `collegeId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `fees` on the `Course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_collegeId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "collegeId",
DROP COLUMN "fees";

-- CreateTable
CREATE TABLE "_CollegeToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollegeToCourse_AB_unique" ON "_CollegeToCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_CollegeToCourse_B_index" ON "_CollegeToCourse"("B");

-- AddForeignKey
ALTER TABLE "_CollegeToCourse" ADD CONSTRAINT "_CollegeToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToCourse" ADD CONSTRAINT "_CollegeToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
