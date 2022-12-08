import React, { useState } from 'react';
 
const App = () => {
   const backyback = "purple";
   const [bg,setBg] = useState(backyback)
   const [name, setName] = useState("ClickMe")
   const [inputvaalue, setInputvaalue] = useState('')
   const [returnColr, setReturnColr] = useState('')

  const handleChange = (e) => {
    setInputvaalue(e.target.value)
  }
 const handleDoubleChange = (e) => {
  setReturnColr(e.target.value)
 }
   const myBg = (e) =>{
    setBg(inputvaalue)
    setName("Return")
    console.log("ColorChange!",e.target.value)
   }

   const returnBacktobg = () => {
    setBg(returnColr)
    setName("Click Again")
   }
    return(
      <>
       <div className={`text-center py-64 px-32 h-screen w-screen bg-${bg}-500`}>
              <div >
                <div className="m-3">
                  <div className="m-3"><label htmlFor="" className="text-white font-mono px-3">Determine the color you want to display</label></div>
                  <div><input type="text" name="color" id="color" placeholder="enter your color" onChange={handleChange}/></div>
                </div>
                 <div className="m-3">
                  <div className="m-3"><label htmlFor="" className="text-white font-mono px-3">Add your second color</label></div>
                  <div><input type="text" name="color" id="color" placeholder="enter your color" onChange={handleDoubleChange}/></div>
                </div>
                <div>
                   <button  

                   onClick={myBg}
                   onDoubleClick={returnBacktobg} 
                   className="font-mono rounded-xl border-red-600 bg-black p-3 text-white"
                   >{name}</button>
                </div>
               
              </div>
        </div> 
      </>
       
    );
};    
export default App;