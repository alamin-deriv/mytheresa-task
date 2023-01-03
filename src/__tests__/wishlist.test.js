import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Wishlist from "./../pages/tabs/Wishlist";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import {
  wishlist
} from "./../../__mocks__/data";

const mockStore = configureMockStore();



describe("wishlist", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      movies: {
        wishlist,
      },
    });
  });

  it("renders empty state", async () => {
    store.getState().movies.wishlist = [];
    const { getByText } = render(
      <Provider store={store}>
        <Wishlist />
      </Provider>
    );

    await waitFor(() => getByText("No movie added to wishlist"));
    expect(screen.getByText("No movie added to wishlist")).toBeInTheDocument();
  });

});


