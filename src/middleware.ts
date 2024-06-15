import {
  type ClerkMiddlewareAuth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { type NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(
  (auth: ClerkMiddlewareAuth, request: NextRequest): void => {
    if (isProtectedRoute(request)) auth().protect();
  },
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
