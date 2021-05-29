import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { Divider, FlexRow, SectionHeading, FlexColumn } from '../components';
import { VSSection } from '../components/VSSection';
import { projects } from './data';

const ProjectHeading = styled.div`
  min-width: 5em;
  margin: 0.25em 0 0.5em 0;
  padding-bottom: 0.5em;

  & > h2 {
    font-size: 23px;
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
      : ''}

  @media only screen and (max-width: 992px) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    & > .project-inner {
      margin: 0.5em 0 0 0;
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
      text-align: center;
      align-items: center;
    }
  }
`;

const Summary = styled.div`
  line-height: 1.5;
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
