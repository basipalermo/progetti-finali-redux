import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './redux/store/store.jsx';

// Ottieni l'elemento root dal DOM
const rootElement = document.getElementById('root');

// Crea un "root" React usando createRoot, che è necessario per la modalità di rendering concurrent
const root = createRoot(rootElement);

// Rende l'applicazione all'interno del provider Redux per condividere lo store con tutti i componenti
root.render(
  <Provider store={store}>
    {/* Il componente principale dell'applicazione */}
    <App />
  </Provider>
);
