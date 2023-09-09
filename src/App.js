import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
// import Footer from "./components/Reservation";

function App() {
  return (
    <div className="app">
      <Nav />
      <HomePage />
      <Footer />
      {/* <Reservation /> */}
    </div>
  );
}
export default App;
