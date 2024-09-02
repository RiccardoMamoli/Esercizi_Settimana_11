
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Job = ({ data }) => {


  const dispatch = useDispatch();
  const selector = useSelector((store) => store.favourites.content);
  const isFav = selector.find((fav) => fav.company_name === data.company_name)

  return (
    <>

      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3} className='d-flex align-items-center'>
          <i
            className="bi bi-heart-fill me-3"
            style={{ color: isFav ? 'red' : '' }}
            onClick={() => {
              

              isFav
                ? dispatch({
                  type: 'REMOVE_FROM_FAVORITE',
                  payload: data
                })
                : dispatch({
                  type: 'ADD_TO_FAVORITE',
                  payload: data
                });
            }}
          ></i>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>


    </>
  )
}

export default Job
