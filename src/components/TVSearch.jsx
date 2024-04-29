import { useState } from "react"


function TVSearch ({setCurrentSearchTerm}){

    const [newSearchTerm, setNewSearchTerm] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log("submitting", newSearchTerm);
        setCurrentSearchTerm(newSearchTerm);
        setNewSearchTerm("")
    }

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search-input">Search: </label>
            <input 
            type="text" 
            id="search-input"
            value={newSearchTerm}
            onChange={(event)=>{
                setNewSearchTerm(event.target.value)
            }}/>
            <button type="submit">Go!</button>
        </form>
    )
}

export default TVSearch