// Importa i fogli di stile di Bootstrap e personalizzati per l'applicazione
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Importa i componenti React necessari per la navigazione e la struttura dell'app
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favorites from "./components/Favorites";

// Importa il React Router e il provider di Redux
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Importa lo store di Redux creato per l'app
import store from "./store/store";

// Funzione principale dell'app
function App() {
  return (
    // Fornisci lo store di Redux a tutta l'app con il componente Provider
    <Provider store={store}>
      {/* Utilizza il componente BrowserRouter per abilitare la navigazione */}
      <BrowserRouter>
        {/* Definisci le rotte dell'app con il componente Routes */}
        <Routes>
          {/* Rotta per la pagina principale di ricerca */}
          <Route path="/" element={<MainSearch />} />
          {/* Rotta per la pagina dei risultati della ricerca per azienda */}
          <Route path="/:company" element={<CompanySearchResults />} />
          {/* Rotta per la pagina dei preferiti */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

// Esporta il componente App per l'utilizzo nell'entry point dell'applicazione
export default App;
