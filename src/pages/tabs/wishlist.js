import React from "react";
import {
  selectWatchlist
} from "../../redux/movies/selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EmptyState from "../../components/EmptyState/";
import MovieCard from "./movieCard";

const Wishlist = ({ wishlist }) => {

  return (
    <>
      <h2 className="main__category nowPlayingText">Wishlist</h2>
      {wishlist.length ? (
        <div className="wishlist">
          {wishlist.map((movie) => (
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

const mapStateToProps = createStructuredSelector({
  wishlist: selectWatchlist,
});



export default connect(mapStateToProps, null)(Wishlist);
