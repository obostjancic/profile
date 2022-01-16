import React from 'react';
import styled from 'styled-components';
import { theme, SectionHeading, VSSection } from '../components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const JobWrapper = styled.div`
  margin: 4em auto;

  & > h2 {
    font-size: 23px;
    margin-bottom: 0.25em;
  }
  & > h3 {
    font-size: 18px;
    margin: 0;
    color: ${theme.primary};
  }
  & > h4 {
    margin-top: 0;
    font-size: 0.8em;
    line-height: 1.5;
    font-weight: normal;
  }
  & > p {
    background-color: #f5f7fb;
    line-height: 1.5;
  }

  @media only screen and (max-width: 992px) {
    & {
      text-align: left;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  margin: 0.25em 0.5em 0.25em 0;
  padding: 0.25em 0.75em;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ddd;
  font-weight: bold;
  font-size: 0.85em;
  background-color: ${theme.primary};
  color: ${theme.backgroundDark};
  opacity: 1;
}`;

const Job = ({ company, position, duration, children, badges }) => (
  <JobWrapper>
    <h2>{company}</h2>
    <h3>{position}</h3>
    <h4>{duration}</h4>
    {badges?.map((badge) => (
      <Badge key={badge}>{badge}</Badge>
    ))}
    <p>{children}</p>
  </JobWrapper>
);

export const Experience = () => (
  <VSSection anchor="experience">
    <Wrapper>
      <SectionHeading>Experience</SectionHeading>

      <Job
        company="Anyline, Vienna"
        position="Full stack web developer"
        duration={'February 2020 - Present'}
        badges={['Node.js', 'Typescript', 'React', 'Electron', 'Google Cloud']}
      >
        As a full stack web developer, I am responsible for the development of multiple of
        microservices inside the cloud based ecosystem, as well as their frontend clients. Apart
        from that I also took ownership of an internal IDE, which is used to develop various OCR
        products.
      </Job>
      <Job
        company="Workflow EDV, Vienna"
        position="Backend web developer"
        duration={'May 2018 - Jan 2020'}
        badges={['Java', 'Spring', 'Hibernate', 'Vue.js', 'Typescript']}
      >
        Starting out as an intern, I transitioned into a developer position. I developed new REST
        API as a part of the existing codebase using Spring framework. I also briefly worked with a
        Vue.js frontend application that consumed the API.
      </Job>
      <Job
        company="IT Services, Sarajevo"
        position="Backend web developer"
        duration={'Mar 2017 - May 2018'}
        badges={['Java', 'Spring', 'Hibernate', 'JasperReports']}
      >
        Focus of my work was on developing a REST API backend for the new Student management system.
        I worked mostly with Java and Spring. My Responsibilities included requirement gathering and
        analysis, design, implementation, testing and deployment. Additionally I developed and
        maintained a couple of smaller applications used to facilitate internal processes.
      </Job>
    </Wrapper>
  </VSSection>
);
