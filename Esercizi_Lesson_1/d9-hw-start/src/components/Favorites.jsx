import { Container, Col, Row, Button } from 'react-bootstrap'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Job from './Job';



function Favorites({ favourites }) {
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
                        <h1 className="display-1"> Favorites </h1>
                        <Button onClick={handleClick}> Homepage </Button>
                    </Col>
                    <Col xs={10} className="mx-auto">
                        {
                            arrayOfLikes.map((fav) => (

                                <Job key={fav._id} data={fav} />

                            ))
                        }

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Favorites;