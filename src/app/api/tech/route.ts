import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryDir = path.join(process.cwd(), "public", "gallery", "Tech Projects");
  try {
    const files = fs.readdirSync(galleryDir).filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));
    return NextResponse.json(files);
  } catch {
    return NextResponse.json([]);
  }
}
