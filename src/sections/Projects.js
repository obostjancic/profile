import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Divider, FlexRow, SectionHeading, FlexColumn } from "../components";
import { VSSection } from "../components/VSSection";

const image = id => ({
  id,
  src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. ${id}`,
});

const images = () => [0, 1, 2, 3].map(id => image(id));

const projects = {
  1: {
    id: "1",
    name: "Team 8",
    description: "Collaboration and HR management app",
    images: images(),
  },
  2: {
    id: "2",
    name: "Viktor",
    description: "Automated crypto currency trading bot",
    images: images(),
  },
  3: {
    id: "3",
    name: "Superchager",
    description: "Nest.js REST API starter kit",
    images: images(),
  },
  4: {
    id: "4",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet",
    images: images(),
  },
};

const ProjectHeading = styled.div`
  min-width: 5em;
  margin: 0.25em 0 0.5em 0;
  padding-bottom: 0.5em;

  & > h2 {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }

  & > p {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  min-width: 35%;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;

  & img {
    border-radius: 5px;
  }
`;

const ProjectWrapper = styled(FlexRow)`
  margin: 3em 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  ${({ right }) =>
    right
      ? `  
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;

  & > .project-inner {
    margin: 0 10% 0 0;
  }`
      : ""}

  @media only screen and (max-width: 992px) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
`;

const ProjectInner = styled(FlexColumn)`
  margin: 0 0 0 10%;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  min-width: 45%;
  text-align: left;

  @media only screen and (max-width: 992px) {
    & {
      margin: 10% 0;
    }
  }
`;

const Summary = styled.div`
  line-height: 1.5;
`;

const Project = ({ project, right }) => {
  const [selectedId, setSelectedId] = useState(0);
  const { name, description, images } = project;
  const summary = images.find(img => img.id === selectedId).description;
  return (
    <ProjectWrapper right={right}>
      <ProjectImage>
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
      </ProjectImage>
      <ProjectInner className="project-inner">
        <ProjectHeading>
          <h2>{name}</h2>
          <p>{description}</p>
        </ProjectHeading>
        <Divider />
        <Summary>{summary}</Summary>
      </ProjectInner>
    </ProjectWrapper>
  );
};

export const Projects = () => {
  return (
    <VSSection anchor="projects">
      <SectionHeading>Projects</SectionHeading>
      <div>
        <Project project={projects[1]} />
        <Project project={projects[2]} right />
        <Project project={projects[3]} />
        <Project project={projects[4]} right />
      </div>
    </VSSection>
  );
};
