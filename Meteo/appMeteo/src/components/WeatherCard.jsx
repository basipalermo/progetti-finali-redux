import React from 'react';
import { Card } from 'react-bootstrap';

// Componente per la visualizzazione di una carta delle informazioni meteorologiche
const WeatherCard = ({ title, value, unit }) => (
  // Utilizzo del componente Card di Bootstrap per la presentazione delle informazioni
  <Card style={{ marginLeft: '80px', margin: '10px', width: '60%' }}>
    {/* Corpo della carta con sfondo a gradiente e stile personalizzato */}
    <Card.Body style={{ background: 'linear-gradient(to right, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)', borderRadius: '5px', textAlign: 'center' }}>
      {/* Titolo della carta, rappresenta la categoria di informazioni */}
      <Card.Title>{title}</Card.Title>
      {/* Testo della carta, rappresenta il valore e l'unità di misura delle informazioni */}
      <Card.Text>{value !== null && `${value} ${unit}`}</Card.Text>
    </Card.Body>
  </Card>
);

// Esporta il componente per l'utilizzo in altri moduli
export default WeatherCard;
