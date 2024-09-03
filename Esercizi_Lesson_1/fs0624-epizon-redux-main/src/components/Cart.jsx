import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'

// se la prop "cart" non arriva, invece di assumere il valore "undefined" diventa []
// = [] è il valore di default

const Cart = ({ cart = [] }) => {
  const arrayOfBooks = useSelector((store) => store.cart.content)
  const dispatch = useDispatch()

  return (
    <>
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: 'none' }}>
            {arrayOfBooks.map((book, i) => (
              <li key={i} className="my-4">
                <Button variant="danger" onClick={() => {
                  dispatch(removeFromCartAction(i))
                }}>
                  <FaTrash />
                </Button>
                <img
                  className="book-cover-small"
                  src={book.imageUrl}
                  alt="book selected"
                />
                {book.title}
              </li>
            ))}
          </ul>
        </Col>
        <Row>
          <Col sm={12} className="fw-bold mb-3 ms-4">
            TOTALE:{' '}
            {arrayOfBooks.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.price),
              0
            )}
            $
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default Cart
