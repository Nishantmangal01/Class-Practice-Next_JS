// "use client";
// import { useState } from "react";
// export default function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-6">
//                     Client Side Rendering
//                 </h1>
//                 <h2 className="text-4xl font-bold text-blue-600 mb-6">
//                     Count: {count}
//                 </h2>
//                 <div className="flex gap-4 justify-center">
//                     <button
//                         onClick={() => setCount(count + 1)}
//                         className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
//                         Increase
//                     </button>
//                     <button
//                         onClick={() => setCount(count - 1)}
//                         className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
//                         Decrease
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }



// "use client"
// import { useState } from "react"
// export default function Home()
// {
//     const [stud, setStud] = useState(null);
//     async function getStud()
//     {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users/1"
//         );
//         const data = await response.json();
//         setStud(data);
//     }
//     return(
//         <div className="p-10 text-center">
//             <h1 className="font-bold text-xl bg-sky-600 text-white px-5 py-4 rounded-lg text-center">Student Information</h1>
//             <button className="bg-sky-300 mt-5 rounded-lg text-center px-5 py-4 cursor-pointer" onClick={getStud}>Get Student</button>
//             {
//                 stud && (
//                     <div className="mt-5 border-solid p-5 rounded-lg">
//                         <h2 className="text-2xl font-bold bg-gray-100 p-6 text-center text-blue-900">Name: {stud.name}</h2>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }



// "use client"
// import { useState } from "react"
// export default function Home()
// {
//     const [weather, setweather] = useState(null);
//     async function getweather()
//     {
//         const response = await fetch(
//             "https://api.open-meteo.com/v1/forecast?latitude=30.9&longitude=75.8&current=temperature_2m"
//         );
//         const data = await response.json();
//         setweather(data.current.temperature_2m);
//     }
//     return(
//         <div className="text-center">
//             <h1 className="font-bold text-3xl">Weather Details</h1>
//             <button onClick={getweather} className="bg-blue-600 px-4 py-4 rounded-lg cursor-pointer" >Get Weather</button>
//             {weather &&(
//                 <h2>Temperature: {weather} in C</h2>
//             )}
//         </div>
//     ) 
// }



// "use client"
// import { useState } from "react"
// export default function Home()
// {
//     const [student, setstudent] = useState(null);
//     function getstudent()
//     {
//         setstudent({
//             name: "Nishant",
//             course: "Next.JS",
//             marks: "99",
//             grades: "O"
//         });
//     }
//     return(
//         <div className="text-center font-bold text-3xl m-6 bg-gray-500 rounded-xl p-10 color-blue-600">
//             <h1>Student Details</h1>
//             <button className="text-2xl border-3 rounded-lg bg-green-600 m-5 p-5 cursor-pointer" onClick={getstudent}>Get Student</button>
//             {student &&(
//                 <div className="border-2 rounded-xl text-center bg-sky-200 p-3 m-3">
//                     <h2>Name: {student.name}</h2>
//                     <h2>Course: {student.course}</h2>
//                     <h2>Marks: {student.marks}</h2>
//                     <h2>Grades: {student.grades}</h2>
//                 </div>
//             )}
//         </div>
//     )
// }



// "use client";
// import { useState } from "react";
// export default function Home() {
//     const [count, setcount] = useState(0);
//     const [product, setproduct] = useState(null);
//     function getproduct() {
//         setproduct({
//             product1: "Phone",
//             product2: "Headphone",
//             product3: "Laptop",
//             product4: "Watch",
//             product5: "Wallet",
//             product6: "Charger",
//             product7: "Keyboard",
//             product8: "Mouse",
//             product9: "Shoes",
//             product10: "Socks"
//         });
//     }
//     return (
//         <div className="text-center m-5">
//             <button
//                 onClick={getproduct}
//                 className="bg-green-600 m-5 p-5 text-3xl border-2 rounded-xl">Show Products</button>
//             <div className="m-5">
//                 <h2 className="text-3xl font-bold mb-4">Products Added: {count}</h2>
//                 <button
//                     onClick={() => setcount(count + 1)}
//                     className="bg-green-500 text-white px-6 py-3 text-2xl rounded-lg m-2">+</button>
//                 <button
//                     onClick={() => setcount(count - 1)}
//                     className="bg-red-500 text-white px-6 py-3 text-2xl rounded-lg m-2">-</button>
//             </div>
//             {product && (
//                 <div className="rounded-lg bg-sky-200 m-5 border-2">
//                     <h1 className="text-2xl border-2 text-center m-5 bg-sky-400 rounded-lg font-bold">Products</h1>
//                     <div className="text-center text-xl p-2">
//                         <h2>{product.product1}</h2>
//                         <h2>{product.product2}</h2>
//                         <h2>{product.product3}</h2>
//                         <h2>{product.product4}</h2>
//                         <h2>{product.product5}</h2>
//                         <h2>{product.product6}</h2>
//                         <h2>{product.product7}</h2>
//                         <h2>{product.product8}</h2>
//                         <h2>{product.product9}</h2>
//                         <h2>{product.product10}</h2>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }





// "use client"
// import { useState } from "react"
// export default function Home()
// {
//     const products = [
//         "Phone",
//         "Headphone",
//         "Laptop",
//         "Watch",
//         "Wallet",
//         "Charger",
//         "Keyboard",
//         "Mouse",
//         "Shoes",
//         "Socks"
//     ];
// }


