import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './componentes/Nav';
import FormularioEditorial from './FormularioEditorial';
import FormularioLibros from "./FormularioLibros";
import Inicio from "./Inicio";
import ListarEditorial from "./ListarEditorial";
import EditarEditoriales from "./componentes/EditarEditoriales";


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
              <Route path="/ListarEditorial" element={<ListarEditorial/>}/>
              <Route path="/EditarEditorial" element={<EditarEditoriales/>}/>

               

            </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
