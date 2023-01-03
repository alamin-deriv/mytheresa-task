import React from "react";
import {
  selectListOfNowPlayingMovies,
  selectListOfPopularMovies,
  selectListOfTopRatedMovies,
  selectListOfGenres,
} from "../../redux/movies/selectors";
import Carousel from "react-elastic-carousel";
import MovieCard from "./movieCard";
import { useSelector } from "react-redux";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 4 },
];

const Movies = () => {

   const listOfNowPlayingMovies = useSelector(selectListOfNowPlayingMovies);
   const listOfPopularMovies = useSelector(selectListOfPopularMovies);
   const listOfTopRatedMovies = useSelector(selectListOfTopRatedMovies);
   const listOfGenres = useSelector(selectListOfGenres);


// this function find movie genres since initial they only came in ids
  const getMovieGenre = (genreIds) => {
    const genres = listOfGenres.filter((d) => {
      return genreIds.find((i) => i === d.id);
    });

    return genres;
  };

  return (
    <div>
      <h2 className="main__category nowPlayingText">Now Playing</h2>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {listOfNowPlayingMovies.map((movie) => {
          const genres = getMovieGenre(movie.genre_ids);

          return (
            <MovieCard
              key={movie.id}
              category="nowPlaying"
              movie={movie}
              genres={genres}
            />
          );
        })}
      </Carousel>

      <h2 className="main__category popularText">Popular Movies</h2>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {listOfPopularMovies.map((movie) => {
          const genres = getMovieGenre(movie.genre_ids);

          return (
            <MovieCard
              key={movie.id}
              category="popular"
              movie={movie}
              genres={genres}
            />
          );
        })}
      </Carousel>

      <h2 className="main__category topRatedText">Top Rated</h2>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {listOfTopRatedMovies.map((movie) => {
          const genres = getMovieGenre(movie.genre_ids);

          return (
            <MovieCard
              key={movie.id}
              category="topRated"
              movie={movie}
              genres={genres}
            />
          );
        })}
      </Carousel>
    </div>
  );
}; 




export default Movies;
