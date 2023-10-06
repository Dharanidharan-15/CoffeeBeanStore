import "./themes/colors/colors.css";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/other/menu";
import About from "./pages/about";
import ContactUs from "./pages/contactpage";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/shop" exact Component={Menu} />
          <Route path="/about" exact Component={About} />
          <Route path="/content" exact Component={ContactUs} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
