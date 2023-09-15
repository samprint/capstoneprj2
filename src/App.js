import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      {/* <HomePage /> */}

      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/reservation"element={<BookingPage />}/>
      </Routes>

      <Footer />
      {/* <Reservation /> */}
    </div>
  );
}
export default App;
