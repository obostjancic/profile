import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { Divider, SectionHeading } from '../components';
import { VSSection } from '../components/VSSection';
import { projects } from './data';

const ProjectHeading = styled.div`
  min-width: 5em;
  margin: 0.25em 0 0.5em 0;
  padding-bottom: 0.5em;

  & > h2 {
    font-size: 23px;
    margin-top: -0.25em;
    margin-bottom: 0.25em;
  }

  & > p {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
`;

const ProjectImage = styled.div`
  min-height: 15em;
  overflow: hidden;
  border-radius: 10px;

  width: 50%;

  @media only screen and (max-width: 992px) {
    & {
      width: 100%;
      max-height: 24em;
    }
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 3em 0 7em 0;
  transition: 0.3s;

  @media only screen and (max-width: 992px) {
    & {
      flex-direction: column;
    }

    & > .project-inner {
      margin: 0.5em 0 0 0;
    }
  }
`;

const ProjectInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em;
  justify-content: flex-start;
  width: 50%;
  text-align: left;

  @media only screen and (max-width: 992px) {
    & {
      width: 100%;
      margin: 10em 0;
    }
  }
`;

const Summary = styled.div`
  line-height: 1.75em;
  height: 7em;
  max-width: 500px;
`;

const Project = ({ project, right }) => {
  const [selectedId, setSelectedId] = useState(0);
  const { name, description, images } = project;
  const summary = images.find((img) => img.id === selectedId).description;
  return (
    <ProjectWrapper right={right}>
      <ProjectImage>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          onChange={(id) => {
            setSelectedId(id);
          }}
        >
          {images.map((img) => (
            <img key={img.id} src={img.src} alt="Project images" />
          ))}
        </Carousel>
      </ProjectImage>
      <ProjectInner className="project-inner">
        <ProjectHeading>
          <h2>{name}</h2>
          <p>
            <b>{description}</b>
          </p>
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
        <Project project={projects.team8} />
        <Project project={projects.kolorkross} />
      </div>
    </VSSection>
  );
};
