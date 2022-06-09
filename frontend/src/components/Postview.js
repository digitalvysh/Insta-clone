import "./Postview.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { ReactComponent as MoreOptions } from "./assets/more-options.svg";
import { ReactComponent as Like } from "./assets/like.svg";
import { ReactComponent as Share } from "./assets/share.svg";

const Postview = () => {
  const [data, getData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const url = process.env.REACT_APP_URI_POSTS;
      console.log(url);
      const response = await fetch(url);
      const postData = await response.json();
      const allPosts = postData.allPosts;
      getData(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      {data.map((item, index) => (
        <div className="post" key={index}>
          <div className="tophalf">
            <div>
              <p>
                <b>{item.name}</b>
              </p>
              <p className="lighttext">{item.location}</p>
            </div>
            <MoreOptions />
          </div>
          <div className="postimage">
            <img src={item.PostImage} alt="post"></img>
          </div>
          <div className="bottomhalf">
            <div className="middlebar">
              <div>
                <span className="tools">
                  <Like />
                </span>
                <span className="tools">
                  <Share />
                </span>
              </div>
              <div>
                <p>{item.displayDate}</p>
              </div>
            </div>

            <p className="lighttext">{item.likes} Likes</p>
            <p>
              <b>{item.description}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Postview;
