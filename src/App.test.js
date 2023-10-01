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

// First name and last name same logic 
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
  expect(screen.queryByText("Type 3 characters at least for first name")).toBeInTheDocument();
});

test('If the first name is receiving the right info, the error message will not be shown', ( ) => {

  const firstName = "Pal";

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
  expect(screen.queryByText("Type 3 characters at least for first name")).not.toBeInTheDocument();
});

// Test Email 
test('If the email is receiving the wrong info, the error message will be shown', ( ) => {

  const email = "hh";

  render (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const inputEmail = screen.getByTestId("email-input");
    fireEvent.blur(inputEmail);
    userEvent.type(inputEmail, email);
    // fireEvent.change(inputFirstName, { target: {value: email}})
  
  expect(screen.getByTestId("email-input")).toHaveValue(email);
  expect(screen.queryByText("Enter a valid email")).toBeInTheDocument();
});

test('If the email is receiving the right info, the error message will be not shown', ( ) => {

  const email = "hh@ee";

  render (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  const inputEmail = screen.getByTestId("email-input");
    fireEvent.blur(inputEmail);
    userEvent.type(inputEmail, email);
    // fireEvent.change(inputFirstName, { target: {value: email}})
  
  expect(screen.getByTestId("email-input")).toHaveValue(email);
  expect(screen.queryByText("Enter a valid email")).not.toBeInTheDocument();
});

// Test submit button and message
test('In case all fields are alright, the submit button is enables and not message under submit button', ( ) => {

  let today_date = new Date(); 
    today_date = today_date - (today_date.getTimezoneOffset() * 60000);
    today_date = (new Date(today_date)).toISOString().split('T')[0]; 

  // Valid values for form fields
  const date = today_date ;
  const time = "11:00"; // available initial option for taday date since time are random if not for today
  const guestsNumber = "6";
  const firstName = "Paul";
  const lastName = "lezo";
  const email = "hh@ee";
  const phone = "6045146235";

  render (
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

    const inputDate           = screen.getByTestId("date-input");
    const inputTime           = screen.getByTestId("time-input");
    const inputGuestsNumber   = screen.getByTestId("guestsNumber-input");
    const inputFirstName      = screen.getByTestId("firstName-input");
    const inputLastName       = screen.getByTestId("lastName-input");
    const inputEmail          = screen.getByTestId("email-input");
    const inputPhone          = screen.getByTestId("phone-input");

    const submitButton        = screen.getByTestId("submit-button");

    fireEvent.blur(inputDate);
    userEvent.type(inputDate,           date);
    fireEvent.blur(inputTime);
    userEvent.selectOptions(inputTime,  time);
    fireEvent.blur(inputGuestsNumber);  
    userEvent.type(inputGuestsNumber,   guestsNumber);
    fireEvent.blur(inputFirstName);
    userEvent.type(inputFirstName,      firstName);
    fireEvent.blur(inputLastName);
    userEvent.type(inputLastName,       lastName);
    fireEvent.blur(inputEmail);
    userEvent.type(inputEmail,          email);
    fireEvent.blur(inputPhone);
    userEvent.type(inputPhone,          phone);
  
    expect(screen.getByTestId("date-input")).toHaveValue(date);
    expect(screen.getByTestId("time-input")).toHaveValue(time);
    expect(screen.getByTestId("guestsNumber-input")).toHaveValue(Number(guestsNumber));
    expect(screen.getByTestId("firstName-input")).toHaveValue(firstName);
    expect(screen.getByTestId("lastName-input")).toHaveValue(lastName);
    expect(screen.getByTestId("email-input")).toHaveValue(email);
    expect(screen.getByTestId("phone-input")).toHaveValue(phone);

    expect(screen.queryByText("All fields should be filled")).not.toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).not.toHaveAttribute("disabled")
});