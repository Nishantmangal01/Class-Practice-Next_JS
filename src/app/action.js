// "use server"
// export async function greetUser(prevstate, formdata)
// {
//     const name = formdata.get("name");
//     return `Hello, ${name}`;
// }


// "use server"
// export default function LoginPage(prevstate, formdata)
// {
//     const userName = formdata.get("name");
//     const userPass = formdata.get("pass");
//     if(userName === "admin" && userPass === 1234)
//     {
//         return "Login Successful";
//     }
//     return "Invalid Username or Password";






// // // // ========================== Session Management =============================== 
"use server";
import { redirect } from "next/navigation";
const session = new Map();
export async function Login(formdata) {
    const username = formdata.get("username");
    redirect("/dashboard");
}
export async function Logout(){
    session.delete("session1");
    redirect("/");
}
export async function getsession() {
    return sessionStorage.get("session1");
}