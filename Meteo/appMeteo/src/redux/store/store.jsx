// Questo file configura uno store Redux, che è il contenitore globale per lo stato dell'applicazione.
// L'utilizzo di Redux semplifica la gestione dello stato in applicazioni complesse.

// Importazione della funzione configureStore da @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importazione del reducer radice (rootReducer) che combina tutti i reducer della tua applicazione
import rootReducer from '../reducers/rootReducer';

// Configurazione dello store Redux con il rootReducer
const store = configureStore({
  // Il rootReducer è il punto di ingresso per lo stato gestito da Redux
  reducer: rootReducer,
});

// Esportazione dello store configurato per l'utilizzo nell'applicazione
export default store;
