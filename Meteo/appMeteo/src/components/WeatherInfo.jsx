import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import WeatherCard from './WeatherCard';
import WeatherChart from './WeatherChart';

// Componente per visualizzare le informazioni meteorologiche di una città
function WeatherInfo({ city }) {
  // Stato locale per gestire i dati meteorologici
  const [weatherData, setWeatherData] = useState(null);

  // Effetto collaterale per caricare i dati meteorologici quando cambia la città
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chiave API per OpenWeatherMap
        const apiKey = '9cc17e5d2924a7de4133da5d5cf2e6a3';
        // Costruzione dell'URL per la richiesta dei dati meteorologici
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        // Fetch dei dati dalla API di OpenWeatherMap
        const response = await fetch(apiUrl);

        // Gestione degli errori nel caso la richiesta fallisca
        if (!response.ok) {
          throw new Error('Errore nel recupero delle informazioni meteo');
        }

        // Parsing dei dati JSON ricevuti dalla API
        const data = await response.json();
        console.log(data);
        // Aggiornamento dello stato con i dati ricevuti
        setWeatherData(data);
      } catch (error) {
        // Gestione degli errori durante il fetch dei dati
        console.error(error);
      }
    };

    // Esegue il fetch dei dati solo se è specificata una città
    if (city) {
      fetchData();
    }
  }, [city]);

  // Rendering del componente
  return (
    <div>
      {/* Condizione: se ci sono dati meteorologici disponibili */}
      {weatherData ? (
        <>
          {/* Prima riga di informazioni meteorologiche */}
          <Row>
            <Col>
              {/* Componente WeatherCard per la temperatura */}
              <WeatherCard title="Temperature" value={weatherData.list[0].main.temp} unit="°C" />
            </Col>
            <Col>
              {/* Componente WeatherCard per le condizioni meteorologiche */}
              <WeatherCard title="Weather Conditions" value={weatherData.list[0].weather[0].description} unit="" />
            </Col>
          </Row>
          {/* Seconda riga di informazioni meteorologiche */}
          <Row>
            <Col>
              {/* Componente WeatherCard per l'umidità */}
              <WeatherCard title="Humidity" value={weatherData.list[0].main.humidity} unit="%" />
            </Col>
            <Col>
              {/* Componente WeatherCard per la velocità del vento */}
              <WeatherCard title="Wind Speed" value={weatherData.list[0].wind.speed} unit="m/s" />
            </Col>
          </Row>
          {/* Terza riga con un grafico delle previsioni meteorologiche */}
          <Row>
            <Col>
              {/* Componente WeatherChart per visualizzare un grafico delle previsioni */}
              <WeatherChart data={weatherData.list.slice(0, 5)} />
            </Col>
          </Row>
        </>
      ) : (
        // Se non ci sono dati disponibili, mostra un messaggio di caricamento
        <p>Accendendo i fulmini...</p>
      )}
    </div>
  );
}

// Esporta il componente per l'utilizzo in altri moduli
export default WeatherInfo;
