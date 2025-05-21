import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Nav: React.FC = () => {
  return (
    <Container className="my-3">
      <ul className="nav nav-pills">

        <li className="nav-item">
          <Link to="/FormularioEditorial" className="nav-link">Crear Editorial</Link>
        </li>

        <li className="nav-item">
          <Link to="/FormularioLibros" className="nav-link">Crear Libros</Link>
        </li>

         <li className="nav-item">
          <Link to="/Inicio" className="nav-link" >Inicio</Link>
         </li>
         <li className="nav-item">
          <Link to="/ListarEditorial" className="nav-link" >Listar Editorial</Link>
         </li>


      </ul>
    </Container>
  );
};

export default Nav;
