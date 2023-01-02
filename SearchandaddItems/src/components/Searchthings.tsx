import React, { useState, useRef } from 'react';


const Searchthings = () => {
    const [addItems, setAddItems] = useState<any>(["hi","byre"])
    const [query, setQuery] = useState<any>("")
    const inputRef = useRef<any>()
    const outRef = useRef<any>()
    
    const onSubmit = (e:any) => {
        e.preventDefault()
        const value = inputRef.current.value
        if( value == "" ) return 
        setAddItems((prevAddItems:any) =>{
            return [...prevAddItems, value]
        })
        inputRef.current.value = ""
    }

    console.log(addItems);

    const handleDelete = (e:any) => {
        const value = outRef.current.value
        setAddItems(addItems.filter((i:any) => i !== value))
        outRef.current.value = ""
    }
    const filteredItems = addItems.filter((item:any)=>{
      return  item.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <div className="">
        <div>
            <h3>Search your Items in the list</h3>
            <div>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                <button className="btn">Search</button>
            </div>
        </div>
           
        <div>
            <h3>Add and delete your items</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" ref={inputRef} />
                    <button type="submit" className="">Add</button>
                
                </div>
            </form>
                    <div>
                    <input type="text" ref={outRef} />
                    <button onClick={handleDelete}>Delete</button>
                </div>
        </div>
        <div>
            {filteredItems.map((items:any) =>{
                return <h2>{items}</h2>
            })}
        </div>
    </div>

  )
}

export default Searchthings