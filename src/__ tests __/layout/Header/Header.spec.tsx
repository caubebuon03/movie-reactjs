import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../../components/Layout/Header/Header";
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';
test("renders header component", () => {
  render(
    <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
  <Header />
  </BrowserRouter>
  </Provider>
  </StrictMode>
  );

  const searchButtonElement = screen.getByText("Search Movie");
  expect(searchButtonElement).toBeTruthy();

  fireEvent.click(searchButtonElement);
  expect(searchButtonElement).toBeTruthy();
});