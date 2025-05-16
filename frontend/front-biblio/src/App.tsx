import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './componentes/Nav';
import FormularioEditorial from './FormularioEditorial';

import './App.css'

const App:React.FC=()=> {
 

  return (
    <>
      <div>

        <Router>
          <Nav></Nav>
            <Routes>
              <Route path="/FormularioEditorial" element={<FormularioEditorial />} />

               <Route> </Route>

            </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
