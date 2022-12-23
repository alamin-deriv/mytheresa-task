import React from "react";
import { render } from "@testing-library/react";
import Movies from "./../pages/tabs/movies";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../redux/root-reducer";

import {
  listOfPopularMovies,
  listOfNowPlayingMovies,
  listOfTopRatedMovies,
  listOfGenres,
} from "./../../__mocks__/data.js";

const store = createStore(rootReducer);



test("renders Movies component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Movies
        listOfNowPlayingMovies={listOfPopularMovies}
        listOfPopularMovies={listOfNowPlayingMovies}
        listOfTopRatedMovies={listOfTopRatedMovies}
        listOfGenres={listOfGenres}
      />
    </Provider>
  );
  const nowPlayingText = getByText(/Now Playing/i);
  const popularText = getByText(/Popular Movies/i);
  const topRatedText = getByText(/Top Rated/i);
  expect(nowPlayingText).toBeInTheDocument();
  expect(popularText).toBeInTheDocument();
  expect(topRatedText).toBeInTheDocument();
});
