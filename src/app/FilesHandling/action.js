// // // // ========================= File Uploading and It's validation // // // // =============================
"use server"
import fs from "fs/promises";
import path from "path";
export default async function UploadFile(prevState, formData)
{
    const file = formData.get("file");
    // 1. Check if file is selected or not
    if(!file || file.size===0)
    {
        return "Please Select a File...!!";
    }

    // File Size
    if(file.size > 150 * 1024)
    {
        return "File Size Should not be greater than 50kb";
    }

    // 2. Check File Type
    const allowTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf"
    ];
    if(!allowTypes.includes(file.type))
    {
        return "Only JPEG, PNG and PDF files are allowed...!!";
    }

    // Path of existing Folder
    const filepath = path.join(
        process.cwd(),
        "Uploads",
        file.name
    );

    // Get the files Data
    const bytes = await file.arrayBuffer();

    // Save File
    await fs.writeFile(filepath, Buffer.from(bytes));

    return "File Uploaded SuccessFully";
}