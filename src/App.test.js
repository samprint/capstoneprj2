import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';

//  This test passed

// testing for static test
test('Renders the ConfirmBooking heading', () => {
  render(
      <ConfirmedBooking 
          formData
      />
  );
  const element = screen.getByText("Your reservation is confirmed!, an email was sent to");
  expect(element).toBeInTheDocument();
});

// testing that the initializeTimes function returns the correct expected value
// test("Testing that the initializeTimes function returns the correct expected value", () => {
//   render(
//     <BrowserRouter>
//       <BookingPage {...initializeTimes}/>
//     </BrowserRouter>
//   );
//   expect(initializeTimes).toBe(
//     [
//       {id:0,time:"", available: false},
//       {id:1,time:"08:00", available: false},
//       {id:2,time:"09:00", available: false},
//       {id:3,time:"10:00", available: false},
//       {id:4,time:"11:00", available: false},
//       {id:5,time:"12:00", available: false},
//       {id:6,time:"13:00", available: false},
//       {id:7,time:"14:00", available: false},
//       {id:8,time:"15:00", available: false},
//       {id:9,time:"16:00", available: false},
//       {id:10,time:"17:00", available: false},
//       {id:11,time:"18:00", available: false},
//       {id:12,time:"19:00", available: false},
//       {id:13,time:"20:00", available: false},
//       {id:14,time:"21:00", available: false},
//       {id:15,time:"22:00", available: false},
//   ]
//   )

// })