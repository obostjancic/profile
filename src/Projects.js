import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Projects.css";
import { VSSection } from "./VSSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const url =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

const projects = {
  1: {
    id: "1",
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet",
    images: [
      {
        id: 0,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 1",
      },
      {
        id: 1,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 2",
      },
      {
        id: 2,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 3",
      },
      {
        id: 3,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 4",
      },
    ],
  },
  2: {
    id: "2",
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet",
    images: [
      {
        id: 0,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 1",
      },
      {
        id: 1,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 2",
      },
      {
        id: 2,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 3",
      },
      {
        id: 3,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 4",
      },
    ],
  },
  3: {
    id: "3",
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet",
    images: [
      {
        id: 0,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 1",
      },
      {
        id: 1,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 2",
      },
      {
        id: 2,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 3",
      },
      {
        id: 3,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 4",
      },
    ],
  },
  4: {
    id: "4",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet",
    images: [
      {
        id: 0,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 1",
      },
      {
        id: 1,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 2",
      },
      {
        id: 2,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 3",
      },
      {
        id: 3,
        src: url,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. 4",
      },
    ],
  },
};

const Project = ({ project, right }) => {
  const [selectedId, setSelectedId] = useState(0);
  const { name, description, images } = project;
  const summary = images.find(img => img.id === selectedId).description;
  return (
    <div className={`project ${right ? "right" : ""}`}>
      <div className="project-image">
        <Carousel
          showThumbs={false}
          showStatus={false}
          onChange={id => {
            setSelectedId(id);
          }}
        >
          {images.map(img => (
            <img key={img.id} src={img.src} alt="" />
          ))}
        </Carousel>
      </div>
      <div className="project-inner">
        <div className="project-name">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="divider"></div>
        <div className="project-description">{summary}</div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <VSSection>
      <div className="projects">
        <h2 className="section-heading">Projects</h2>
        <div>
          <Project project={projects[1]} />
          <Project project={projects[2]} right />
          <Project project={projects[3]} />
          <Project project={projects[4]} right />
        </div>
      </div>
    </VSSection>
  );
};
