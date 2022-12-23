import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectListOfNowPlayingMovies,
  selectListOfPopularMovies,
  selectListOfTopRatedMovies,
  selectListOfGenres,
} from "../../redux/movies/selectors";
import Carousel from "react-elastic-carousel";
import MovieCard from "./movieCard";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 4 },
];

const Movies = ({
  listOfNowPlayingMovies,
  listOfPopularMovies,
  listOfTopRatedMovies,
  listOfGenres,
}) => {


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


const mapStateToProps = createStructuredSelector({
  listOfNowPlayingMovies: selectListOfNowPlayingMovies,
  listOfPopularMovies: selectListOfPopularMovies,
  listOfTopRatedMovies: selectListOfTopRatedMovies,
  listOfGenres: selectListOfGenres,
});



export default connect(mapStateToProps, null)(Movies);
