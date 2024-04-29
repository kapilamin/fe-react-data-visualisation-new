import { useState } from "react";
import { useEffect } from "react";

function TVList (props){
    const { currentSearchTerm } = props;

    const [TvShows, setTvShows] = useState([])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${currentSearchTerm}`).then((response) => {
            return response.json()
    }).then((data) => {
   //    console.log(data)
            setTvShows(data)
        })
    }, [currentSearchTerm])

    return (<> 
    <h2>{`Here are all of our tv shows on ${currentSearchTerm}`} </h2>
        <ul>
            {TvShows.map((TvShow) => {
                return (
                <li key={TvShow.id} className="tvshow">
                    console.log("")
                    <h2>{TvShow.show.name}</h2>
                    <h2>{TvShow.show.genre}</h2>
                    <img src={TvShow.show.image.medium}/>
                 </li>
                )
            })}
        </ul>
    </>)

    }

export default TVList