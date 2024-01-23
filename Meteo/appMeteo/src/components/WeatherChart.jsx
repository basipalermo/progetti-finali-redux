import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Componente per la visualizzazione del grafico delle previsioni meteo
const WeatherChart = ({ data }) => {
  // Rendering del componente
  return (
    // Utilizzo di ResponsiveContainer per rendere il grafico responsive
    <ResponsiveContainer width="85%" height={300} style={{ margin: '10px'}}>
      {/* Creazione del grafico a linea con Recharts */}
      <LineChart data={data}>
        {/* Asse X che mostra le date delle previsioni meteo */}
        <XAxis dataKey="dt_txt" />
        {/* Asse Y per rappresentare i valori della temperatura */}
        <YAxis />
        {/* Mostra un tooltip informativo quando si passa sopra il grafico */}
        <Tooltip />
        {/* Linea del grafico rappresentante i valori della temperatura */}
        <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Esporta il componente per l'utilizzo in altri moduli
export default WeatherChart;
