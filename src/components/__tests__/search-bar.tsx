import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchBar from "../search-bar";
import { Provider } from "react-redux";
import store from "store";

test("search bar should render successfully", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const inputEl = screen.getByPlaceholderText(/type a restaurant name here/i);

  expect(inputEl).toBeInTheDocument();
});

test("change value with onchange event", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const inputEl = screen.getByPlaceholderText(/type a restaurant name here/i);

  fireEvent.change(inputEl, {
    target: { value: "Dhaka" },
  });

  expect(inputEl.getAttribute("value")).toBe("Dhaka");
});

test("auto complete drop down should not render initially", async () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const autoComplete = screen.getByTestId("auto-complete");

  expect(autoComplete).not.toHaveClass("ant-select-open");
});

test("auto complete drop down should render with change event", async () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const inputEl = screen.getByPlaceholderText(/type a restaurant name here/i);

  fireEvent.change(inputEl, {
    target: { value: "Dhaka" },
  });

  const autoComplete = screen.getByTestId("auto-complete");

  waitFor(() => {
    expect(autoComplete).toHaveClass("ant-select-open");
  });
});
