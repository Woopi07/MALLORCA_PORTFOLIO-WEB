import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const techDir = path.join(process.cwd(), "public", "gallery", "Tech Projects");
    if (!fs.existsSync(techDir)) {
      return NextResponse.json([]);
    }
    const files = fs.readdirSync(techDir);
    // Filter for common image extensions
    const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error reading tech projects directory:", error);
    return NextResponse.json([]);
  }
}
