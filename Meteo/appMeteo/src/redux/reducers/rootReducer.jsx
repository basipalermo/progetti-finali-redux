import { combineReducers } from 'redux';
import appReducer from '../slices/appSlice';


/**
 * Il rootReducer combina tutti i riduttori dell'applicazione.
 * Attualmente, l'applicazione utilizza solo il riduttore 'appReducer' per gestire la modalità notturna.
 */
const rootReducer = combineReducers({
   // Il riduttore 'appReducer' gestisce lo stato relativo all'applicazione, incluso il nightMode.
  app: appReducer,
  });
// Esporta il rootReducer per utilizzarlo nello store Redux dell'applicazione.
export default rootReducer;
