import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';

//  This test passed
//  Testing for  static text
test('Looking for a specific heading in BookingForm', ( ) => {
  render (
    <BrowserRouter>
      <BookingForm   />
    </BrowserRouter>
  );

  const element = screen.getByText("Kindly fill the form to book a table")
  expect(element).toBeInTheDocument();
});

// This test didn't pass yet 
//  Testing for  html and javascript validations
test('If any of the fields of the form is not filled the submit button will be disabled', ( ) => {

  const firstName = "sa";

  render (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const inputFirstName = screen.getByTestId("firstName-input");
  // userEvent.type(inputFirstName, "sa");
  fireEvent.change(inputFirstName, { target: {value: "sa"}})

  expect(screen.getByTestId("firstName-input")).toHaveValue("sa");
});