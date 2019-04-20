// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from "react-testing-library"; // REACT
import "jest-dom/extend-expect";
import App from './App';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div); // TIP: UNMOUNT WHEN FINISHED SO AS NOT TO INTERFERE WITH THE NEXT TEST!
});

it('renders App without crashing', () => {
  render(<App />); // HIDDEN ASSERTION: THIS IS BEING UNMOUNTED AUTOMATICALLY
});

// GET BY TEXT
it('displays hello world', () => {
  const { getByText } = render(<App />);
  getByText(/HELLO, World/i); // REGULAR EXPRESSION TO IGNORE TEXT CASE
});

// QUERY BY TEXT DOES NOT AUTO-FAIL
it('displays hello world (query by text)', () => {
  const { queryByText } = render(<App />);
  const text = queryByText(/Hello, World/i); 
  expect(text).toBeInTheDocument(); // FUNCTION FROM JEST-DOM
});

test("greeting is displayed when `greet button` is clicked", () => {
  // CHECK THAT PAGE RENDERS
  const { getByText } = render(<App />);
  // FIND THE BUTTON
  const button = getByText(/greet/i);
  // CLICK THE BUTTON
  fireEvent.click(button);
  // FIND THE GREETING 
  getByText(/hello, web STUDENTS/i);
})