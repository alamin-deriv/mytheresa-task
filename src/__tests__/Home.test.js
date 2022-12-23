import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { legacy_createStore as createStore } from "redux";
import {
  wishlist,
  listOfPopularMovies,
  listOfNowPlayingMovies,
  listOfTopRatedMovies,
  listOfGenres,
} from "./../../__mocks__/data.js";
import Home from "./../pages/";
import {
  fetchNowPlayingMoviesStart,
  fetchTopRatedMoviesStart,
  fetchPopularMoviesStart,
  fetchGenresStart,
} from "../redux/movies/actions";
import { Provider } from "react-redux";
import rootReducer from "../redux/root-reducer";

jest.mock("../redux/movies/actions", () => ({
  fetchNowPlayingMoviesStart: jest.fn(),
  fetchTopRatedMoviesStart: jest.fn(),
  fetchPopularMoviesStart: jest.fn(),
  fetchGenresStart: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// jest.mock("react-redux", () => ({
//   dispatch: jest.fn(),
// }));

jest.mock("react-redux", () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),  
  };
});

console.log(Home);


const initialState = {
  movies: {
    isLoading: false,
    wishlist,
    listOfPopularMovies,
    listOfNowPlayingMovies,
    listOfTopRatedMovies,
    listOfGenres,
  },
};


const store = createStore(rootReducer, initialState);

describe("Home component", () => {
  it("should render the loader when loading is true", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Assert that the loader is present
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render the tabs when loading is false", async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Wait for the loading to finish
    await wait(() =>
      expect(fetchNowPlayingMoviesStart).toHaveBeenCalledTimes(1)
    );
    await wait(() => expect(fetchTopRatedMoviesStart).toHaveBeenCalledTimes(1));
    await wait(() => expect(fetchPopularMoviesStart).toHaveBeenCalledTimes(1));
    await wait(() => expect(fetchGenresStart).toHaveBeenCalledTimes(1));

    // Assert that the tabs are present
    const moviesTab = getByText("Movies list");
    expect(moviesTab).toBeInTheDocument();

    const wishlistTab = getByText("Wishlist");
    expect(wishlistTab).toBeInTheDocument();
  });
});
