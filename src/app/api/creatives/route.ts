import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const creativesDir = path.join(process.cwd(), "public", "gallery", "Creatives");
    if (!fs.existsSync(creativesDir)) {
      return NextResponse.json([]);
    }
    const files = fs.readdirSync(creativesDir);
    // Filter for common image extensions
    const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error reading creatives directory:", error);
    return NextResponse.json([]);
  }
}
