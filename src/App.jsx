import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route } from 'react-router'
import Navbarcake from './components/Navbarcake'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound';

const App = () => {

  return (
    <>
      <Container>
        <Row className='bg-warning'>
            <Col className='text-light'>
              <Navbarcake/>
            </Col>
        </Row>
        <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default App