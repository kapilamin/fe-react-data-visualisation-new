import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

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

    <h2 className="subHeading">{`Here are all of our tv shows on ${currentSearchTerm}`} </h2>
        <ul>
        {TvShows.map((TvShow) => {
        const { show } = TvShow;
        if (!show) return null; 
        const { name, genres, rating, image } = show;
        const genreList = genres.join(', ');
        const showRating = rating?.average ?? 'No rating'; 

        return (
            <li key={TvShow.id} className="tvshow">
                 <ListGroup variant="flush">
               <ListGroup.Item><h2 className="show">{name}</h2></ListGroup.Item>
               <ListGroup.Item><h2 className="genres">{genreList}</h2></ListGroup.Item>
              <ListGroup.Item><h2 className="ratings">{showRating}</h2></ListGroup.Item>
              </ListGroup>
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

export default TVList;


// export default FlushExample;