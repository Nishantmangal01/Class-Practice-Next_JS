let student = [
    {
        id : 1,
        name : "ABC",
        age : 20,
        course : "NEXTJS"
    },
    {
        id : 2,
        name : "XYZ",
        age : 22,
        course : "REACTJS"
        
    },
    {
        id : 3,
        name : "PQR",
        age : 24,
        course : "NODEJS"
    }
];
// GET - Get details or fetch data.
export function GET()
{
    return Response.json(student);
}

// POST - Adding new entry or creating new data.
export async function POST(request)
{
    const data = await request.json();
    const newStudent = {
        id : student.length +1,
        name : data.name,
        age : data.age,
        course : data.course
    };
    student.push(newStudent);
    return Response.json(newStudent);
};

// PUT - To Update the Data.
export async function PUT(request)
{
    const data = await request.json();
    const findstudent = student.find(
        student => student.id === data.id
    );
    if(!findstudent)
    {
        return Response.json(
            {message : "Student Not found"},
            {status : 404}
        )
    }
    findstudent.name = data.name;
    findstudent.age = data.age;
    return Response.json(student);
}


// Delete - Remove exesting data from the server
export async function DELETE(request)
{
    const data = await request.json();
    const studentExists = student.some(
        student => student.id === data.id
    );
    if(!studentExists)
    {
        return Response.json(
            {message : "Student Not Found"},
            {status : 404}
        )
    }
    student = student.filter(
        student => student.id !== data.id
    );
    return Response.json(
        {message : "Student Deleated Successfully"}
    );
}