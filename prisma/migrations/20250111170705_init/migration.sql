-- CreateTable
CREATE TABLE "Admin" (
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Blogs" (
    "blogID" TEXT NOT NULL,
    "blogTitle" TEXT NOT NULL,
    "blogDescription" TEXT NOT NULL,
    "blogDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "blogAuthor" TEXT NOT NULL,
    "blogContent" TEXT NOT NULL,
    "blogTags" TEXT[],

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("blogID")
);

-- CreateTable
CREATE TABLE "Testimonials" (
    "TesID" TEXT NOT NULL,
    "TesAuthor" TEXT NOT NULL,
    "TesOccupation" TEXT,
    "TesContent" TEXT NOT NULL,
    "TesUpdate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("TesID")
);

-- CreateTable
CREATE TABLE "bookAppointment" (
    "appointId" TEXT NOT NULL,
    "appointFName" TEXT NOT NULL,
    "appointLName" TEXT,
    "appointPhone" TEXT NOT NULL,
    "appointEmail" TEXT NOT NULL,
    "appointQuery" TEXT NOT NULL,
    "appointDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "appointRemark" TEXT,
    "appointStatus" TEXT,

    CONSTRAINT "bookAppointment_pkey" PRIMARY KEY ("appointId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userName_key" ON "Admin"("userName");
