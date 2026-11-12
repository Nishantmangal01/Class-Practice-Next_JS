import { NextResponse } from "next/server";
export async function POST(request)
{
    const response = NextResponse.redirect(
        new URL("/", request.url),303
    );
    response.cookies.set("username", "", {
        httpOnly : true,
        path : "/",
        maxAge : 0,
    });
    return response;
}