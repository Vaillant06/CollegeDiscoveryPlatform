/*
  Warnings:

  - Made the column `nirfRanking` on table `College` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "College" ALTER COLUMN "nirfRanking" SET NOT NULL;
