import React, { useEffect, useRef } from "react";
import cv from "../icons/cv.svg";
import git from "../icons/git.svg";
import linkedin from "../icons/linkedin.svg";
import medium from "../icons/medium.svg";
import "./Intro.css";
import { VSSection } from "../components/VSSection";
import useCanvas from "./useCanvas";

const Icon = ({ src, href }) => (
  <a href={href} className="icon" target="_blank" rel="noopener noreferrer">
    <img src={src} alt="" />
  </a>
);

const Canvas = () => {
  return <canvas className="intro-background" />;
};

export const Intro = () => {
  return (
    <>
      <Canvas />
      <VSSection intro>
        <div className="intro">
          <div className="photo" style={{ background: "url(profile-photo-square.jpg)", backgroundSize: "contain" }} />
          <h1 className="heading">Ognjen Bostjancic</h1>
          <h3 className="subheading">Software developer</h3>
          <div className="summary">
            Computer science student and software developer currently focused on web development, but interested in
            pretty much everything that ends up compiled or interpreted. Currently, I am working as a web developer for
            Anyline GmbH, where I am mostly commited to development of a cloud infrastructure used to automate Machine
            learning and Computer vision processes. Colleagues know me as motivated, communicative and a creative
            developer who likes to help others, and who can be trusted to come up with a solution.
            {/* I welcome individual responsibility, and I
        can work well alone, but I’m at my best collaborating with others. Parallel to work I graduated with a Bachelor
        in Computer Science, and I am studying a Master Degree in Computer Science. Contact me, take a look at some of
        my code or check my resume here: */}
          </div>
          <div>
            <div className="icons flex row">
              <Icon src={linkedin} href={"https://www.linkedin.com/in/obostjancic/"} />
              <Icon src={git} href={"https://gitlab.com/obostjancic/"} />
              <Icon src={medium} href={"mailto:ognjen.bostjancic@gmail.com"} />
              <Icon src={cv} href={"./ognjen-bostjancic-cv.pdf"} />
            </div>
          </div>
        </div>
      </VSSection>
    </>
  );
};
