import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProjectCard = (props) => {
  return (
    <a
      className="text-decoration-none text-dark h-100"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="my-card h-100">
        <div className="my-card-body">
          <div className="d-grid gap-3 mb-3">
            <LazyLoadImage src={props.path} alt="Inderse Logo" height="50" />
            <h5 className="mb-0 fw-bold">{props.title}</h5>
            <p className="fw-light">{props.description}</p>
          </div>

          <div className="categories d-flex flex-wrap gap-2">
            {props.badges.map((badge, index) => (
              <span key={index} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
