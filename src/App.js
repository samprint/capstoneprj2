import './App.css';
import Nav from "./components/Nav";
// import Footer from "./components/CallToAction";
// import Footer from "./components/Specilas";
// import Footer from "./components/Testimonials";
// import Footer from "./components/Chicago";
import Footer from "./components/Footer";
// import Footer from "./components/Reservation";

function App() {
  return (
    <div className="app">
      <Nav />
      {/* <CallToAction />
      <Specials />
      <Testimonials />
      <Chicago /> */}
      <Footer />
      {/* <Reservation /> */}
    </div>
  );
}
export default App;
