import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Ajuda from "./pages/Ajuda";
import Modelos from "./pages/Modelos";
import Planos from "./pages/Planos";

function App() {
  const location = useLocation();
  
 
  console.log("Current Path:", location.pathname);

  
  const showNavbar = ["/", "/Ajuda", "/Modelos", "/Planos"].includes(location.pathname);

  return (
    <div>
      
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Ajuda" element={<Ajuda />} />
        <Route path="/Modelos" element={<Modelos />} />
        <Route path="/Planos" element={<Planos />} />
      </Routes>
    </div>
  );
}

export default App;
