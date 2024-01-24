import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions";

// Stato iniziale del tuo reducer
const initialState = {
    list: []
};

// Reducer per la gestione delle azioni relative ai preferiti
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        // Azione per aggiungere un preferito
        case ADD_FAVORITE:
            return {
                ...state,
                // Aggiungi il payload (titolo del lavoro) alla lista dei preferiti
                list: [...state.list, action.payload]
            };
        // Azione per rimuovere un preferito
        case REMOVE_FAVORITE:
            return {
                ...state,
                // Filtra la lista dei preferiti rimuovendo l'elemento corrispondente al payload (titolo del lavoro)
                list: state.list.filter((fav) => fav !== action.payload)
            };
        // Azione di default (nessuna corrispondenza con i tipi di azione noti)
        default:
            return state;
    }
};

// Esporta il tuo reducer per l'utilizzo in altri file
export default favoritesReducer;
