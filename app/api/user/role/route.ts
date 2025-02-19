import { getUserRole } from "@/app/actions/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = Number(url.searchParams.get("userId"));

    if (!userId) {
      return NextResponse.json({ error: "User ID is required." }, { status: 400 });
    }

    const role = await getUserRole(userId);

    return NextResponse.json({ role });
  } catch {
    return NextResponse.json({ error: "Failed to fetch role." }, { status: 400 });
  }
}
