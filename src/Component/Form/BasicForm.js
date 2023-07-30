import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, InputGroup, Row } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

const radios = [
    { name: "Female", value: "female" },
    { name: "Male", value: "male" },
    { name: "Others", value: "others" }
];

const BasicForm = () => {

    const [radioValue, setRadioValue] = useState('Female');
    const [validated, setValidate] = useState(false);
    const [firstname, setFirstName] = useState();
    

    const changehandle = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
    }

    const handleSubmit = (event) => {
        console.log(firstname);
        console.log('Hello !');
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidate(true);
    };

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="col-sm-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type='text'
                            minLength='5'
                            value={firstname}
                            onChange={changehandle}
                            placeholder='First Name'
                            id='FN'
                            required
                            >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please choose a First Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-sm-3">
                        <Form.Label >Last Name</Form.Label>
                        <Form.Control type='text' placeholder='Last Name' id='LN' required></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Last Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-sm-6">
                        <Form.Label >Address</Form.Label>
                        <Form.Control type='text' placeholder='Address' id='Address' required></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-sm-12">
                        <Form.Label>Gender:</Form.Label> {' '}
                        {radios.map((radio, index) => (
                            <Form.Check
                                key={index}
                                type='radio'
                                name='radio'
                                label={radio.name}
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={e => setRadioValue(e.currentTarget.value)}
                                inline required>
                            </Form.Check>
                        ))}
                        <Form.Control.Feedback type="invalid">
                            Please choose Gender.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-sm-3">
                        <Form.Label>State</Form.Label>
                        <Form.Select aria-label='Default-select example' required>
                            <option selected disabled value="">Open this select state</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please choose State.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-sm-3">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label='Default-select example' required>
                            <option selected disabled value="">Open this select city</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please choose City.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <Form.Control type='email' autoComplete='off' placeholder="name@example.com" id='email'
                                aria-describedby="basic-addon2" required></Form.Control>
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Please choose City.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button variant="light">Reset All</Button>{' '}
                <Button type="submit" variant="warning">Submit Form</Button>
            </Form>
        </Container>
    );
}

export default BasicForm;
