
// // //=============================================================
// Code to Upload files in input tag using FS module
// "use server"
// import fs from "fs/promises";
// import path from "path";
// export async function UploadFiles(formdata)
// {
//     const file = formdata.get("file");
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const filepath = path.join("uploads", file.name);
//     await fs.writeFile(filepath, buffer);
//     return "File Uploaded Successfully";
// }
// // // ============================================================

