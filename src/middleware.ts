import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname and search parameters from the request URL
  const { pathname, searchParams } = new URL(request.url);
  console.log("pathname: ",pathname)
  console.log("searchParams: ",searchParams)

  // Check if the pathname is '/libraries' and if the 'something' query parameter exists
  if (pathname === "/libraries" && searchParams.has("something", "hello")) {

    // Create a new URL for the redirect
    const redirectUrl = new URL(request.url);

    // Update the 'something' query parameter to 'anything'
    redirectUrl.searchParams.delete("something", "hello");

    redirectUrl.searchParams.set("anything", "hello");

    // Redirect to the updated URL
    return NextResponse.redirect(redirectUrl);
  }

  // If the conditions are not met, proceed as normal
  return NextResponse.next();
}

// Apply the middleware only to the libraries path
export const config = {
  matcher: "/libraries",
};
