import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className="container my-5">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control type="number" placeholder="Age" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Appointment;