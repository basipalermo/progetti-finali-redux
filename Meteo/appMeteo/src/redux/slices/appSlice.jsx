// Questo file definisce uno slice Redux per la gestione del "night mode" nell'applicazione.
// Uno slice è una parte dello stato globale di Redux, che include uno stato iniziale,
// azioni per modificare lo stato e un reducer per gestire tali azioni.

// Importazione della funzione createSlice da @reduxjs/toolkit

import { createSlice } from '@reduxjs/toolkit';

// Creazione di uno slice Redux chiamato 'app'
const appSlice = createSlice({
   // Nome dello slice, utile quando si combinano più slice in uno store
  name: 'app',
 // Stato iniziale dell'applicazione, contiene le variabili di stato
 initialState: {
  // Variabile che rappresenta lo stato del "night mode", inizializzato a false
  nightMode: false,
},

// Reducer per gestire le azioni, specificate come oggetto nel campo 'reducers'
reducers: {
  // Azione per invertire lo stato del "night mode"
  toggleNightMode: (state) => {
    // Inverti il valore booleano di nightMode quando viene chiamata questa azione
    state.nightMode = !state.nightMode;
  },
},
});

// Esportazione delle azioni create dallo slice, inclusa la funzione toggleNightMode
export const { toggleNightMode } = appSlice.actions;

// Selettore per ottenere lo stato del "night mode" dall'applicazione
export const selectNightMode = (state) => state.app.nightMode;

// Esportazione del reducer generato dallo slice, gestisce le azioni definite in 'reducers'
export default appSlice.reducer;
