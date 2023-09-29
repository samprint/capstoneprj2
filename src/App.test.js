import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';

//  This test passed

// Testing for static test
test('Renders the ConfirmBooking heading', () => {
  render(
      <ConfirmedBooking 
          formData
      />
  );
  const element = screen.getByText("Your reservation is confirmed!, an email was sent to");
  expect(element).toBeInTheDocument();
});

//  Testing for 