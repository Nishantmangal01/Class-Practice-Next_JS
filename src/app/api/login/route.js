import { NextResponse } from "next/server";
export async function POST(request)
{
    const { username } = await request.json();
    const response = NextResponse.json({
        message: "Login Successful...!"
    });
    response.cookies.set("username" , username,{
        httpOnly: true,
        path: "/",
        maxAge: 60*60,
    });
    return response;
}