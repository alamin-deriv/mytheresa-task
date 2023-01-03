import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import React from "react";
import MovieCard from "./../pages/tabs/MovieCard";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn()
}));

test("renders movie card", async () => {
  const movie = {
    id: 1,
    original_title: "Movie 1",
    poster_path: "/poster1.jpg",
    vote_average: 8.5,
    genres: [
      { id: 1, name: "Genre 1" },
      { id: 2, name: "Genre 2" },
    ],
    release_date: "2022-01-01",
  };
  const { getByText } = render(<MovieCard movie={movie} genres={movie.genres} />);

  await waitFor(() => getByText("Movie 1"));
  expect(screen.getByText("Movie 1")).toBeInTheDocument();
  expect(screen.getByText("8.5 / 10")).toBeInTheDocument();
});

