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
//             phone: formdata.get("phone"),
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
//                 <div className="border p-3 mt-5 w-100 bg-white rounded-xl ">
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

//==================================================================================================================================

// "use client"
// import { useState } from "react";
// export default function Home() {
//     const [form, setform] = useState("");
//     function handelsubmit(e) {
//         e.preventDefault();
//         const formdata = new FormData(e.target);
//         setform({
//             name: formdata.get("name"),
//             course: formdata.get("course"),
//         });
//     }
//     return (
//         <div className="border p-3 text-3xl border-2 m-5 rounded-3xl bg-gray-700">
//             <form onSubmit={handelsubmit} className="border p-3 text-3xl font-bold border-2 m-5 rounded-3xl bg-gray-200" >
//                 <label>Name: </label>
//                 <input type="text" placeholder="Full name" name="name"/>
//                 <br />
//                 <label>Course: </label>
//                 <select name="course">
//                     <option value="CSE">CSE</option>
//                     <option value="ECE">ECE</option>
//                     <option value="IT">IT</option>
//                 </select>
//                 <br />
//                 <button type="submit" className="border p-3 m-5 rounded-2xl cursor-pointer bg-green-100">Submit</button>
//             </form>
//             {form && (
//                 <div className="border p-3 mt-5 w-100 bg-white rounded-xl" >
//                     <h2 className="font-bold text-center">Student Data</h2>
//                     <p>Name: {form.name}</p>
//                     <p>Course: {form.course}</p>
//                 </div>
//             )}
//        </div>
//     );
// }



//==================================================================================================================================

// ----------------Registration Validation-------------------
"use client"
import { useState } from "react";
export default function FormValidation()
{
    const[name, setname] = useState("");
    const[email, setemail] = useState("");
    const[age, setage] = useState("");
    const[course, setcourse] = useState("");
    const[pass, setpass] = useState("");
    const[error, seterror] = useState("");
    const[success, setsuccess] = useState("");
    function handlesubbmit(e)
    {
        e.preventDefault();
        seterror("");
        setsuccess("");

        // 1. Check Empty Feilds....
        if(!name || !email || !age || !course || !pass)
        {
            alert("All Feilds are required...!!!");
            return;
        }

        // 2. Check Name
        if(name.length < 3)
        {
            seterror("Enter Valid Name...Must Contain Atleast 3 Characters");
            return;
        }

        // 3. Check Email
        if(!email.includes("@"))
        {
            seterror("Enter a valid Email...!!");
            return;
        }

        // 4. Check Age
        if(age < 18)
        {
            seterror("Age must be above 18");
        }

        // 5. Check Password
        if(pass.length < 6)
        {
            seterror("Password Length Should be more than 6 Digit");
            return;
        } 
        setsuccess("Registration Successful");
    }
    return(
        <div className="bg-gray-300 min-h-screen p-10">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Registration Form</h1>
                <form onSubmit={handlesubbmit}>
                    <label className="font-semibold block mb-1">Name:</label>
                    <input className="border p-2 rounded w-full mb-4" placeholder="Enter Name" type="text" value={name}
                        onChange={(e)=>{setname(e.target.value)}}/>
                    <label className="font-semibold block mb-1">Email:</label>
                    <input className="border p-2 rounded w-full mb-4" placeholder="Enter Email" type="email" value={email}
                        onChange={(e)=>{setemail(e.target.value)}}/>
                    <label className="font-semibold block mb-1">Age:</label>
                    <input className="border p-2 rounded w-full mb-4" placeholder="Enter Age" type="number" value={age}
                        onChange={(e)=>{setage(e.target.value)}}/>
                    <label className="font-semibold block mb-1">Select Course:</label>
                    <select className="border p-2 rounded w-full mb-4" value={course}onChange={(e)=>{setcourse(e.target.value)}}>
                        <option value="">Select</option>
                        <option value="CSE">CSE</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                    <label className="font-semibold block mb-1">Password:</label>
                    <input className="border p-2 rounded w-full mb-4" placeholder="Enter Password" type="password" value={pass}
                        onChange={(e)=>{setpass(e.target.value)}}/>
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">Register</button>
                    {error && <p className="text-red-500 mt-3">{error}</p>}
                    {success && <p className="text-green-500 mt-3">{success}</p>}
                </form>
            </div>
        </div>
    );
}




// ================================================================================================================================
// Create an application for clg event....details of the participations through a next js application.....
// Home page should have register now button.....user will click on the button and a form will open....
// Validation to apply on form:
// Name, email, regno, event category, contact is required
// Name should be of min len 4 char
// Email in correct format
// reg no should be not more than 8 digit.
// contact should not be more than 10 digit
// "use client"
// import { useState } from "react";
// export default function EventForm()
// {
//     const[name, setname] = useState("");
//     const[email, setemail] = useState("");
//     const[reg, setreg] = useState("");
//     const[cat, setcat] = useState("");
//     const[contact, setcontact] = useState("");
//     const[error, seterror] = useState("");
//     const[success, setsuccess] = useState("");
//     function handleevent(e)
//     {
//         e.preventDefault();
//         seterror("");
//         setsuccess("");
//         if(!name || !email || !reg || !cat || !contact)
//         {
//             alert("All Feilds are required..!!");
//             return;
//         }
//         if(name.length < 4)
//         {
//             seterror("Name must contain atleast 4 char..!!");
//             return;
//         }
//         if(!email.includes("@"))
//         {
//             seterror("Enter Valid Email..!!");
//             return;
//         }
//         if(reg<8 || reg>8)
//         {
//             seterror("Registration Number Should be 8 Digit");
//             return;
//         }
//         if(contact<10 || contact>10)
//         {
//             seterror("Enter Contact of 10 Digit Only..!!");
//             return;
//         }
//         setsuccess("Great Registration Successful");
//     }
//     return(
//         <div>

//         </div>
//     );
// }





// "use client"
// import { uploadFile } from "./actions";
// export default function FileForm()
// {
//     return(
//         <form action={uploadFile}>
//             <input type="file" name="file"
//         </form>
//     );
// }