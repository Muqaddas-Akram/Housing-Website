import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services";
import About from "./pages/About"
import Contact from "./pages/Contact"
import LogIn from "./pages/LogIn"
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
      </Routes>
        <Footer/>
    </Router>                                                                                                   
    </>
  )
}

export default App
