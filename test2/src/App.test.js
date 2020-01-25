import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from "./components/Display"
import Dashboard, { addStrike } from "./components/Dashboard";

it("renders without crashing", () => {
  render(<Display />, <Dashboard />, <App />);
});

it("do buttons render", () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId("buttons-id"); 
});

it("does header render", () => {
  const { findByText } = render(<App />);
  findByText(/baseball score board/i);
});

it("adding 1 to strike", () => {
  const currentStrikes = 0;
  const expected = 1;
  const actual = addStrike(currentStrikes);
  expect(actual).toBe(expected);
});