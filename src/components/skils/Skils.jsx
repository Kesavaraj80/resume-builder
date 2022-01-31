import React,{ useState} from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import './Skils.css'



function Skils() {
 
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [tags, setTags] = useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <div className="container_skils">
      <Card className="Skils">
        <div id="app">
          <h4>Skills/Languages</h4>
          <ReactTags
            tags={tags}
            suggestions={[
              { id: "1", text: "Javascript" },
              { id: "2", text: "Python" },
              { id: "3", text: "Java" },
              { id: "4", text: "ReactJS" },
              { id: "5", text: "NodeJS" },
              { id: "6", text: "express" },
              { id: "7", text: "Sql" },
              { id: "8", text: "Mongodb" },
              { id: "9", text: "Java" },
              { id: "10", text: "C++" },
              { id: "11", text: "C" },
            ]}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="inline"
            autocomplete
            placeholder="Enter your skil"
          />
        </div>
        <Form className="profile">
          <h4>Interest</h4>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstname">
              <Form.Control type="text" placeholder="Interest 1" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Control type="text" placeholder="Interest 2" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Control type="text" placeholder="Interest 3" />
            </Form.Group>
          </Row>
        </Form>
      </Card>
      <Button variant="outline-info" className="btn">Dowload Resume</Button>
    </div>
  );
}

export default Skils;
