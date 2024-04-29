import { useState, useEffect } from "react";

function TVList ({ currentSearchTerm }){

    const [TvShows, setTvShows] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${currentSearchTerm}`)
        .then((response)=>{        
                console.log(response);        
            if(!response.ok){
                return Promise.reject()
            }
                return response.json()
            })
            .then((data) => {
            setTvShows(data)
            })
            .catch((err) => {
                setIsError(true)
            })
            
    }, [currentSearchTerm])

    if(isError){
        return<h2>Error!</h2>
    }
    return (<> 
    <h2>{`Here are all of our tv shows on ${currentSearchTerm}`} </h2>
        <ul>
            {TvShows.map((TvShow) => {
                return (
                <li key={TvShow.id} className="tvshow">
                    <h2 className="show">{TvShow.show.name}</h2>
                    <h2 className="genres">{TvShow.show.genres}</h2>
                    <h2 className="ratings">{TvShow.show.rating.average}</h2>
                 </li>
                )
            })}
        </ul>
    </>)

    }

export default TVList