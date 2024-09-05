import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


interface Book {
    id: number
    title: string
    price: string
    imageUrl: string
    description: string
}

const FetchComponent = () => {

    const url = 'https://striveschool-api.herokuapp.com/food-books'
    const [books, setBooks] = useState<Book[]>([])
    const fetchBook = () => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('non ci siamo')
                }
            })
            .then((arrayBooks) => {
                setBooks(arrayBooks)
            })
            .catch((err) => {
                console.log('no', err)
            })
    }

    useEffect(() => {
        fetchBook()
    }, [])


    return (
        <>
            <div className="justify-content-center w-100">
                <h3> Recupero i libri</h3>
                <Container>
                    <Row className="justify-content-center">
                        {
                            books.map((b) => {
                                return (
                                    <Col xs={12} md={4}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src= />
                                            <Card.Body>
                                                <Card.Title>{b.title}</Card.Title>
                                                <Card.Text>
                                                    {b.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FetchComponent;