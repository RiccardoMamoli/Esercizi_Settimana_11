import { Container, Col, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Job from './Job';



function Favorites() {
    const navigate = useNavigate();
    const arrayOfLikes = useSelector((store) => store.favourites.content)


    function handleClick() {
        navigate('/');
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} className="mx-auto my-3">
                        <h1 className="display-1 text-light"> Favorites </h1>
                        <Button className="custom-button" onClick={handleClick}> Homepage </Button>
                    </Col>
                    <Col xs={10} className="mx-auto">

                        {arrayOfLikes.length === 0 ? (<p className='fw-5 fs-1 mt-2 text-light'> It's a bit empty here.</p>) :

                            (
                                arrayOfLikes.map((fav) => (

                                    <Job key={fav._id} data={fav} />

                                ))

                            )}

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Favorites;