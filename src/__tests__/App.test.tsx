import React from "react";
import { render } from "../utils/utils";
import App from "../App";
import Search from "../components/Search";
import userEvent from "@testing-library/user-event";

test("renders app correctly", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter city name and press search button/i);
  expect(linkElement).toBeInTheDocument();
});

test("testing input searching", () => {
  const { getByPlaceholderText, getByRole } = render(
    <Search title='Enter city name and press search button' />
  );
  const input = getByPlaceholderText("Enter city name") as HTMLInputElement;
  const button = getByRole("button", { name: /Search/i });
  userEvent.type(input, "London");
  expect(input.value).toBe("London");
  userEvent.click(button);
});
