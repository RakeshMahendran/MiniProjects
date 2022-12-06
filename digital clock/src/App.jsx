import React, { useState } from 'react';
 
const App = () => {

    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time)

    const UpdateTime = () =>{
      time = new Date().toLocaleTimeString();
      setCurrentTime(time)
    }

    setInterval(UpdateTime,1000)

    return(
        <div className="bg-black  text-center py-64 px-32 h-screen w-screen">
         <div className="bg-white border-l-4 border-red-600">
          <h1 className= "text-red-600 text-4xl font-sans uppercase">Clock</h1>
           <h1 className="bg-white py-2 text-4xl font-mono border-l-4 border-red">{currentTime}</h1>
         </div>   
        </div> 
    );
};    
export default App;