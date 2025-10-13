



import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Createpost from "./Components/Createpost";
import "./App.css"; // Ensure custom styles for layout
import Postlist from "./Components/Postlist";
import PostlistProvider from "./Store/Postliststore";


function App() {
  const[select,setSelect]=useState("Createpost");
  return (
    <>
    <PostlistProvider>
      <div className="Appcontainer d-flex">
        <Sidebar select={select} setSelect={setSelect} />
        <div className="main-content flex-grow-1">
          <Header />
          
          <div className="content p-4 "> 
            
           
            {select==='Home'?(<Createpost />):( <Postlist/>)}
            
          </div>
        </div>
      </div>
      </PostlistProvider>
    </>
  );
}

export default App;

