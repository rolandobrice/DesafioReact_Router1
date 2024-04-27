import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <>
            <Container className="text-center p-5">
                <Row>
                    <Col className='p-4'>
                        <h1>Bienvenido a <b className='text-warning'>H</b>
                        <b className='text-danger'>a</b>
                        <b className='text-info'>p</b>
                        <b className='text-success'>p</b>
                        <b className='text-primary'>y</b> <b className='text-warning'>C</b>
                        <b className='text-danger'>a</b>
                        <b className='text-info'>k</b>
                        <b className='text-success'>e</b>
                        </h1>
                        <p>El lugar de los pasteles felices</p>
                        <h1>🎂</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home