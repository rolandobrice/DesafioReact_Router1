import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <>
        <Form className="text-center p-5">
            <Row>
                <Col className='p-3'>
                        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
                        <p>correo:</p>
                        <input type="email" placeholder='name@example.com' className="w-75"/>
                        <p className='p-1'>Descripción</p>
                        <Form.Control as="textarea" style={{ height: '100px' }}/>
                        <Button variant="warning" className='m-3' >Enviar</Button>
                </Col>
            </Row>
        </Form> 
    </>
    )
}

export default Contact