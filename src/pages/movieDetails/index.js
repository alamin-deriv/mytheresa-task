import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useParams } from 'react-router-dom';
import qs from "query-string";
import Loader from "../../components/Loader";

import {
  fetchmovieByIDStart,
  addToWatchlist,
  removeFromWatchlist,
} from "../../redux/movies/actions";
import {
  selectIsLoading,
  selectCurrentMovie,
  selectWatchlistIds,
} from "../../redux/movies/selectors";



const Movie = () => {
    const [item, setItem] = useState({})
    const { id } = useParams();

    const { category } = qs.parse(location.search);

       const dispatch = useDispatch();
       const loading = useSelector(selectIsLoading);
       const currentMovie = useSelector(selectCurrentMovie);
       const watchlistIds = useSelector(selectWatchlistIds);


       useEffect(() => {
         dispatch(fetchmovieByIDStart(id));
       }, [id]);

 
// function to add commas to long digit
const  numberWithCommas = (x) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
}
 

const handleAddToWishlist = () => {
  currentMovie.category = category;

  dispatch(addToWatchlist(currentMovie))
}

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="main">
            <div className="main__top">
              <div
                className={`main__top__imageSide ${category}Page__imageSide`}
              >
                <img
                  width="100%"
                  height="100%"
                  src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
                  alt={currentMovie.original_title}
                />
              </div>
              <div className="main__top__detailSide">
                <div
                  className={`main__top__detailSide__description ${category}Page`}
                >
                  <h1>{currentMovie.title}</h1>
                  <h4>
                    <span>Release Date:</span> {currentMovie.release_date}
                  </h4>
                  <h4>
                    <span>Runtime:</span> {currentMovie.runtime} minutes
                  </h4>
                  <h4>
                    <span>Genres: </span>
                    {currentMovie.genres
                      ?.map((genre) => genre.name)
                      .join(" / ")}
                  </h4>

                  <p>
                    <span>Overview: </span>
                    {currentMovie.overview}
                  </p>

                  <h4>
                    <span>Rating: </span>
                    {currentMovie.vote_average?.toFixed(1)}
                  </h4>
                  <h4>
                    <span>Votes:</span>{" "}
                    {numberWithCommas(currentMovie?.vote_count)}
                  </h4>
                </div>
                {watchlistIds.includes(currentMovie.id) ? (
                  <div className="main__top__detailSide__button removeClass">
                    <button
                      onClick={() =>
                        dispatch(removeFromWatchlist(currentMovie))
                      }
                      type="button"
                    >
                      Remove Wishlist
                    </button>
                  </div>
                ) : (
                  <div
                    className={`main__top__detailSide__button ${category}Page`}
                  >
                    <button onClick={handleAddToWishlist} type="button">
                      Add to Wishlist
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={`main__bottom ${category}Page`}>
              <h4>
                <span>Budget: </span>
                {numberWithCommas(currentMovie?.budget)}
              </h4>
              <h4>
                <span>Revenue: </span>
                {numberWithCommas(currentMovie.revenue)}
              </h4>
              <h4>
                <span>Language(s): </span>
                {currentMovie.spoken_languages
                  ?.map((Language) => Language.english_name)
                  .join(" / ")}
              </h4>
              <h4>
                <span>Production Company(s): </span>
                {currentMovie.production_companies
                  ?.map(
                    (company) => `${company.name} (${company.origin_country})`
                  )
                  .join(" / ")}
              </h4>
            </div>
          </div>
        )}
      </>
    );
}

export default Movie;