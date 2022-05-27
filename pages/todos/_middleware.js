import { NextResponse as response } from "next/server";

export function middleware(req) {
  const token = req.cookies["_token"];
  if (!token) {
    return response.redirect(`${process.env.NEXT_PUBLIC_BASE_URI}`);
  }
  console.log("welcome to the todoes page");
}
