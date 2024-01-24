// Importa la funzione configureStore da @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importa il tuo reducer dei preferiti
import favoritesReducer from "../reducers/favoritesReducers";

// Configura lo store di Redux utilizzando configureStore
const store = configureStore({
    // Passa il tuo reducer dei preferiti come argomento al campo "reducer"
    reducer: favoritesReducer
});

// Esporta lo store configurato per l'utilizzo nell'applicazione
export default store;
