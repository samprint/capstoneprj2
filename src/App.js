import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import BookingForm from './components/BookingForm';
import ConfirmPage from './components/ConfirmPage';
// import ConfirmPage from './components/ConfirmPage';

import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/bookingpage"element={<BookingPage />}/>
            {/* <Route path="bookingform"element={<BookingForm />}/>
            <Route path="confirmpage"element={<ConfirmPage />}/> */}
            {/* <Route path="/confirm"element={<ConfirmPage />}/> */}
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
export default App;
