import React from "react";
import { Container, Card, Button } from "react-bootstrap";


const Inicio: React.FC = () => {
    const libros = [
        {
            titulo: "Cien años de soledad",
            enlace: "https://example.com/cien-anos-soledad"
        },
        {
            titulo: "Don Quijote de la Mancha",
            enlace: "https://example.com/quijote"
        },
        {
            titulo: "1984",
            enlace: "https://example.com/1984"
        },
        {
            titulo: "El Principito",
            enlace: "https://example.com/principito"
        }
    ];
    const agregarLibro = () => {
        
        window.location.href = "/FormularioLibros";
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Libros Disponibles</h2>
            
            <div className="d-grid gap-3">
                {libros.map((libro, index) => (
                    <Card key={index}>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <span>{libro.titulo}</span>
                            <Button 
                                variant="primary" 
                                href={libro.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Leer
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <div className="mt-4">
                <Button onClick={agregarLibro} variant="success">
                    Agregar Nuevo Libro
                </Button>
            </div>
        </Container>
    );
};

export default Inicio;