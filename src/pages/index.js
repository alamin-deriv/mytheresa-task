import React, {useEffect} from "react";
import { Tabs } from "react-simple-tabs-component";
import "./style.scss";
import {
  fetchNowPlayingMoviesStart,
  fetchPopularMoviesStart,
  fetchTopRatedMoviesStart,
  fetchGenresStart,
} from "../redux/movies/actions";
import {
  selectIsLoading,
} from "../redux/movies/selectors";
import Loader from "../components/Loader";
import "react-simple-tabs-component/dist/index.css";
import Wishlist from "./tabs/wishlist"; 
import Movies from "./tabs/movies";


import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Home = ({
  fetchGenres,
  loading,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
}) => {

  useEffect(() => {
    fetchTopRatedMovies();
    fetchPopularMovies();
    fetchNowPlayingMovies();
    fetchGenres();
  }, []);

  const tabs = [
    {
      label: "Movies list",
      Component: Movies,
    },
    {
      label: "Wishlist",
      Component: Wishlist,
    },
  ];


  return (
    <>
      {loading ? (
        <Loader data-testid="loader" />
      ) : (
        <div className="main">
          <Tabs type="tabs" tabs={tabs} />
        </div>
      )}
    </>
  );
};


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMoviesStart()),
  fetchTopRatedMovies: () => dispatch(fetchTopRatedMoviesStart()),
  fetchPopularMovies: () => dispatch(fetchPopularMoviesStart()),
  fetchGenres: () => dispatch(fetchGenresStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);