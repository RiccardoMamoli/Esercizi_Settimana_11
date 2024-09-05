import { FormEvent, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const BootstrapForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        checkbox: false
    })

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        console.log('OGGETTO', formData)
    }


    return (
        <>
            <Container className='mt-5 border border-2 rounded-4 py-3'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        <h1> Proviamo un form</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })
                                    }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            password: e.target.value
                                        })
                                    }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check 
                                type="checkbox" 
                                label="Check me out" 
                                checked={formData.checkbox}
                                onChange={e => {
                                    setFormData({
                                        ...formData,
                                        checkbox: e.target.checked
                                    })
                                }}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </>
    )

}

export default BootstrapForm;