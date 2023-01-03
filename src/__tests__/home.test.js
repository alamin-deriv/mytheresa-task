import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Home from "./../pages/";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../redux/root-reducer";
const store = createStore(rootReducer);

test("renders Movies list Tab", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  await waitFor(() => getByText("Movies list"));
  expect(screen.getByText("Movies list")).toBeInTheDocument();
});

test("renders Wishlist Tab", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  await waitFor(() => getByText("Wishlist"));
  expect(screen.getByText("Wishlist")).toBeInTheDocument();
});

test("renders loading state", async () => {
  render(
    <Provider store={store}>
      <Home loading={true} />
    </Provider>
  );

  expect(screen.getByTestId("loader")).toBeInTheDocument();
});

