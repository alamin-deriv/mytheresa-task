import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Movie from './../pages/movieDetails/';

const mockStore = configureMockStore();

describe("Movie", () => {
  let store;
  let dispatch;

  beforeEach(() => {
    store = mockStore({
      movies: {
        isLoading: false,
        currentMovie: {
          id: 123,
          title: "Test Movie",
          release_date: "2022-01-01",
          runtime: 120,
          genres: [{ name: "Action" }, { name: "Adventure" }],
          overview: "A test movie about testing",
          vote_average: 7.5,
          vote_count: 10000,
          poster_path: "/poster.jpg",
        },
        watchlistIds: [],
      },
    });
    dispatch = jest.fn();
    store.dispatch = dispatch;
  });

  it("renders loader when isLoading is true", async () => {
    store.getState().movies.isLoading = true;
    render(
      <Provider store={store}>
        <Movie />
      </Provider>
    );
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("renders movie details and Add to Wishlist button when isLoading is false", async () => {
    store.getState().movies.isLoading = false;
    render(
      <Provider store={store}>
        <Movie />
      </Provider>
    );
    const title = screen.getByText("Test Movie");
    expect(title).toBeInTheDocument();
    const releaseDate = screen.getByText("2022-01-01");
    expect(releaseDate).toBeInTheDocument();
    const runtime = screen.getByText("120 minutes");
    expect(runtime).toBeInTheDocument();
    const genres = screen.getByText("Action / Adventure");
    expect(genres).toBeInTheDocument();
    const overview = screen.getByText("A test movie about testing");
    expect(overview).toBeInTheDocument();
    const rating = screen.getByText("7.5");
    expect(rating).toBeInTheDocument();
    const votes = screen.getByText("10,000");
    expect(votes).toBeInTheDocument();
    const addToWishlistButton = screen.getByText("Add to Wishlist");
    expect(addToWishlistButton).toBeInTheDocument();
  });

  it("dispatches addToWatchlist action when Add to Wishlist button is clicked", async () => {
    store.getState().movies.isLoading = false;
    render(
      <Provider store={store}>
        <Movie />
      </Provider>
    );
    const addToWishlistButton = screen.getByText("Add to Wishlist");
    fireEvent.click(addToWishlistButton);
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: "ADD_TO_WATCHLIST",
          payload: {
            id: 123,
            title: "Test Movie",
            release_date: "2022-01-01",
            runtime: 120,
            genres: [{ name: "Action" }, { name: "Adventure" }],
            overview: "A test movie about testing",
            vote_average: 7.5,
            vote_count: 10000,
            poster_path: "/poster.jpg",
            category: undefined,
          },
        })
      );
    });
  });

  it("renders Remove Wishlist button and dispatches removeFromWatchlist action when movie is in watchlist", async () => {
    store.getState().movies.watchlistIds = [123];
    store.getState().movies.isLoading = false;
    render(
      <Provider store={store}>
        <Movie />
      </Provider>
    );
    const removeWishlistButton = screen.getByText("Remove Wishlist");
    expect(removeWishlistButton).toBeInTheDocument();
    fireEvent.click(removeWishlistButton);
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: "REMOVE_FROM_WATCHLIST",
          payload: {
            id: 123,
            title: "Test Movie",
            release_date: "2022-01-01",
            runtime: 120,
            genres: [{ name: "Action" }, { name: "Adventure" }],
            overview: "A test movie about testing",
            vote_average: 7.5,
            vote_count: 10000,
            poster_path: "/poster.jpg",
          },
        })
      );
    });
  });
});