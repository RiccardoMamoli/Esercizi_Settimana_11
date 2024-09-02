import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const CartIndicator = () => {
  const navigate = useNavigate()
  const cart = useSelector(store => {
    // store è tutto lo stato di redux
    return store.cart.content
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{cart.length}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
