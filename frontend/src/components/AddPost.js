import React, { useState } from "react";
import Header from "./Header";

function AddPost() {
  const [buttonID, setButtonID] = useState("post-button-inactive");
  const url = process.env.REACT_APP_URI_POSTS;
  const redirectURL =
    window.location.href.substring(0, window.location.href.length - 3) +
    "postview";
  console.log(redirectURL);
  const checkifAllFilled = () => {
    const author = document.getElementById("author").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    if (author && location && description) {
      setButtonID("post-button-active");
    } else {
      setButtonID("post-button-inactive");
    }
  };
  return (
    <>
      <Header />
      <form action={url} method="POST" enctype="multipart/form-data">
        <div className="add-post-container">
          <input type="file" id="image-upload" name="image" required />

          <div className="author-location">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              onKeyUp={checkifAllFilled}
              required
            />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              onKeyUp={checkifAllFilled}
              required
            />
          </div>

          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onKeyUp={checkifAllFilled}
          />
          <input
            type="text"
            name="redirectURL"
            value={redirectURL}
            style={{ display: "none" }}
          />
          <button type="submit" id={buttonID}>
            Post
          </button>
        </div>
      </form>
    </>
  );
}

export default AddPost;
