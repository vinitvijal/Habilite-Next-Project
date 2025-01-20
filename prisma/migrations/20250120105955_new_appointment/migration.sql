/*
  Warnings:

  - You are about to drop the column `appointFName` on the `bookAppointment` table. All the data in the column will be lost.
  - You are about to drop the column `appointLName` on the `bookAppointment` table. All the data in the column will be lost.
  - You are about to drop the column `appointRemark` on the `bookAppointment` table. All the data in the column will be lost.
  - Made the column `appointStatus` on table `bookAppointment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bookAppointment" DROP COLUMN "appointFName",
DROP COLUMN "appointLName",
DROP COLUMN "appointRemark",
ADD COLUMN     "allotedDate" TEXT,
ADD COLUMN     "allotedRemark" TEXT,
ADD COLUMN     "allotedTime" TEXT,
ADD COLUMN     "allotedType" TEXT,
ADD COLUMN     "appointName" TEXT,
ALTER COLUMN "appointPhone" DROP NOT NULL,
ALTER COLUMN "appointEmail" DROP NOT NULL,
ALTER COLUMN "appointStatus" SET NOT NULL,
ALTER COLUMN "appointStatus" SET DEFAULT 'Not Marked';
