import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './componentes/Nav';
import FormularioEditorial from './FormularioEditorial';
import FormularioLibros from "./FormularioLibros";
import Inicio from "./Inicio";


import './App.css'

const App:React.FC=()=> {
 

  return (
    <>
      <div>

        <Router>
          <Nav></Nav>
            <Routes>
              <Route path="/FormularioEditorial" element={<FormularioEditorial />} />
              <Route path="/FormularioLibros" element={<FormularioLibros/>}/>
              <Route path="/Inicio" element={<Inicio/>}/>

               

            </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
