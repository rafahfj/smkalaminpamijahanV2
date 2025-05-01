import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const driveURL = `https://drive.google.com/uc?export=view&id=${id}`;
    const imageRes = await fetch(driveURL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!imageRes.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch image from Google Drive.",
          status: imageRes.status,
        },
        { status: imageRes.status }
      );
    }
    const buffer = await imageRes.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return NextResponse.json({
      base64: `data:image/jpeg;base64,${base64}`,
    });
  } catch (error) {
    console.error("Fetch image error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
