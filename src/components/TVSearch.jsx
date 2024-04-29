import { useState } from "react"

function TVSearch (){

    const [newSearchTerm, setNewSearchTerm] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log("submitting", newSearchTerm);
    }

    return(
        <form className="search-form" onSubmit={(event) => {
            handleSubmit(event)
        }}>
            <label htmlFor="search-input">Search: </label>
            <input 
            type="text" 
            id="search-input"
            value={newSearchTerm}
            onChange={(event)=>{
                setNewSearchTerm(event.target.value)
            }}/>
            <button>Go!</button>
        </form>
    )
}

export default TVSearch