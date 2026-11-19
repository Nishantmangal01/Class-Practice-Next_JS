// "use client"
// import { useState } from "react"
// import dynamic from "next/dynamic"
// // // // Dynamic Import
// const Studentdetails = dynamic(
//     ()=>import("./Studentdetails"),
//     {
//         loading: () => <p>Loading Student Details</p>
//     }
// );
// export default function Home()
// {
//     const [show, setshow] = useState(false);
//     return(
//         <div>
//             <h1>Student Dashboard</h1>
//             <p>Welcome to student dashboard</p>
//             <button onClick={()=> setshow(true)} >
//                 Load Student Details
//             </button>
//             {show && <Studentdetails/>}
//         </div>
//     );
// }






// "use client"
// import { useState } from "react"
// import dynamic from "next/dynamic"
// // Dynamic Import the component
// const HeacyComponents = dynamic(
//     () => import("./Heacycomponents.js"),
//     {
//         loading: () => <p>Loading the components</p>
//     }
// );
// export default function Home()
// {
//     const [ show, setshow ] = useState(false);
//     return(
//       <div style={{fontFamily: "Arial", padding: "20px"}}>
//             <h1>Next Js Example</h1>
//             <p>Click the button to get the details.</p>
//             <button onClick={()=>setshow(true)}>Click Here</button>
//             {show && <HeacyComponents/>}
//         </div>
//     );
// }





// "use client"
// import { useState } from "react"
// import dynamic from "next/dynamic"
// const EmployeesDetails = dynamic(
//     () => import("./EmployeeDetails"),
//     {
//         loading: () => <p>Loading the components</p>
//     }
// );
// export default function Home()
// {
//     const [ show, setshow] = useState(false)
//     return(
//         <div style={{fontFamily: "Arial", padding: "20px"}}>
//             <h1>Employees Data</h1>
//             <br/>
//             <p>Click the button to get the details.</p>
//             <br/>
//             <button onClick={()=>setshow(true)}>Click Here</button>
//             {show && <EmployeesDetails/>}
//         </div>
//     );
// }



// ============================================================================================================================
// // // // // // // // // LAZY Loading
// "use client"
// import dynamic from "next/dynamic"
// import { useState } from "react"
// import Home from "../page";
// const Attendence = dynamic(
//     ()=>import("./Attendence"),
//     {
//         loading: ()=> <p>Loading Attendence.....</p>
//     }
// );
// export default function LAZY_Loading()
// {
//     const [ show, setshow ] = useState(false);
//     return(
//         <div>
//             <h1>Student Dashboard</h1>
//             <h3>Welcome Student</h3>
//             <button onClick={()=> setshow(true)} >View Attendence</button>
//             { show && <Attendence/> }
//         </div>
//     );
// }




// "use client"
// import dynamic from "next/dynamic"
// import { useState } from "react"
// import Home from "@/app/page"
// const EventDetails = dynamic(
//     ()=> import("./EventDetails"),
//     {
//         loading: ()=> <p>Loading details of events.......</p>
//     }
// );
// export default function LAZY_Example()
// {
//     const [ show, setshow ] = useState(false);
//     return(
//         <div>
//             <h1>Event Details Shown Below</h1>
//             <h2>Welcome User</h2>
//             <button onClick={()=> setshow(true)}>View Events</button>
//             { show && <EventDetails/> }
//         </div>
//     );
// }







"use client"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { useState } from "react"

const ProductDetails = dynamic(
    ()=> import("./ProductDetails"),
    {
        loading: ()=> <p>Loading product details.......</p>
    }
);
export default function Scrolling_Example()
{
    const [ show, setshow ] = useState(false);
    useEffect(()=>
    {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting)
                {
                    setshow(true);
                    observer.disconnect();
                }
            }
        )
        const target = document.getElementById("product");
        if(target)
        {
            observer.observe(target);
        }
        return()=> observer.disconnect();
    }, [])
    return(
        <div>
            <h1>Online Shopping Website</h1>
            <h2>Welocme to our webpage</h2>
            <p>Explore latest items</p>
            <div style={{height: "700px"}}>
                <h2>Our Products</h2>
                <p>Scroll down to explore more products details</p>
            </div>
            <div id="product">
                {show && <ProductDetails/>}
            </div>
        </div>
    );
}