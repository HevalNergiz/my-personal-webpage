import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
const StartUpsList = () => {
  return (
    <div>
      <h3 className="mb-4 h5">I'm part of the...</h3>
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
            <span className="badge bg-light">Lead Designer & Web Dev.</span>
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none gap-3 text-muted d-inline-flex w-100 align-items-center justify-content-start"
            href="https://gdsc.community.dev/dokuz-eylul-university/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="">
              <span className="border-bottom border-dark">GDSC - DEÜ</span>

              <IconArrowUpRight className="ms-2" size={16}></IconArrowUpRight>
            </span>
            <span className="badge bg-light">Project Coordinator</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StartUpsList;
