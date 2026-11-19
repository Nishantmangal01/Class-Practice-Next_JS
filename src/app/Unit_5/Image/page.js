// // // For Internal Source / Image already present in the public folder
// import Image from "next/image";
// export default function Home()
// {
//     return(
//         <div>
//             <h1 className="font-bold text-3xl text-center m-10">Welcome to image page</h1>
//             <h1>Internal Source</h1>
            // <Image 
            // src="/ecocycle.png"
            // alt="Image is here" 
            // width={400} 
            // height={300}/>
//         </div>
//     );
// }


// // // For External Source 
// import Image from "next/image";
// export default function Home()
// {
//     return(
//         <div>
//             <h1 className="font-bold text-3xl text-center m-10">Welcome to image page</h1>
//             <h1>External Source</h1>
//             <Image 
//             src="https://images.pexels.com/photos/40234150/pexels-photo-40234150.jpeg?_gl=1*r0yke6*_ga*MTg1NDgwMjI3NC4xNzc3MjcwNTgz*_ga_8JE65Q40S6*czE3OTQ0NjE0NjQkbzIkZzEkdDE3OTQ0NjE0NjYkajU4JGwwJGgw"
//             alt="Flower Image"
//             width={400}
//             height={300}/>
//         </div>
//     )   ;
// }




// // // // Using Both Internal and External Source
import Image from "next/image";
export default function Home();
{
    return(
        <div>
            <h1 className="font-bold text-3xl text-center m-10">Welcome to image page</h1>
            <h2>Internal Source</h2>
            <Image 
            src="/ecocycle.png"
            alt="Internal Image"
            width={600}
            height={600}/>
            <br/>
            <br/>
            <h2>External Source</h2>
            <Image 
            src="https://images.pexels.com/photos/40234150/pexels-photo-40234150.jpeg?_gl=1*r0yke6*_ga*MTg1NDgwMjI3NC4xNzc3MjcwNTgz*_ga_8JE65Q40S6*czE3OTQ0NjE0NjQkbzIkZzEkdDE3OTQ0NjE0NjYkajU4JGwwJGgw"
            alt="External Source"
            width={500}
            height={400}/>
        </div>
    );
}