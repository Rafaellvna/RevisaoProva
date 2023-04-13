import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecalho from "./Cabecalho";

const Pagina = (props) => {
    return (
        <div>

            <Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            <Container>
                {props.children}
            </Container>

            <div className='bg-secondary position-fixed bottom-0 py-3 text-white text-center' style={{ width: '100%' }}>
                <p>Todos os direitos reservados</p>
            </div>

        </div>
    )
}
export default Pagina