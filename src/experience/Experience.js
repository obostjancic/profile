import React from "react";
import "./Experience.css";
import { VSSection } from "../components/VSSection";

const Job = ({ company, position, duration, children }) => (
  <div className="job">
    <h2 className="company">{company}</h2>
    <h3 className="position primary">{position}</h3>
    <p className="duration">{duration}</p>
    <div className="description">{children}</div>
  </div>
);

export const Experience = () => (
  <VSSection anchor="experience">
    <div className="experience">
      <h2 className="section-heading">Experience</h2>

      <Job company="Anyline GmbH, Vienna" position="Web developer" duration={"February 2020 - Present"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo tortor, id
        dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl
        bibendum ultrices. Etiam in nisi sit amet.
      </Job>
      <Job company="Workflow EDV, Vienna" position="Web developer" duration={"May 2018 - January 2020"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo tortor, id
        dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl
        bibendum ultrices. Etiam in nisi sit amet.
      </Job>
      <Job company="IT Services, Sarajevo" position="Web developer" duration={"March 2017 - May 2018"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo tortor, id
        dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl
        bibendum ultrices. Etiam in nisi sit amet.
      </Job>
    </div>
  </VSSection>
);
