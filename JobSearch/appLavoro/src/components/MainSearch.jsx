import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Job from "./Job";

// Componente principale per la ricerca di lavori
const MainSearch = () => {
  // Stati per memorizzare la query di ricerca e i risultati dei lavori
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  // Hook di React Router per la navigazione
  const navigate = useNavigate();

  // URL di base per l'endpoint API
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // Gestisce il cambiamento della query di ricerca
  const handleChange = e => {
    setQuery(e.target.value);
  };

  // Gestisce l'invio del modulo di ricerca
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Chiamata API per ottenere i risultati dei lavori in base alla query
      const response = await fetch(baseEndpoint + query + "&limit=20");
      
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

  // Renderizza il componente
  return (
    <Container>
      <Row>
        {/* Colonna per l'intestazione e il link ai preferiti */}
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">JobQuest</h1>
          {/* Pulsante/link per navigare alla pagina dei preferiti */}
          <Button variant="outline-dark" onClick={() => navigate("/favorites")}>I tuoi preferiti</Button>
        </Col>
        {/* Colonna per il modulo di ricerca */}
        <Col xs={10} className="mx-auto">
          {/* Form per la ricerca, con gestione dell'invio del modulo */}
          <Form onSubmit={handleSubmit}>
            {/* Campo di input per la ricerca */}
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Digita qui i tuoi sogni professionali e premi INVIO" />
          </Form>
        </Col>
        {/* Colonna per mostrare i risultati dei lavori */}
        <Col xs={10} className="mx-auto mb-5">
          {/* Mappa e renderizza i dati dei lavori */}
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

// Esporta il componente per l'uso altrove
export default MainSearch;
