import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

// Componente per visualizzare i risultati della ricerca per azienda
const CompanySearchResults = () => {
  // Stato per memorizzare i lavori ottenuti dalla ricerca
  const [jobs, setJobs] = useState([]);
  
  // Ottenere i parametri dalla route (in questo caso, il nome dell'azienda)
  const params = useParams();

  // URL di base per l'endpoint API
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  // Effetto che si attiva all'avvio del componente
  useEffect(() => {
    // Chiamata alla funzione per ottenere i lavori in base ai parametri
    getJobs();
  }, []); // L'array vuoto come dipendenza significa che l'effetto viene eseguito solo all'avvio del componente

  // Funzione asincrona per ottenere i lavori dall'API
  const getJobs = async () => {
    try {
      // Chiamata API usando l'URL di base e il nome dell'azienda dai parametri
      const response = await fetch(baseEndpoint + params.company);
      
      // Se la chiamata è riuscita (status 200 OK)
      if (response.ok) {
        // Estrarre i dati JSON dalla risposta
        const { data } = await response.json();
        // Aggiornare lo stato con i dati dei lavori ottenuti
        setJobs(data);
      } else {
        // Se la chiamata non è riuscita, mostrare un avviso
        alert("Error fetching results");
      }
    } catch (error) {
      // Gestire gli errori, ad esempio, stampandoli sulla console
      console.log(error);
    }
  };

  // Renderizzazione del componente
  return (
    <Container>
      <Row>
        <Col className="my-3">
          {/* Titolo della pagina con il nome dell'azienda dai parametri */}
          <h1 className="display-4">Job posting for: {params.company}</h1>
          
          {/* Mappare e renderizzare i dati dei lavori */}
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

// Esporta il componente per l'uso altrove
export default CompanySearchResults;
