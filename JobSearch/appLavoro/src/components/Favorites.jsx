import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";

// Componente per visualizzare la lista dei preferiti
const Favorites = () => {
    // Ottieni il dispatcher dalla libreria Redux per inviare azioni
    const dispatch = useDispatch();
    // Ottieni la lista dei preferiti dallo stato globale tramite Redux
    const favorites = useSelector(state => state.list);
    // Hook di React Router per la navigazione
    const navigate = useNavigate();

    // Renderizza il componente
    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ marginBottom: '40px', marginTop: '20px' }}>I tuoi Preferiti</h1>
                    {/* Pulsante per tornare alla Home */}
                    <Button variant="outline-dark" onClick={() => navigate("/")}>Ritorna alla Home</Button>
                </Col>
                <Col style={{ marginTop: '90px' }}>
                    <ListGroup>
                        {/* Verifica se ci sono preferiti da mostrare */}
                        {favorites.length > 0 ? (
                            // Mappa la lista dei preferiti e renderizza ogni elemento
                            favorites.map((fav, index) => (
                                <ListGroup.Item key={index}>
                                    {/* Pulsante per rimuovere un preferito, inviando un'azione Redux */}
                                    <Button variant="outline-danger" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: fav })} style={{ marginRight: '20px' }}>Elimina</Button>
                                    {/* Mostra il nome del preferito */}
                                    {fav}
                                </ListGroup.Item>
                            ))
                        ) : (
                            // Messaggio se la lista dei preferiti è vuota
                            <ListGroup.Item>Oh no, il cassetto dei preferiti è vuoto! Aggiungi qualcosa di bello.</ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

// Esporta il componente per l'uso altrove
export default Favorites;
