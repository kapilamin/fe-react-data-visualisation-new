import { useState, useEffect } from "react";

function TVList ({ currentSearchTerm, currentRating}){

    const [TvShows, setTvShows] = useState([])
    const [isError, setIsError] = useState(false)
    //const [ratingFilter, setRatingFilter] = useState(null)

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${currentSearchTerm}`)
        .then((response)=>{        
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
            
    }, [currentSearchTerm, currentRating])


    if(isError){
        return<h2>Error!</h2>
    }
    return (<> 

            {/* <div>
                <h2>{`Here are all of our tv shows on ${currentSearchTerm}`}</h2>
                <label htmlFor="ratingFilter">Filter by Rating:</label>
                <input
                    type="number"
                    id="ratingFilter"
                    value={ratingFilter || ""}
                    onChange={setRatingFilter}
                />
            </div> */}

    <h2>{`Here are all of our tv shows on ${currentSearchTerm}`} </h2>
        <ul>
        {TvShows.map((TvShow) => {
        const { show } = TvShow;
        if (!show) return null; 
        const { name, genres, rating, image } = show;
        const genreList = genres.join(', ');
        const showRating = rating?.average ?? 'No rating'; 

        // if (ratingFilter && parseFloat(showRating) !== ratingFilter) {
        //     return null;
        // }


        return (
            <li key={TvShow.id} className="tvshow">
                <h2 className="show">{name}</h2>
                <h2 className="genres">{genreList}</h2>
                <h2 className="ratings">{showRating}</h2>
                {image ? (
                    <img src={image.medium} alt={`Poster for ${name}`} />
                ) : (
                    <div>No Image Available</div>
                )}
            </li>

            
        );
    })}
        </ul>
    </>)

    }

export default TVList