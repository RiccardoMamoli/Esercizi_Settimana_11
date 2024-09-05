import { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

interface ExampleClassProps {
    subtext?: string
    otherprop?: number
}

interface ExampleClassState {
    counter: number
}

class ExampleClass extends Component<ExampleClassProps, ExampleClassState> {

    state = {
        counter: 0
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <h1> Esempio di componente a classe!</h1>
                                <p>{this.props.subtext} {this.props.otherprop}</p>
                            </div>
                        </Col>

                    </Row>

                </Container>
                <div>
                    <p>{this.state.counter.toFixed(0)} </p>

                    <Button variant="success" className="me-1" onClick={e => this.setState({
                        counter: this.state.counter + 1,
                    })}> + </Button>

                    <Button variant="success" onClick={e => this.setState({
                        counter: this.state.counter - 1
                    })}> - </Button>

                </div>
            </>
        )
    }
}

export default ExampleClass;