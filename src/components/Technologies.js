import React from "react";
//import TABLER İCONS
import {
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandReact,
  IconBrandBootstrap,
  IconBrandSvelte,
  IconBrandTailwind,
  IconBrandNextjs
} from "@tabler/icons-react";

const Technologies = () => {
  return (
    <div>
      <h3 className="mb-4 h5">Technologies 👾</h3>
      <div className="languages-tools-mother">
        <span className="badge rounded-pill bg-light">
          <IconBrandHtml5 stroke={1.5} size={18}></IconBrandHtml5>
          HTML5
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandCss3 stroke={1.5} size={18}></IconBrandCss3>
          CSS3
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandJavascript stroke={1.5} size={18}></IconBrandJavascript>
          JavaScript
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandNextjs stroke={1.5} size={18}></IconBrandNextjs>
          NextJS
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandReact stroke={1.25} size={18}></IconBrandReact>
          ReactJS
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandSvelte stroke={1.25} size={18}></IconBrandSvelte>
          Svelte
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandTailwind stroke={1.25} size={18}></IconBrandTailwind>
          Tailwind CSS
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandBootstrap stroke={1.5} size={18}></IconBrandBootstrap>
          Bootstrap
        </span>
        <span className="badge rounded-pill bg-light">
          <IconBrandFigma stroke={1.5} size={18}></IconBrandFigma>
          Figma
        </span>
      </div>
    </div>
  );
};
export default Technologies;
