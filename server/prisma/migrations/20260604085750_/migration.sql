/*
  Warnings:

  - The primary key for the `_CollegeToExam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_CollegeToExam` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownership` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "ownership" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "_CollegeToExam" DROP CONSTRAINT "_CollegeToExam_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_CollegeToExam_AB_unique" ON "_CollegeToExam"("A", "B");
