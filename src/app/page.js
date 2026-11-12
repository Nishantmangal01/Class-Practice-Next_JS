// export const revalidate = 10;

// export default async function Notice() {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );

//     const notice = await response.json();

//     return (
//         <main className="min-h-screen bg-gray-100 p-8">
//             <div className="max-w-xl mx-auto bg-white p-6 rounded-lg">
//                 <h1 className="text-3xl font-bold mb-6 text-black">
//                     College Notice
//                 </h1>

//                 <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
//                     <h2 className="text-xl font-semibold mb-2 text-gray-800 capitalize">
//                         {notice.title}
//                     </h2>

//                     <p className="text-gray-600 leading-relaxed">
//                         {notice.body}
//                     </p>
//                 </div>
//             </div>
//         </main>
//     );
// }


//===========================================================================================================================


// export default function Home() {
//     throw new Error("This is my testing error!");
//     return (
//         <h1>Hello Next.js</h1>
//     );
// }


// ===========================================================================================================================

// Q. Create a next app which is having Home page - welcomes the user create new route by using link - /notification use api to
//  fetch notification on this route
// import Link from "next/link"
// export default function Home()
// {
//     return(
//         <div className="text-center m-5">
//             <h1 className="text-3xl m-5 font-bold p-3">Welcome to Home Page</h1>
//             <Link href="./notification" className="bg-blue-500 m-3 text-white px-5 py-3 rounded-lg">View Notification</Link>
//         </div>
//     )
// }



// ===========================================================================================================================



// "use client"
// import { useState } from "react";
// export default function HOME()
// {
//     const [student, setstudent] = useState("");
//     function handelsubmit(e)
//     {
//         e.preventDefault();
//         const formdata = new FormData(e.target);
//         setstudent({
//             name: formdata.get("name"),
//             city: formdata.get("city"),
//             phone: formdata.get("phone")
//             email: formdata.get("email")
//         });
//     }
//     return(
//         <div className="border p-3 text-3xl border-2 m-5 rounded-3xl bg-gray-700">
//             <h1 className="text-center">FORM</h1>
//             <form onSubmit={handelsubmit}className="border p-3 text-3xl font-bold border-2 m-5 rounded-3xl bg-gray-200">
//                 <label>Name: </label>
//                 <input type="text" name="name" placeholder="Full Name" className="border p-1 m-1 rounded-2xl"/>
//                 <br></br>
//                 <label>City: </label>
//                 <input type="text" name="city" placeholder="City with Pin-code" className="border p-1 m-1 rounded-2xl"/>
//                 <br></br>
//                 <label>Phone: </label>
//                 <input type="number" name="phone" placeholder="Mob.no" className="border p-1 m-1 rounded-2xl"/>
//                 <br></br>
//                 <label>Email: </label>
//                 <input type="email" name="email" placeholder="username@gmail.com" className="border p-1 m-1 rounded-2xl"/>                
//                 <br></br>
//                 <button className="border p-3 m-5 rounded-2xl cursor-pointer bg-green-100"  >Submit</button>
//             </form>
//             {student &&(
//                 <div className="border p-3 mt-5 w-100 bg-white rounded-xl float-">
//                     <h2 className="font-bold">
//                         Student Data
//                     </h2>
//                     <p>Name: {student.name}</p>
//                     <p>City: {student.city}</p>
//                     <p>Phone: {student.phone}</p>
//                     <p>Email: {student.email}</p>
//                 </div>
//             )}
//         </div>
//     )
// }



// ===========================================================================================================================




// "use client"
// import { useActionState } from "react";
// import { greetUser } from "./action";
// export default function Home()
// {
//     const [msg, formaction] = useActionState(
//         greetUser, " "
//     );
//     return(
//         <div>
//             <h1>Server Actions</h1>
//             <form action={formaction} >
//                 <label>Name:</label>
//                 <input type="text" name="name" placeholder="Enter name" />
//                 <button type="submit">Submit</button>
//             </form>
//             <h2>{msg}</h2>
//         </div>
//     );
// }



// "use client";
// import { useActionState } from "react";
// import { LoginPage } from "./action";
// export default function Home() {
//     const [result, formAction] = useActionState(LoginPage, "");
//     return (
//         <div>
//             <h1>Login</h1>
//             <br />
//             <form action={formAction}>
//                 <label>Name: </label>
//                 <input type="text" name="name" placeholder="Enter User Name"/>
//                 <br />
//                 <br />
//                 <label>Pass: </label>
//                 <input type="password" name="pass" placeholder="Enter User Password"/>
//                 <br />
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//             <h3>{result}</h3>
//         </div>
//     );
// }



// "use client"
// import { useState } from "react";
// export default function Email()
// {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [error, seterror] = useState("");
//     function handleevent(e)
//     {
//         e.preventDefault();
//         if(name === "" || email === "")
//             {
//                 seterror("All feilds are required");
//                 return;
//             }
//         if(!email.includes("@"))
//         {
//             seterror("Enter Valid Email");
//         }
//     }
//     return(
        // <div>
        //     <h1>Registration Form</h1>
        //     <br/>
        //     <br/>
        //     <form onSubmit={handleevent}>
        //         <label>Name: </label>
        //         <input placeholder="Enter Name" type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        //         <br/>
        //         <br/>
        //         <label>Email: </label>
        //         <input placeholder="Enter Email" type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        //         <button type="submit">Submit</button>
        //     </form>
        //     {error && <p>{error}</p>}
        // </div>
//     );
// }


// Q. Create an application form for literature club. Form should include name, registration no, email, section, department.
//    Apply validation that all the feilds are compulsory.
// "use client"
// import { useState } from "react";
// export default function Home()
// {
//     const [name, setname] = useState("");
//     const [reg, setreg] = useState("");
//     const [email, setemail] = useState("");
//     const [section, setsection] = useState("");
//     const [department, setdepartment] = useState("");
//     const [error, seterror] = useState("");
//     function handleevent(e)
//     {
//         e.preventDefault();
//         if(name === "" || reg === "" || email === "" || section === "" || department === "")
//         {
//             seterror("All feilds are required");
//             return;
//         }
//     }
//     return(
//         <div>
//             <h1 className="text-center font-bold text-xl">Literature Club Registration Form</h1>
//             <br/>
//             <br/>
//             <form onSubmit={handleevent}>
//                 <label>Name: </label>
//                 <input placeholder="Enter Name" type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
//                 <br/>
//                 <br/>
//                 <label>Reg No: </label>
//                 <input placeholder="Enter Registration No" type="number" value={reg} onChange={(e)=>{setreg(e.target.value)}}/>
//                 <br/>
//                 <br/>
//                 <label>Section: </label>
//                 <input placeholder="Enter Section" type="text" value={section} onChange={(e)=>{setsection(e.target.value)}}/>
//                 <br/>
//                 <br/>
//                 <label>Department: </label>
//                 <input placeholder="Enter Department" type="text" value={department} onChange={(e)=>{setdepartment(e.target.value)}}/>
//                 <br/>
//                 <br/>
//                 <label>Email: </label>
//                 <input placeholder="Enter Email" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
//                 <br/>
//                 <button type="submit">Submit</button>
//             </form>
//             {error && <p>{error}</p>}
//         </div>
//     );
// }




// // // // ================================ Session Management =======================================
// "use client";
// import { useRouter } from "next/navigation";
// export default function Home() {
//     const router = useRouter();
//     async function Login() {
//         const response = await fetch("/api/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: "ABC"
//             })
//         });
//         if (response.ok) {
//             router.push("/dashboard");
//         }
//     }
//     return (
//         <div>
//             <h1 className="font-bold text-3xl m-3 p-3">Login Page</h1>
//             <button className="cursor-pointer rounded-l border-2 m-3 p-3" type="button" onClick={Login}>
//                 Click Login
//             </button>
//         </div>
//     );
// }


// import { Login } from "./action";
// export default function Home()
// {
//         return(
//                 <div>
//                         <h1>Login Page</h1>
//                         <form action={Login}>
//                                 <label>User: </label>
//                                 <input type="text" name="username" placeholder="Enter user name" required />
//                                 <button type="submit">Login</button>
//                         </form>
//                 </div>
//         );
// }