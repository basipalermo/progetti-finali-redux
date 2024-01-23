import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

// Componente funzionale per la selezione della città
function CitySelector({ onSelectCity }) {
  // Stato locale per gestire l'input dell'utente
  const [city, setCity] = useState('');

  // Gestisce il cambio dell'input dell'utente
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Invoca la funzione di callback per comunicare la città selezionata all'esterno
  const handleSelectCity = () => {
    onSelectCity(city);
  };

  // Ottiene la data corrente con il formato specificato
  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  // Rendering del componente
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vh' }}>
      {/* Form per la ricerca della città */}
      <Form style={{ width: '44%' }}>
        <InputGroup>
          {/* Mostra la data corrente sopra l'input */}
          <InputGroup.Text>{getCurrentDate()}</InputGroup.Text>
          {/* Input per la ricerca della città */}
          <Form.Control
            type="text"
            placeholder="Ricerca città, svela il clima!"
            value={city}
            onChange={handleCityChange}
            style={{ outline: 'none', boxShadow: 'none' }}
          />
          {/* Pulsante per avviare la ricerca della città */}
          <Button variant="dark" onClick={handleSelectCity}>
            <span role="img" aria-label="Search">&#128269;</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

// Esporta il componente per l'utilizzo in altri moduli
export default CitySelector;

