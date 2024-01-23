import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CitySelector from './components/CitySelector';
import WeatherInfo from './components/WeatherInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NightModeSwitch from './components/NightModeSwitch';
import { selectNightMode } from '../src/redux/slices/appSlice';


/**
 * Il componente App è il componente principale dell'applicazione.
 * Gestisce lo stato della modalità notturna e presenta il selettore della città
 * e le informazioni meteorologiche in un contenitore.
 */

function App() {
    // Ottieni lo stato della modalità notturna dallo store Redux utilizzando useSelector
  const nightMode = useSelector(selectNightMode);
  // Stato locale per la città selezionata dall'utente
  const [selectedCity, setSelectedCity] = React.useState(null);

  return (
     // Il contenitore principale con classi dinamiche basate sullo stato di nightMode
    <div className={`App ${nightMode ? 'night-mode' : ''}`}>
      <NightModeSwitch />
      <Container>
        <CitySelector onSelectCity={setSelectedCity} />
        {selectedCity && <WeatherInfo city={selectedCity} />}
      </Container>
    </div>
  );
}

export default App;

