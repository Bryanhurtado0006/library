import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormularioLibros: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('')
    const [autor, setAutor] = useState<string>('')
    const [anio_publicacion, setAnio_publicacion] = useState<number>(0)

    const cambiarTitulo = (valor: string) => { setTitulo(valor) }
    const cambiarAutor = (valor: string) => { setAutor(valor) }
    const cambiarAnio = (valor: string) => { 
        const num = parseInt(valor) || 0
        setAnio_publicacion(num)
    }
    
    const guardar = () => {
        fetch('http://localhost:5800/crearLibro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                titulo: titulo,
                autor: autor,
                anio_publicacion: anio_publicacion
            }),
        })
    }

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Crear Libro</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el título del libro"
                                value={titulo}
                                onChange={(e) => cambiarTitulo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAutor">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el autor"
                                value={autor}
                                onChange={(e) => cambiarAutor(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAnio">
                            <Form.Label>Año de publicación</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ingrese el año de publicación"
                                value={anio_publicacion}
                                onChange={(e) => cambiarAnio(e.target.value)}
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

export default FormularioLibros;