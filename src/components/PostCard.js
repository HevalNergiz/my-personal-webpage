import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

function PostCard(props) {
  return (
    <a
      className="text-decoration-none text-muted fw-light d-inline-flex"
      href={props.link}
    >
      <div className="blog-card">
        <p>
          <span className="border-bottom border-dark">{props.title}</span>
          <IconArrowUpRight className="ms-2" size={16}></IconArrowUpRight>
        </p>
      </div>
    </a>
  );
}

export default PostCard;
