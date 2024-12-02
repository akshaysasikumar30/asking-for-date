import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import love from "../assets/love.avif"


const Question = () => {
  

const navigate = useNavigate();
 const [noButtonPosition,setNoButtonPosition] = useState({top:"50%",left:"50%"})

 const moveNoButton = ()=>{
    const topPostion= Math.floor(Math.random()*80)+10+"%";
    const leftPostion = Math.floor(Math.random()*80)+10+"%";
    setNoButtonPosition({top:topPostion,left:leftPostion})
 }

 const handleYesButton = ()=>{
    navigate("/location");

 }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen" style={{backgroundImage:`url(${love})`}}>
      <h1 className="mb-6 text-2xl font-bold text-center text-white">
        Would you go on a date with me?
      </h1>
      <div className="flex justify-between space-x-12">
        <button onClick={handleYesButton} style={{marginBottom:"7px"}} className="px-6 py-3 font-medium text-white bg-green-500 rounded-lg hover:bg-green-600">
          YES
        </button>
        <button
          className="px-6 py-3 font-medium text-white bg-red-500 rounded-lg absolute"
          style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton} 

        >
          NO
        </button>
      </div>
    </div>
  );
};

export default Question;
