import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../actions/favoriteActions'

// Componente per visualizzare i dettagli di un lavoro
const Job = ({ data }) => {
  // Ottenere il dispatcher dalla libreria Redux per inviare azioni
  const dispatch = useDispatch()

  // Renderizza il componente
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      {/* Colonna per il pulsante "Aggiungi preferito" e il nome dell'azienda */}
      <Col xs={3}>
        {/* Pulsante per aggiungere il lavoro ai preferiti */}
        <Button 
          variant="outline-danger"
          onClick={() => dispatch(addFavorite(data.title))}
        >
          Aggiungi preferito
        </Button>
        {/* Link al percorso associato all'azienda del lavoro */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      {/* Colonna per il titolo del lavoro con link esterno */}
      <Col xs={9}>
        {/* Link esterno al sito del lavoro */}
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

// Esporta il componente per l'uso altrove
export default Job;
