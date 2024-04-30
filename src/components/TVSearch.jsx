import { useState } from "react"


function TVSearch ({setCurrentSearchTerm}){

    const [newSearchTerm, setNewSearchTerm] = useState("")
    const [rating, setRating] = useState(0)
    

    function handleSubmit(event){
        event.preventDefault()
        console.log("submitting", newSearchTerm);
        setCurrentSearchTerm(newSearchTerm);
        setNewSearchTerm("")
    }

    return(
    <>       
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search-input">Search: </label>
            <input 
            type="text" 
            id="search-input"
            value={newSearchTerm}
            onChange={(event)=>{
                setNewSearchTerm(event.target.value)
            }}/>
            <label htmlFor="Rating">Rating</label>
            <select 
                id="Rating" 
                name="Rating"
                value={rating}        
                onChange={(event) => setRating(event.target.value)}
                >
                <option value="0">0</option>    
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            <button type="submit">Go!</button>
        </form>
    </>
    )
}

export default TVSearch