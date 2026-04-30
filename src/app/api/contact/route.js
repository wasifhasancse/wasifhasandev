import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
