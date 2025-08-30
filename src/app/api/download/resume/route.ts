import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.findFirst({ where: { name: "김의현" } });

  const res = await fetch(user?.resumeUrl || "");
  const buffer = await res.arrayBuffer();

  return new NextResponse(Buffer.from(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent("김의현_이력서.pdf")}`,
    },
  });
}
