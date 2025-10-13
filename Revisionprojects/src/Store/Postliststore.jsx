// import {createContext, useReducer} from 'react'

// const Postlist=createContext({
//   postlist:[],
//   addost:()=>{

//   },
//   deletepost:()=>{

//   }
// });
// const PostlistProvider =(children)=>{
//   return(
//      const [postlist, dispatchPostlist] = useReducer(reducerFunction, []);

//     <Postlist.Provider value={[postlist,dispatchPostlist]}>{} </Postlist.Provider>

//   );
// }


// export  {PostlistProvider,Postlist}






// import React, { createContext, useReducer } from "react";

// const Postlist = createContext();

// const reducerFunction = (state, action) => {
//   switch (action.type) {
//     case "ADD_POST":
//       return [...state, action.payload];
//     case "REMOVE_POST":
//       return state.filter(post => post.id !== action.payload);
//     default:
//       return state;
//   }
// };

// // 3. Provider component banaye
// const PostlistProvider = ({ children }) => {
//   const [postlist, dispatchPostlist] = useReducer(reducerFunction, []);

//   return (
//     <Postlist.Provider value={[postlist, dispatchPostlist]}>
//       {children}
//     </Postlist.Provider>
//   );
// };

// export { Postlist, PostlistProvider };



