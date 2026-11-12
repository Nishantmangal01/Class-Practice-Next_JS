import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";

let students = {
    1: "Nishant",
    2: "Arush",
    3: "Mangal"
};

// // GET
// export async function GET(request, { params }) 
// {
//     const { id } = await params;
//     return Response.json({
//         id: id,
//         name: students[id]
//     });
// }


// POST
export async function POST(request, { params })
{
    const { id } = await params;
    const data = await request.json();
    students[id] = data.name;
    return Response.json({
        message: "Student Added",
        id: id,
        name: data.name
    });
}