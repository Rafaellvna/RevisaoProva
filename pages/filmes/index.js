import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function index() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    apiFilmes.get('/movie/popular').then(resultado => {
      setFilmes(resultado.data.results)
    })
  }, [])

  return (
    <div>
      <Pagina titulo="Filmes Populares">
        <Container>
          <Row md={4}>
            {filmes.map(item => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text><b>Data: {item.release_date}</b> </Card.Text>
                    <Card.Text>Nota: {item.vote_average}</Card.Text>
                    <Button variant="primary">Detalhes</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Pagina>
    </div>
  )
}

export default index