import React, { useRef, useState } from 'react'
import axios from "axios";

const Calcifile = () => {
  
    const [firstName,setFirstName] = useState<any>("")
    const [secondName,setSecondName] = useState<any>("")
    const [data,setData] = useState<any>("")

    const inputRef = useRef<any>()
    const secondRef = useRef<any>()
 
    const handleSubmit = (e:any) =>{
    e.preventDefault();
    const value = inputRef.current.value
    setFirstName(value);


    const secondValue = secondRef.current.value
    setSecondName(secondValue);
        
    
    apiCalling()
    }

    console.log({"firstName": firstName, "secondName": secondName})

    //API CALL
  const apiCalling = async () => {
    const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {sname: secondName, fname: firstName},
    headers: {
        'X-RapidAPI-Key': '34abee9aafmshb3c31f156869e1ap17485ejsn21c20529d127',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
    };

    await axios.request(options).then(function (response) {
        let dummyData:any = response.data;
        setData(dummyData)
    }).catch(function (error) {
        console.error(error);
    });
   }

    console.log(data);
      const [showModal,setShowModal] = useState(false)
      const handleOpenModal =() => {
           setShowModal(true)
      }
      const handleCloseModal =() => {
           setShowModal(false)
      }

  return (
    <div>
        <header>Love Calculator</header>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">First Person Name:</label>
                <input type="text" ref={inputRef} />
            </div>
            <div>
                <label htmlFor="">Second Person Name:</label>
                <input type="text" ref={secondRef}/>
            </div>

            <button type="submit" onClick={handleOpenModal}>Click to see your love</button>
              {showModal && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          {/* the modal card */}
          <div className="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            {/* the modal header */}
            <div className="bg-red-600 py-3 px-4 flex justify-between items-center rounded-t-lg">
              <h3 className="text-white font-bold text-xl">Error</h3>
              <button
                className="text-gray-600 font-bold py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
            {/* the modal body */}
            <div className="px-4 py-3 text-gray-700 leading-relaxed">
              There was an error processing your request. Please try again.
            </div>
          </div>
        </div>
      )}
        </form>
    </div>
  )
}

export default Calcifile