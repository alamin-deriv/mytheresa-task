import React from "react";
import { render } from "@testing-library/react";
import Movies from "./../pages/tabs/movies";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import {
  listOfNowPlayingMovies,
  listOfPopularMovies,
  listOfGenres,
  listOfTopRatedMovies,
} from "./../../__mocks__/data";

const mockStore = configureMockStore();

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Movies", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      movies: {
        listOfNowPlayingMovies,
        listOfPopularMovies,
        listOfGenres,
        listOfTopRatedMovies,
      },
    });
  });

  it("renders Movies component", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const nowPlayingText = getByText(/Now Playing/i);
    const popularText = getByText(/Popular Movies/i);
    const topRatedText = getByText(/Top Rated/i);
    expect(nowPlayingText).toBeInTheDocument();
    expect(popularText).toBeInTheDocument();
    expect(topRatedText).toBeInTheDocument();
  });

  it("renders at least one movie Now Playing", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const title = getByText("Black Adam");
    expect(title).toBeInTheDocument();
  });

  it("renders at least one movie Popular movies", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const title = getByText("Avatar: The Way of W...");
    expect(title).toBeInTheDocument();
  });

  it("renders at least one movie Top Rated", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
    const title = getByText("The Godfather");
    expect(title).toBeInTheDocument();
  });
});
