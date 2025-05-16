import React , {useState}  from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormularioEditorial:React.FC=()=>{
    const [nombre,setNombre]=useState <string>('')
    const [pais,setPais]=useState <string>('')
    const cambiarNombre=(valor:string)=>{setNombre(valor)}
    const cambiarPais=(pais:string)=>{setPais(pais)}
    const guardar=()=>{
        fetch ('http://localhost:5800/crearEdito', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({nombre:nombre,pais:pais}),
        })
    }

   return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Crear Editorial</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                value={nombre}
                onChange={(e) => cambiarNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPais">
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el país"
                value={pais}
                onChange={(e) => cambiarPais(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={guardar}>
              Guardar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};


export default FormularioEditorial;
