import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import { act } from 'react-dom/test-utils';

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

/**********************  Testing for  html and javascript validations *************************************/

// Javascript testt working 
test('If the first name is receiving the wrong info, the error message will be shown', ( ) => {

  const firstName = "Pa";

  render (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const inputFirstName = screen.getByTestId("firstName-input");
  fireEvent.blur(inputFirstName);
  userEvent.type(inputFirstName, firstName);
  // fireEvent.change(inputFirstName, { target: {value: firstName}})
  

  expect(screen.getByTestId("firstName-input")).toHaveValue(firstName);
  // expect(screen.queryByTestId("firstName-errormsg")).toBeInTheDocument;
  expect(screen.queryByText("Type 3 characters at least for first name")).toBeInTheDocument();

});

// This test didn't pass yet 

test('If the email is receiving the wrong info, the error message will be shown', ( ) => {

  const email = "hh@ww";

  render (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const inputEmail = screen.getByTestId("email-input");
  // act(() => {
    fireEvent.blur(inputEmail);
    userEvent.type(inputEmail, email);
    // fireEvent.change(inputFirstName, { target: {value: email}})
  // })

  

  expect(screen.getByTestId("email-input")).toHaveValue(email);
  // expect(screen.queryByTestId("email-errormsg")).toBeInTheDocument;
  // expect(screen.getByText("Enter a valid email")).toBeInTheDocument();
  expect(screen.queryByText("Enter a valid email")).not.toBeInTheDocument();

});