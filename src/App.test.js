import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';

test('Renders the ConfirmBooking heading', () => {
  render(
      <ConfirmedBooking 
          formData
      />
  );
  const headingElement = screen.getByText("Your reservation is confirmed!, an email was sent to");
  expect(headingElement).toBeInTheDocument();
});
