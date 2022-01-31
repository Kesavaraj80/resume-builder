import React,{ useState} from "react";
import { WithContext as ReactTags } from "react-tag-input";

function Skils() {
 
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [tags, setTags] = useState([{ "id": "1", text: "express" }]);

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
    <div className="Skils">
      <div>
        <ReactTags
          tags={tags}
          suggestions={[
            { "id": "1", "text": "Javascript" },
            { "id": "2", "text": "Python" },
            { "id": "3", "text": "Java" },
            { "id": "4", "text": "ReactJS" },
            { "id": "5", "text": "NodeJS" },
            { "id": "6", "text": "express" },
            { "id": "7", "text": "Sql" },
            { "id": "8", "text": "Mongodb" },
            { "id": "9", "text": "Java" },
            { "id": "10", "text": "C++" },
            { "id": "11", "text": "C" },
          ]}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
    </div>
  );
}

export default Skils;
