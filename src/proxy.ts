import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.method !== "POST") return NextResponse.next();

  const actionId = request.headers.get("next-action");

  // Block POST requests with no action ID or the all-zeros null ID —
  // these come from bots, scanners, or stale clients after a rebuild.
  // Returning 400 immediately prevents Next.js from throwing
  // "Failed to find Server Action" noise in the logs.
  if (!actionId || /^0+$/.test(actionId)) {
    return new NextResponse(null, { status: 400 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply to all page routes; skip static assets and Next internals
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
