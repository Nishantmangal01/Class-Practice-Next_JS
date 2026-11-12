"use client"
import { useActionState } from "react";
import  UploadFile  from "./action";
export default function Files()
{
    const[message, formAction] = useActionState(
        UploadFile, ""
    );
    return(
        <div>
            <h1>File Uploading Example</h1>
            <form action={formAction}>
                <input type="file" name="file" />
                <br/>
                <button type="submit">Upload</button>
            </form>
            <p>{message}</p>
        </div>
    );
}