import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUserName } from '../redux/actions'

const CartIndicator = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const username = useSelector(store => {
    return store.user.name
  });

  const cart = useSelector(store => {
    // store è tutto lo stato di redux
    return store.cart.content
  })

  return (
    <div className="d-flex justify-content-end my-4">
      {
        username !== '' ? (<Button
          onClick={() => navigate('/cart')}
          className="d-flex align-items-center"
        >
          <FaShoppingCart />
          <span className="ms-2">{cart.length}</span>
        </Button>) : (<Form className='me-2' onSubmit={(e) => {
          e.preventDefault();
          dispatch(setUserName(name));
        }}>
          <Form.Control type="text" placeholder="fai il login" value={name} onChange={(e) => setName(e.target.value)} />

        </Form>)
      }

    </div >
  )
}

export default CartIndicator
