import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddPost() {
  const [buttonID, setButtonID] = useState("post-button-inactive");
  const navigate = useNavigate();
  const submitHandler = async () => {
    const imageURL = document.getElementById("image-url").value;
    const author = document.getElementById("author").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    if (imageURL && author && location && description) {
      const url = process.env.REACT_APP_URI_POSTS;
      const data = {
        name: author,
        location: location,
        description: description,
        PostImage: imageURL,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const status = await response.json();
      if (status.message === "success") {
        navigate("/postview");
      }
    } else {
      return null;
    }
  };

  const checkifAllFilled = () => {
    const imageURL = document.getElementById("image-url").value;
    const author = document.getElementById("author").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    if (imageURL && author && location && description) {
      setButtonID("post-button-active");
    } else {
      setButtonID("post-button-inactive");
    }
  };
  return (
    <>
      <Header />
      <div className="add-post-container">
        <div>
          <input
            type="text"
            placeholder="No File Chosen"
            style={{ width: "77.5%" }}
            id="image-url"
            onKeyUp={checkifAllFilled}
          />
          <button>Browse</button>
        </div>

        <div className="author-location">
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            onKeyUp={checkifAllFilled}
          />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            onKeyUp={checkifAllFilled}
          />
        </div>

        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onKeyUp={checkifAllFilled}
        />
        <button id={buttonID} onClick={submitHandler}>
          Post
        </button>
      </div>
    </>
  );
}

export default AddPost;
