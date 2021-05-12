import React, { useState } from "react";
import "./Skills.css";
import { VSSection } from "../components/VSSection";

const Skill = ({ label, width, visible }) => (
  <div className="skill flex transition">
    <div className="skill-label border primary">{label}</div>
    <div className="skill-bar-wrapper border flex">
      <div className="skill-bar" style={{ width: `${visible ? width - 3 : 0}%` }} />
      <div className="skill-bar-percent primary">{width}%</div>
    </div>
  </div>
);

export const Skills = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = visible => {
    setVisible(visible);
  };

  return (
    <VSSection anchor={"skills"} handleChange={handleChange}>
      <div className="section skills">
        <h2 className="section-heading">Skills & Interests</h2>
        <div className="flex row column-wrap">
          <div className="skills-summary">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pellentesque felis. Nam cursus justo
              tortor, id dignissim lacus viverra at. Curabitur pulvinar est nec lectus sagittis egestas. Sed porttitor
              orci eu nisl bibendum ultrices. Etiam in nisi sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut quis pellentesque felis. Nam cursus justo tortor, id dignissim lacus viverra at. Curabitur
              pulvinar est nec lectus sagittis egestas. Sed porttitor orci eu nisl bibendum ultrices. Etiam in nisi sit
              amet.
            </p>
          </div>
          <div className="skills-bars">
            <Skill label="Node.js" visible={visible} width="90" />
            <Skill label="React" visible={visible} width="80" />
            <Skill label="Typescript" visible={visible} width="85" />
            <Skill label="Javascript" visible={visible} width="75" />
            <Skill label="Nest.js" visible={visible} width="80" />
            <Skill label="Django" visible={visible} width="65" />
            <Skill label="Spring" visible={visible} width="90" />
          </div>
        </div>
      </div>
    </VSSection>
  );
};
