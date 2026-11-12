"use client"
import { useEffect } from "react"
export default function Home()
{
    useEffect(()=>{
        document.title = "My Website"
    },[])
    return(
        <div className="p-10 text-center">
            <h1 className="text-3xl font-bold">useEffect Rendering</h1>
        </div>
    )
}