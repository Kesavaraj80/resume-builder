import React from 'react';
import './Resume.css'

// Components Import
import Profile from './profile/Profile'
import { Card } from 'react-bootstrap';
function Resume() {
  return (
    <Card className="resume">
      <Card.Header className="header">Personal Details</Card.Header>
      <Card.Body>
        <Profile />
      </Card.Body>
    </Card>
  );
}

export default Resume;
