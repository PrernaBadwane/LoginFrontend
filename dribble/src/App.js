import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import CreateProfile from "./components/CreateProfile";
import Details from "./components/Details";
import Verification from "./components/Verification";
import Navbar from "./components/Navbar";
import ShowComponent from "./components/ShowComponent";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ShowComponent>
        <Navbar />
      </ShowComponent>

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>

      <ShowComponent>
        <Footer />
      </ShowComponent>
    </div>
  );
}

export default App;
