import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  return (
    <Card>
      <Form className="experience">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCollege">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company" />
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
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Designation" />
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

export default Experience;
