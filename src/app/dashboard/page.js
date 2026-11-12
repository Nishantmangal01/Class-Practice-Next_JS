// // // // ======================================== Session Management ======================================================
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// export default async function Dashboard()
// {
//     const cookiesStore = await cookies();
//     const username = cookiesStore.get("username")?.value;
//     if(!username)
//     {
//         redirect("/");
//     }
//     return(
//         <div>
//             <h1 className="font-bold text-3xl m-5 p-5">Welcome, {username}</h1>
//             <form action="/api/logout" method="POST">
//                 <button className="cursor-pointer rounded-l border-2 m-3 p-3" type="submit"> Logout </button>
//             </form>
//         </div>
//     )
// }





import { getsession, Logout } from "../action";
import { redirect } from "next/navigation";
export default async function Dashboard()
{
    const username = await getsession();
    if(!username)
    {
        redirect("/");
    }
    return(
        <div>
            <h1>User Dashboard</h1>
            <h2>Welcome, {username}</h2>
            <form action={Logout}>
                <button type="submit"> Logout </button>
            </form>
        </div>
    )
}