-- CreateEnum
CREATE TYPE "public"."ProjectType" AS ENUM ('Company', 'Team', 'Personal');

-- CreateEnum
CREATE TYPE "public"."SkillCategory" AS ENUM ('Frontend', 'Backend', 'Database', 'Others');

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "descriptions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "technologies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "image" TEXT,
    "githubUrl" TEXT,
    "liveUrl" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProjectInfo" (
    "id" TEXT NOT NULL,
    "type" "public"."ProjectType" NOT NULL,
    "name" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "members" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ProjectInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaskItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "solutions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "achievements" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "projectId" TEXT NOT NULL,

    CONSTRAINT "TaskItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Skill" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "category" "public"."SkillCategory" NOT NULL,
    "iconUrl" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "linkedin" TEXT,
    "blog" TEXT,
    "github" TEXT,
    "profileImageUrl" TEXT,
    "resumeUrl" TEXT,
    "workExperienceUrl" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "public"."Project"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectInfo_projectId_key" ON "public"."ProjectInfo"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "public"."Skill"("name");

-- AddForeignKey
ALTER TABLE "public"."ProjectInfo" ADD CONSTRAINT "ProjectInfo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TaskItem" ADD CONSTRAINT "TaskItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
