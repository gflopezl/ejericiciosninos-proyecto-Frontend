import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registro from "./Registro";
import Consejo from "./Consejo";
import Bienvenida from "./Bienvenida";
import PosturaMontana from "./PosturaMontana";
import Recompensa from "./Recompensa";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/consejo" element={<Consejo />} />
      <Route path="/bienvenida" element={<Bienvenida />} />
      <Route path="/posturamontana" element={<PosturaMontana />} />
      <Route path="/recompensa" element={<Recompensa />} />  
    </Routes>
  );
}

export default App;




