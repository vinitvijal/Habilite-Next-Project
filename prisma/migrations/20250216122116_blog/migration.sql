-- AlterTable
ALTER TABLE "Blogs" ADD COLUMN     "blogActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "blogSlug" TEXT;
