import React from 'react';
import { Form, Row, Col, Card } from "react-bootstrap";
import './Projects.css'

function Projects() {
  return (
    <Card>
      <Form className="profile">
        <h4>Project 1</h4>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Control type="text" placeholder="Link" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
        </Row>

        <h4>Project 2</h4>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Control type="text" placeholder="Link" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
        </Row>

        <h4>Project 3</h4>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Control type="text" placeholder="Link" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
        </Row>
      </Form>
    </Card>
  );
}

export default Projects;
