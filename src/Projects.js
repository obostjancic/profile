import React, { useState } from "react";
import "./Projects.css";
import { VSSection } from "./VSSection";

const projects = {
  1: {
    id: "1",
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet",
  },
  2: {
    id: "2",
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet",
  },
  3: {
    id: "3",
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet",
  },
  4: {
    id: "4",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet, consectetur adipiscing el sit amet",
  },
};

const Project = ({ project, onClick }) => {
  const { id, name, description } = project;

  return (
    <div className="project">
      <div className="project-image" style={{ background: "url(code.png)", backgroundSize: "contain" }} />
      <div className="project-inner">
        <h2 className="project-name">{name}</h2>
        <div className="project-description">{description}</div>
        <div className="project-button" onClick={() => onClick(id)}>
          Learn More
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = ({ project, onClick }) => {
  const { name, description } = project;
  return (
    <div className="project-detail">
      {/* <div className="project-image" style={{ background: "url(code.png)", backgroundSize: "contain" }} /> */}
      <h2 className="project-name">{name}</h2>
      <div className="project-description">{description}</div>
      <div className="project-button" onClick={() => onClick()}>
        Go back
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedId, setSelectedId] = useState();
  return (
    <VSSection>
      <div className="projects">
        <h2 className="section-heading">Projects</h2>
        <div className="flex-wrapper">
          {!selectedId ? (
            <>
              <div className="flex-wrapper">
                <Project project={projects[1]} onClick={setSelectedId} />
                <Project project={projects[2]} onClick={setSelectedId} />
              </div>
              <div className="flex-wrapper">
                <Project project={projects[3]} onClick={setSelectedId} />
                <Project project={projects[4]} onClick={setSelectedId} />
              </div>
            </>
          ) : (
            <ProjectDetail project={projects[selectedId]} onClick={setSelectedId} />
          )}
        </div>
      </div>
    </VSSection>
  );
};
