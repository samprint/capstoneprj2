import { render, screen, within } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

test('Renders the BookingForm heading', () => {
  render(
    <BrowserRouter>
      <BookingForm 
          // Reducer stuff...
          availableTimes
          dispatch

          // data filled by user of the app and their setters
          date
          setDate
          time
          setTime
          guestsNumber
          setGuestsNumber
          occasion
          setOccasion
          firstName
          setFirstName
          lastName
          setLastName
          email
          setEmail
          phone
          setPhone

          // is touched data and their setters
          dateIsTouched
          guestsNumberIsTouched
          firstNameIsTouched
          lastNameIsTouched
          emailIsTouched
          phoneIsTouched
          setDateIsTouched
          setGuestsNumberIsTouched
          setFirstNameIsTouched
          setLastNameIsTouched
          setEmailIsTouched
          setPhoneIsTouched

          // the data that will be summitted
          formData
          setFormData

          // submit function and response
          submitForm
          response

          // clearing the form after a successfull submit
          clearForm
      />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Please, enter your info here");
  expect(headingElement).toBeInTheDocument();
});
