import { NextResponse } from "next/server";

/**
 * Dev-only stand-in for Netlify Forms POST to `public/__forms.html`.
 * Production still uses `/__forms.html` on Netlify; `next dev` serves static files as GET-only.
 */
export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/x-www-form-urlencoded")) {
    return NextResponse.json({ error: "Unsupported content type" }, { status: 415 });
  }

  await request.text();
  return NextResponse.json({ ok: true });
}
