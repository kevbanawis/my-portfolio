import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Smartphone from "@material-ui/icons/Smartphone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead" id="big-heading">
          <span className="about__name">Mark Kevin Banawis</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A Team Player and an individual with burning passion for problem-solving and a constant thirst for knowledge. 
          My curiosity has led me to explore diverse domains within the field of software development, 
          reinforcing my commitment to personal and professional growth.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/kevbanawis"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:dev.mkbanawis@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+639307386517"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <Smartphone />
          </a>
          <a
            href="https://www.linkedin.com/in/mkbanawis/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
