"use client"
import { useState } from "react"
import { useEffect } from "react"
export default function Home()
{
    useEffect(()=>{
        console.log("Component Included")
    }, [])
    const [count, setCount] = useState(0);
    return(
        <div className="p-10 text-center bg-sky-900 border-black border-2 m-5">
            <h1 className="text-3xl font-bold m-6">
                useState and useEffect
            </h1>
            <p className="text-xl mb-4">
                Count: {count}
            </p>
            <button
                onClick={() => setCount(count + 1)}
                className="px-5 py-2 bg-blue-500 text-white rounded-lg">
                Increase
            </button>
            <button
                onClick={() => setCount(count - 1)}
                className="ml-3 px-5 py-2 bg-red-500 text-white rounded-lg">
                Decrease
            </button>
        </div>
    )
}
