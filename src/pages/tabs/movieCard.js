import React from "react";
import { useNavigate } from "react-router-dom";
import starIcon from "../../assets/star-svgrepo-com.svg";

const MovieCard = ({ movie, genres, category }) => {
  const navigate = useNavigate();

      const onClick = (movieId, category) => {
        navigate(`/movie/${movieId}?category=${category}`);
      };
  return (
    <div key={movie.id}>
      <div
        className={`main__card ${category}`}
        onClick={() => onClick(movie.id, category)}
      >
        <img
          className="main__card__poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div className={`main__card__middle ${category}Button`}>
          <img
            width="25px"
            height="25px"
            className="main__card__middle__iconStar"
            src={starIcon}
            alt="starIcon"
          />
          <div>{movie?.vote_average?.toFixed(1)} / 10</div>

          {genres.slice(0, 2).map((genre) => (
            <div key={genre.id}>{genre.name}</div>
          ))}
          <button type="button">View Details</button>
        </div>
      </div>
      <h4>
        {movie?.original_title?.length > 20
          ? `${movie?.original_title.slice(0, 20)}...`
          : movie?.original_title}
      </h4>
      <h5>{movie?.release_date.slice(0, 4)}</h5>
    </div>
  );
};

export default MovieCard;
