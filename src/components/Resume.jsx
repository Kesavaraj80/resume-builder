import React, { useState } from "react";
import "./Resume.css";
import { Card, Button } from "react-bootstrap";
// Components Import
import Profile from "./profile/Profile";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skils from "./skils/Skils";
import Projects from "./projects/Projects";

const educationComponent = [Education];
const experienceComponent = [Experience];
function Resume() {
  const [educomponenet, setEducation] = useState(educationComponent);
  const [expcomponenet, setExperience] = useState(experienceComponent);

  const addEducationField = () => {
    setEducation([...educomponenet, Education]);
  };

  const removeEducationField = () => {
    const temp = [...educomponenet];
    temp.pop();
    setEducation(temp);
  };

  const addExperienceField = () => {
    setExperience([...expcomponenet, Experience]);
  };

  const removeExperienceField = () => {
    const temp = [...expcomponenet];
    temp.pop();
    setExperience(temp);
  };

  return (
    <Card className="resume">
      <Card.Header className="header">Personal Details</Card.Header>
      <Card.Body>
        <Profile />
      </Card.Body>
      <Card.Header className="header">Education Details</Card.Header>
      <Card.Body>
        {educomponenet.map((Item) => {
          return (
            <div className="education_item">
              <Item />
            </div>
          );
        })}
        <div className="d-grid gap-2">
          <Button
            variant="outline-primary"
            size="md"
            onClick={addEducationField}
          >
            Add Field
          </Button>
          <Button
            variant="outline-danger"
            size="md"
            onClick={removeEducationField}
            className="rem_btn"
          >
            Remove Field
          </Button>
        </div>
      </Card.Body>
      <Card.Header className="header">Experience Details</Card.Header>
      <Card.Body>
        {expcomponenet.map((Item) => {
          return (
            <div className="exp_item">
              <Item />
            </div>
          );
        })}
        <div className="d-grid gap-2">
          <Button
            variant="outline-primary"
            size="md"
            onClick={addExperienceField}
          >
            Add Field
          </Button>
          <Button
            variant="outline-danger"
            size="md"
            onClick={removeExperienceField}
            className="rem_btn"
          >
            Remove Field
          </Button>
        </div>
      </Card.Body>
      <Card.Header className="header">Project Details</Card.Header>
      <Card.Body>
        <Projects />
      </Card.Body>
      <Card.Header className="header">Extra Details</Card.Header>
      <Card.Body>
        <Skils />
      </Card.Body>
    </Card>
  );
}

export default Resume;
