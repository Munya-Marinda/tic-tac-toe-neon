// Counter.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Counter from "../src/components/Counter";

test("Counter increments correctly", () => {
  const { getByText } = render(<Counter />);

  // Initially, the count should be 0
  expect(getByText("Count: 0")).toBeTruthy();

  // Simulate a button click to increment the count
  fireEvent.press(getByText("Increment"));

  // After clicking the button, the count should be 1
  expect(getByText("Count: 2")).toBeTruthy();
});
