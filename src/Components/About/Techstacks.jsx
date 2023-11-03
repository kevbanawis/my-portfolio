import React from "react";
import "./Techstacks.css";
import {
  SiHtml5,
  SiPython, SiPostgresql,
  SiCsharp, SiJava,
  SiJavascript, SiPhp, SiJinja,
  SiCplusplus, SiReact, SiTypescript, SiAngular
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        
        <div className="techsection">
          <h2 className="section__title different">Skills</h2>

          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiReact />
            <h5>React</h5>
          </div>
          <div>
            <SiAngular />
            <h5>Angular</h5>
          </div>
          <div>
            <SiCsharp />
            <h5>C#</h5>
          </div>
          <div>
            <SiJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiPhp />
            <h5>PHP</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS3</h5>
          </div>
          <div>
            <SiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
        </div>

      </div>
    </>
  );
};
