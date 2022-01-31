import React from 'react';
import { Form, Row, Col, Card } from "react-bootstrap";
import "./Education.css";



function Education() {
  return (
    <Card>
      <Form className="education">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCollege">
            <Form.Label>College/University</Form.Label>
            <Form.Control type="text" placeholder="College/University" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFromyear">
            <Form.Label>From year</Form.Label>
            <Form.Control type="date" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridToyear">
            <Form.Label>To year</Form.Label>
            <Form.Control type="date" placeholder="" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridQualification">
            <Form.Label>Qualification</Form.Label>
            <Form.Control type="text" placeholder="Qualification" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
        </Row>
      </Form>
    </Card>
  );
}

export default Education;
