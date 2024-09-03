import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

const App = () => {

  const username = useSelector(store => {
    return store.user.name
  });

  return(
  <>
    <BrowserRouter>
      <Container className="epizon-container">
        <Row>
          <Col className="text-center background-div">
            <Link to="/">
              <h1>Epizon Book Store</h1>
            </Link>
            <div>

              {

                username !== '' ? (  <p> Ciao, <b> {username}! </b></p>) : ('')

              }
            </div>
          </Col>
          <CartIndicator />
        </Row>
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>


  </>
)
}

export default App
