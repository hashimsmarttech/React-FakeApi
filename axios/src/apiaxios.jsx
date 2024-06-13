// import React, { useEffect, useState } from 'react'

// const Apiaxios = () => {




//         const[myData, setData] = useState([])
//         const[isError, setError] = useState("");
//          // using Async Await
//          const getPostData = async() =>{
    
//             try{
//                 const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//                 setData(res.data);
//             } catch (error){
//                 setError(error.message);
//             }
//          }
    
//           // NOTE:  calling the function
//           useEffect(() =>{
//             getPostData();
//           }, []);
//       return (
//         <>
//          <h1> Axios Data</h1>
//          {isError !=="" && <h2>{isError}</h2> }
    
//          <div className='grid'>
//             {myData.slice(0,9).map((post) =>{
//                 const {body, id, title} =post;
//                 return(
//                     <div key={id} className="card">
//                     <h2>{title.slice(0,17).toUpperCase()}</h2>
//                     <p>{body.slice(0,100)}</p>
//                     </div>
//                 );
//             })}
    
//          </div>
//          </>
//       );
//     };
    


// export default Apiaxios


// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "./axi.js";

// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Async Await
//   const getMyPostData = async () => {
//     try {
//       const res = await axios.get("/posts");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };

//   // NOTE:  calling the function
//   useEffect(() => {
//     getMyPostData();
//   }, []);

//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {isError !== "" && <h2>{isError}</h2>}

//       <div className="grid">
//         {myData.slice(0, 9).map((post) => {
//           const { body, id, title } = post;
//           return (
//             <div key={id} className="card">
//               <h2>{title.slice(0, 15).toUpperCase()}</h2>
//               <p>{body.slice(0, 100)}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;
