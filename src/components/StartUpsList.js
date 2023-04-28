import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
const StartUpsList = () => {
  return (
    <div>
      <h5 className="mb-4">I'm part of the...</h5>
      <ul className="mb-0 fw-light d-grid gap-3 partof-list ps-0 ps-md-4">
        <li>
          <a
            className="text-decoration-none gap-3 text-muted d-inline-flex w-100 align-items-center justify-content-start"
            href="https://goaction.tech"
            target="_blank"
            rel="noreferrer"
          >
            <span className="">
              <span className="border-bottom border-dark">GoAction Labs</span>

              <IconArrowUpRight className="ms-2" size={16}></IconArrowUpRight>
            </span>
            <span className="badge bg-light">Lead Designer & UI Developer</span>
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none gap-3 text-muted d-inline-flex w-100 align-items-center justify-content-start"
            href="https://bybike.tech"
            target="_blank"
            rel="noreferrer"
          >
            <span className="d-inline-flex gap-2 align-items-center">
              <span className="border-bottom border-dark">ByBike</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-arrow-up-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="17" y1="7" x2="7" y2="17"></line>
                <polyline points="8 7 17 7 17 16"></polyline>
              </svg>
            </span>
            <span className="badge bg-light">UI/UX Designer</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StartUpsList;
