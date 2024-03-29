import React from "react";
import post from "../database/postCardData";
import PostCard from "./PostCard";
//key prop for li

const ArticlesList = () => {
  return (
    <div>
      <h3 className="mb-4 h5">My writings ✍️</h3>
      <div className="d-grid gap-3">
        {post.map((p) => {
          return (
            <ul className="mb-0 fw-light d-grid gap-3 partof-list ps-0 ps-md-4">
              <li key={p.id}>
                <PostCard link={p.link} title={p.title} />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesList;
