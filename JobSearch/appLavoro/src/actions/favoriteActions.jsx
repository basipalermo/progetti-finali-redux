// Questo file contiene le azioni per la gestione dei preferiti

// Costanti che rappresentano i tipi di azioni disponibili
export const ADD_FAVORITE = 'ADD_FAVORITE';       // Azione per aggiungere un elemento ai preferiti
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'; // Azione per rimuovere un elemento dai preferiti

// Azione per aggiungere un elemento ai preferiti
export const addFavorite = (title) => {
    return {
        type: ADD_FAVORITE,     // Tipo di azione: aggiungi preferito
        payload: title          // Dati aggiunti all'azione, in questo caso il titolo dell'elemento
    }
}

// Azione per rimuovere un elemento dai preferiti
export const removeFavorite = (title) => {
    return {
        type: REMOVE_FAVORITE,  // Tipo di azione: rimuovi preferito
        payload: title          // Dati aggiunti all'azione, in questo caso il titolo dell'elemento
    }
}
