import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

//  This test passed
//  Testing for  static text
test('Looking for a specific heading in BookingForm', ( ) => {
  render (
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  const element = screen.getByText("Kindly fill the form to book a table")
  expect(element).toBeInTheDocument();
});

// This test didn't pass yet 
//  Testing for  html and javascript validations