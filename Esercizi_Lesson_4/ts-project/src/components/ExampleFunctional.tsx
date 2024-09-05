import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

interface ExampleFunctionalProps {
    myprop: string
    num: number
}


const ExampleFunctional = ({ myprop, num }: ExampleFunctionalProps) => {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Mario')
    const [data, setData] = useState<{ title: string }>({ title: '' })

    return (
        <>
            <div className="mt-5">

                <Container className="border border-2 rounded-4 p-3">
                    <Row>
                        <Col className="mb-3">
                            <h2> Componente a funzione!</h2>
                            <p> {myprop} {num} </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className=" border rounded-4 p-3">
                                <p> Cambiami questo numero: {counter}</p>
                                <Button className='me-1' onClick={() => {
                                    setCounter(counter + 1)
                                }}> + </Button>
                                <Button onClick={() => { setCounter(counter - 1) }}> - </Button>
                            </div>
                        </Col>
                        <Col>
                            <div className="border p-3 rounded-4">
                                <p> Il nome è {name}</p>
                                <Button onClick={() => { setName(name === 'Mario' ? 'Luigi' : 'Mario') }}> Premi questo per cambiare nome</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className="border rounded-4 p-3">
                                <p> Riempi o svuota data: {data?.title}</p>
                                <Button onClick={() => { setData(data.title === '' ? { title: "ciao ciao" } : { title: '' }) }}> Riempi / Svuota </Button>
                            </div>
                        </Col>

                    </Row>
                </Container>



            </div>
        </>
    )
}

export default ExampleFunctional;