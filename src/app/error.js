"use client"
export default function Error({error, reset})
{
    return(
        <div>
            <h1>Something Went Wrong!!!</h1>
            <button onClick={()=> reset()}>Try Again</button>
        </div>
    )
}