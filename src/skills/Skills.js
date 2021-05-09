import React from "react";
import "./Skills.css";
import { VSSection } from "../components/VSSection";

const Skill = ({ label, width }) => (
  <div className="skill flex">
    <div className="skill-label border primary">{label}</div>
    <div className="skill-bar-wrapper border flex">
      <div className="skill-bar" style={{ width: `${width - 3}%` }} />
      <div className="skill-bar-percent">{width}%</div>
    </div>
  </div>
);

export const Skills = () => (
  <VSSection>
    <div className="section skills">
      <h2 className="section-heading">Skills & Interests</h2>
      <div className="flex row column-wrap">
        <div className="skills-summary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo
            tortor, id dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor
            orci eu nisl bibendum ultrices. Etiam in nisi sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut quis pellentesque felis. Nam cursus justo tortor, id dignissim lacus viverra at. Curabitur pulvinar
            est nec lectus sagittis egestas. Sed porttitor orci eu nisl bibendum ultrices. Etiam in nisi sit amet.
          </p>
        </div>
        <div className="skills-bars">
          <Skill label="Node.js" width="90" />
          <Skill label="React" width="80" />
          <Skill label="Typescript" width="85" />
          <Skill label="Javascript" width="75" />
          <Skill label="Nest.js" width="80" />
          <Skill label="Django" width="65" />
          <Skill label="Spring" width="90" />
        </div>
      </div>
    </div>
  </VSSection>
);
