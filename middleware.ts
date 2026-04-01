import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Google Search Console HTML file verification — must match the downloaded file body exactly. */
const GSC_VERIFICATION_BODY = "google-site-verification: google6cb019bd442ec90b.html";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/google6cb019bd442ec90b.html") {
    return new NextResponse(`${GSC_VERIFICATION_BODY}\n`, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/google6cb019bd442ec90b.html",
};
