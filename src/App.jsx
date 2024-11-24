import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Ajuda from "./pages/Ajuda";
import Modelos from "./pages/Modelos";
import Planos from "./pages/Planos";
import Backoffice from "./pages/Backoffice";
import Cliente from "./pages/Cliente";

function App() {
  const location = useLocation();

  // Verifica o token no localStorage
  const token = localStorage.getItem('authenticated');

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

        {/* Verifica o token antes de acessar o Backoffice */}
        <Route
          path="/backoffice"
          element={token ? <Backoffice /> : <Navigate to="/" />}
        />

        <Route
          path="/clientes"
          element={token ? <Cliente /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
