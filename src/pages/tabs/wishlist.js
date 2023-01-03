import React from "react";
import {
  selectWatchlist
} from "../../redux/movies/selectors";
import EmptyState from "../../components/EmptyState/";
import MovieCard from "./movieCard";
import { useSelector } from "react-redux";

const Wishlist = () => {

  const wishlist = useSelector(selectWatchlist)

  return (
    <>
      <h2 className="main__category nowPlayingText">Wishlist</h2>
      {wishlist?.length ? (
        <div className="wishlist">
          {wishlist?.map((movie) => (
            <MovieCard
              key={movie.id}
              category={movie.category}
              movie={movie}
              genres={movie.genres}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          header="No movie added to wishlist"
          message="Please select one or more movies from the movies list"
        />
      )}
    </>
  );
};



export default Wishlist;
