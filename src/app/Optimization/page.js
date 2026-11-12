// "use client"
// import { useState } from "react";
// export default function Likes()
// {
//     const[like, setLike] = useState(10);
//     const [dislike, setDislike] = useState(2);

//     async function LikePost()
//     {
//         setLike(like + 1);
//         await new Promise((resolve) => {setTimeout(resolve, 5000)});
//         console.log("Server Operation Successful");
//     }
//     async function DislikePost() 
//     {
//         setDislike(dislike + 1);
//         await new Promise((resolve) => {setTimeout(resolve, 5000)});
//         console.log("Dislike Server Operation Successful");
//     }
//     return(
//     <div className="w-96 mx-auto mt-20 p-6 text-center border rounded-xl shadow-md bg-gray-100">
//         <h1 className="text-2xl font-bold mb-3">Post</h1>
//         <p className="text-gray-600 mb-6">This is a sample post.</p>
//         <div className="flex justify-center gap-4">
//             <button onClick={LikePost} className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Like{like}</button>
//             <button onClick={DislikePost} className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Dislike{dislike}</button>
//         </div>
//     </div>
//     );
// }


// =============================================================================================
"use client";
import { useState } from "react";
export default function Page() {
  const [tasks, setTasks] = useState(["Study", "Exercise", "Read"]);
  async function deleteTask(task) {
    // Update UI immediately
    setTasks(tasks.filter((item) => item !== task));
    // Imagine server request
    await new Promise((resolve) => setTimeout(resolve, 9000));
    console.log("Deleted from server");
  }
  return (
    <div>
      <h1>My Tasks</h1>
      {tasks.map((task) => (
        <div key={task}>{task}
          <button onClick={() => deleteTask(task)}>Delete   </button>
        </div>
      ))}
    </div>
  );
}